<%*
const callouts = {
   note:     '🔵 ✏ Note',
   info:     '🔵 ℹ Info',
   todo:     '🔵 🔳 Todo',
   tip:      '🌐 🔥 Tip / Hint / Important',
   abstract: '🌐 📋 Abstract / Summary / TLDR',
   question: '🟡 ❓ Question / Help / FAQ',
   quote:    '🔘 💬 Quote / Cite',
   example:  '🟣 📑 Example',
   success:  '🟢 ✔ Success / Check / Done',
   warning:  '🟠 ⚠ Warning / Caution / Attention',
   failure:  '🔴 ❌ Failure / Fail / Missing',
   danger:   '🔴 ⚡ Danger / Error',
   bug:      '🔴 🐞 Bug',
};

const type = await tp.system.suggester(Object.values(callouts), Object.keys(callouts), true, 'Select callout type.');

const title = await tp.system.prompt('Title:', '', true);

let Aufgabe = await tp.system.prompt('Content (New line -> Shift + Enter):', '', true, true);

let Lösung = await tp.system.prompt('Content (New line -> Shift + Enter):', '', true, true);

Aufgabe = Aufgabe.split('\n').map(line => `> ${line}`).join('\n')
Lösung = Lösung.split('\n').map(line => `>> ${line}`).join('\n')


const calloutHead = `> [!${type}]+ ${title}\n`;
const calloutHead2 = '>> [!success]- Lösung anzeigen:\n';
tR += calloutHead + Aufgabe + `\n` + calloutHead2 + Lösung

-%>

