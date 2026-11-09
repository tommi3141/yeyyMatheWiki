// Ersatz für `npx quartz sync`: committen, Remote-Änderungen einarbeiten, normal pushen.
// Kein Force-Push, kein `-X ours`, kein Verschieben des content-Ordners.
// Aufruf: npm run publish [-- "Commit-Nachricht"]
import { spawnSync } from "node:child_process"

const ORIGIN = "origin"

function git(args, { allowFail = false } = {}) {
  const res = spawnSync("git", args, { stdio: "inherit" })
  if (res.status !== 0 && !allowFail) {
    console.error(`\n"git ${args.join(" ")}" ist fehlgeschlagen. Abbruch, es wurde nichts gepusht.`)
    process.exit(res.status ?? 1)
  }
  return res.status === 0
}

const branch = spawnSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
  encoding: "utf8",
}).stdout.trim()
if (!branch || branch === "HEAD") {
  console.error("Kein Branch ausgecheckt (detached HEAD). Abbruch.")
  process.exit(1)
}

const timestamp = new Date().toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" })
const message = process.argv[2] ?? `Publish: ${timestamp}`

git(["add", "-A"])
// Exit-Code 1 bei "nothing to commit" ist in Ordnung.
git(["commit", "-m", message], { allowFail: true })

// Änderungen vom Remote (z. B. gemergte Pull Requests) per Rebase einarbeiten.
// Bei Konflikten bricht der Rebase ab, `git rebase --abort` stellt den alten Stand wieder her.
if (!git(["pull", "--rebase", "--autostash", ORIGIN, branch], { allowFail: true })) {
  console.error("\nRebase hat Konflikte. Bitte lösen (git status) oder `git rebase --abort`.")
  process.exit(1)
}

git(["push", "-u", ORIGIN, branch])
console.log(`\nFertig: ${branch} nach ${ORIGIN} gepusht.`)
