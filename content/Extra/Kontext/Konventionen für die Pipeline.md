---
draft: true
---

# Konventionen für die Snap-Math-Pipeline (vorläufig)

**Status:** Abgeleitet aus `content/CLAUDE.md` und den vorhandenen Notizen (Stand 2026-11-09). Die maßgeblichen
Dateien `Private/Kontext/Schreibstil.md` und `Zielgruppe.md` liegen nur lokal beim Nutzer (gitignored) und
waren beim Erstellen nicht verfügbar. **Der Nutzer ersetzt oder ergänzt diese Datei** (z. B. durch Kopieren der
beiden Private-Dateien hierher). Bei Widersprüchen gilt: Chat-Anweisung > diese Datei > Vorlagen.

Dieser Ordner ist Teil des Repos, aber über `Extra` (ignorePatterns) nie auf der Website.

## Harte Regeln

- Alles Neue bekommt `draft: true` (echtes Boolean). Nie `draft: false` setzen.
- Nie `npx quartz sync`, nie `npm run publish`, nie Force-Push. Nur Branch + Pull Request.
- Neue Tags nur nach Rückfrage. Erlaubt:
  - Stufe: `Mittelstufe`, `Oberstufe`, `Uni`
  - Themenbereich: `Algebra`, `Analysis`, `Geometrie`, `Vektorgeometrie`, `Stochastik`
  - Notiztyp: `Erklärung`, `Formelsammlung`, `Aufgaben`, `Checkliste`, `Übersicht`
  - Medium (optional): `Video`, `GeoGebra`, `Interaktiv`
- Kein `#` in YAML-Tags; leere Frontmatter-Felder weglassen; `Basiswissen` ist ein Ordner, kein Tag; `Aufgaben` statt `Übungen`.
- Dateinamen mit Leerzeichen und Großschreibung, eine Notiz pro Thema. Aufgabensammlungen in eigene Notiz `<Thema> Übungen.md`.
- Übernommene Inhalte mit Quelle und Lizenz im HTML-Footer kennzeichnen (Muster: `Extra/Templates/Template, 0Default.md`). Share-Alike beachten. Lösungswege selbst rechnen, nicht übernehmen.
- Verknüpfen per `[[Wikilink]]`, Wiederholung vermeiden: existiert das Wissen, auf die Notiz verweisen oder dort ergänzen.

## Quellen und Lizenzen (Recherche Stand 2026-11-09)

Vor dem Übernehmen immer die Lizenz **der konkreten Seite** prüfen, nie pauschal annehmen.

- **Serlo (serlo.org):** CC BY-SA 4.0. Pflicht: Serlo und Autoren nennen, Lizenz verlinken, Änderungen
  kennzeichnen. **Share-Alike:** Bearbeitungen müssen unter derselben Lizenz stehen. Folge für das Wiki:
  Adaptierte Notizen/Aufgaben als CC BY-SA 4.0 kennzeichnen. Eigene Lösungswege und eigene Texte bleiben
  eigene Inhalte. Serlo ist offen editierbar, Inhalte fachlich gegenprüfen.
- **schule-bw.de:** Viele Textseiten stehen unter CC BY 4.0 (Namensnennung: Landesbildungsserver
  Baden-Württemberg, Link auf die Seite). **Aber:** Bilder und Einbettungen können andere Lizenzen haben;
  für einzelne Dokumente (z. B. Kompetenzraster-PDFs) wurde eine Einschränkung gefunden („Vervielfältigung
  für den Unterricht in BW-Schulen"). Autoritative Regeln: `schule-bw.de/urheberrecht` (konnte beim Recherchieren
  nicht abgerufen werden, Nutzer prüft). Footer in `Template, 0Default.md` nur verwenden, wenn die Seite
  tatsächlich CC BY 4.0 ist.
- **Bildungsplan BW (Gymnasium Mathematik):** Als Orientierung für Inhalte und Reihenfolge nutzbar, Texte nicht
  1:1 übernehmen, solange die Lizenz nicht geklärt ist.
- Kein Material ohne erkennbare Lizenz übernehmen. Im Zweifel nur Idee und Struktur nutzen und selbst formulieren.

## Didaktische Leitlinien (aus Fachdidaktik-Recherche)

- Typische Schülerfehler als Einstieg oder in der Erklärphase aufgreifen und der korrekten Lösung
  gegenüberstellen (fördert konzeptuelles Verständnis).
- Merksatz knapp formulieren; Verständnis zeigt sich, wenn man Begriff nennen, Beispiele geben und begründen kann
  (Vollrath) → Abschnitt „Check dich".
- Videos: eine Kernidee, Regel-Beispiel-Struktur, keine Exkurse (siehe `Template, Videoskript.md`).

## Beobachteter Stil (aus Bestand, bei Zweifel mit dem Nutzer klären)

- Deutsch, du-Form, locker und direkt („Eigentlich musst du dir die Formeln nicht merken").
- Idee vor Regel: erst warum/wozu, dann die Formel. Selbst-Herleiten ermutigen.
- Formeln in KaTeX: inline `$a^n$`, abgesetzt `$$ ... $$`. Ergebnisse mit `\boxed{}`.
- Callouts: `[!info]+ Definition` / `Basiswissen` für Regeln, `[!note] Aufgabe n` für Aufgaben, darin verschachtelt
  `[!tip]- Tipp` und `[!success]- Lösung anzeigen`.
- Aufgaben: erst selbst rechnen, dann Lösung aufklappen. Schwierigere Teile mit Tipp.
- Herkunftsnotizen für Menschen als Obsidian-Kommentar `%% ... %%` am Anfang (wird nicht gerendert).

## Stil des Nutzers aus seinem Video „Potenzgesetze" (YouTube jxnI295jElc, ca. 20 min)

Quelle: Transkript, das der Nutzer am 2026-11-09 eingefügt hat. Es ist automatisch erzeugt und hat viele
Hörfehler („Experimenten" statt Exponenten), also nur für Stil und Aufbau nutzen, nie als Inhaltsquelle.

- **Ansprache:** „ihr", locker und freundlich, persönlicher Einstieg („heute habe ich euch sieben Potenzgesetze mitgebracht").
- **Aufbau pro Regel:** (1) Regel in einem Satz in Worten („Potenzen mit gleicher Basis werden multipliziert, indem ihre
  Exponenten addiert werden"), Formel in einem grauen Kasten → (2) **„Probiert es selbst"**, Aufgaben vorgeben, Pause →
  (3) Lösung der Aufgaben mit der Regel → (4) **„Warum funktioniert das?"**: Herleitung durch Ausschreiben
  ($4^2 \cdot 4^3 = 4\cdot4 \cdot 4\cdot4\cdot4 = 4^5$) oder Kürzen → nächste Regel.
- **Von einfach zu schwer:** erst Begriffe und Sonderfälle ($a^1$, $a^0$, Ausnahme $0^0$), dann Regeln, dann kombinierte Aufgaben.
- **Verständnis vor Auswendiglernen:** „das ist immer gut zu wissen, woher die Regel kommt".
- **Fehlerwarnung mit Beispiel:** „$(a+b)^2$ ist auf gar keinen Fall $a^2+b^2$. Bei Mal geht das, bei Plus nicht, bitte nicht merken."
- **Vorwissen kurz antippen:** Brüche kürzen, Multiplikation ist vertauschbar („imaginäres Mal-Zeichen"), $a:b$ als Bruch; bei Bedarf
  Verweis auf ein eigenes Video/eine Notiz.
- **Farbmarkierungen** (rot/gelb) für Teilterme, die man im Blick behalten soll → in Notizen als fett oder Callout lösbar.
- **Interaktion:** „Ich hoffe, ihr habt es probiert", „sagt Bescheid, wenn ihr Probleme mit Brüchen habt, dann mache ich ein Video dazu",
  Feedback und Teilen mit Klassenkamerad:innen erbitten, nächstes Video ankündigen.
- **Notiz-Muster (Potenzgesetze.md):** Hinweis „Falls du keine Lust hast zu lesen: unten ist das Video", Regeln im `[!info]+ Basiswissen`-Callout,
  Video eingebettet.

## Ordner

`Basiswissen/` stufenübergreifende Grundlagen, `Mittelstufe/`, `Oberstufe/`, `Uni/`, `Dies und Das/`.
Eingang der Pipeline: `Extra/Eingang/<datum>-<id>/`. Videoskripte: `Extra/Videoskripte/`.

## Offene Punkte (vom Nutzer zu klären)

- Verbindliche Fassung von Schreibstil und Zielgruppe (siehe Status).
- Mathematische Qualitätsprüfung ist Aufgabe des Nutzers im PR-Review; der Agent markiert Unsicheres im PR.
