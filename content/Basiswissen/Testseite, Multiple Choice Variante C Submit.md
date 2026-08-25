---
title: MC Variante C, Submit
tags:
  - Mittelstufe
  - Algebra
  - Aufgaben
  - Interaktiv
draft: false
created: 2026-08-25
---

%%
VARIANTE C: mit Submit-Button
- Antwort wählen, dann auf "Stimmt das?" drücken. Erst dann kommt die Rückmeldung.
- Der Button ist eine versteckte Checkbox plus <label for="...">. Kein JavaScript.
- Nach dem Drücken wird ZUSÄTZLICH die richtige Antwort markiert, auch wenn der
  Schüler etwas anderes gewählt hat. Das ist der didaktische Vorteil dieser Variante.
- Der Button toggelt: nochmal drücken blendet die Auswertung wieder aus.
- Lösungsweg als Callout [!tip]- wie in Variante A.

ACHTUNG: Die id="gate-..." muss auf jeder Seite EINDEUTIG sein, sonst schalten
mehrere Fragen gemeinsam um.
Braucht :has() im Browser. Ohne :has() erscheint gar kein Feedback, deshalb ist das
hier die empfindlichste der drei Varianten.
%%

<style>
.mcqC {
  --ok: #1a7f37; --no: #b3261e;
  --okbg: rgba(46,160,67,0.13); --nobg: rgba(248,81,73,0.13);
  --line: rgba(128,128,128,0.30);
  margin: 1.4em 0;
}
[saved-theme="dark"] .mcqC, .theme-dark .mcqC {
  --ok: #4ade80; --no: #f87171;
  --okbg: rgba(74,222,128,0.13); --nobg: rgba(248,113,113,0.13);
}
.mcqC > p { margin: 0.3em 0; }
.mcqC .opt {
  display: block;
  margin: 0.4em 0;
  padding: 0.55em 0.85em;
  cursor: pointer;
  border: 1px solid var(--line);
  border-left: 4px solid var(--line);
  border-radius: 7px;
}
.mcqC .opt:hover { background: rgba(128,128,128,0.09); }
.mcqC .opt input { margin-right: 0.6em; }
.mcqC .opt:has(input:checked) { border-color: rgba(128,128,128,0.6); }

/* Feedback bleibt versteckt, bis der Button gedrueckt wurde */
.mcqC .fb {
  display: none;
  margin-top: 0.5em;
  margin-left: 1.75em;
  font-size: 0.9em;
  line-height: 1.5;
}
.mcqC:has(.gate:checked) .opt input:checked ~ .fb { display: block; }
/* nach dem Druecken auch die richtige Antwort zeigen, egal was gewaehlt wurde */
.mcqC:has(.gate:checked) .opt:has(.fb.ok) .fb.ok { display: block; }
.mcqC:has(.gate:checked) .opt:has(.fb.ok) { border-left-color: var(--ok); background: var(--okbg); }
.mcqC:has(.gate:checked) .opt:has(input:checked):has(.fb.no) { border-left-color: var(--no); background: var(--nobg); }
.mcqC .fb.ok::before { content: "\2713\00a0"; color: var(--ok); font-weight: 700; }
.mcqC .fb.no::before { content: "\2717\00a0"; color: var(--no); font-weight: 700; }

/* Button */
.mcqC .gate { position: absolute; opacity: 0; width: 0; height: 0; }
.mcqC .btn {
  display: inline-block;
  margin-top: 0.7em;
  padding: 0.45em 1.15em;
  border: 1px solid var(--line);
  border-radius: 7px;
  cursor: pointer;
  font-size: 0.92em;
  font-weight: 600;
  user-select: none;
}
.mcqC .btn:hover { background: rgba(128,128,128,0.13); }
.mcqC .gate:focus-visible + .btn { outline: 2px solid currentColor; outline-offset: 2px; }
.mcqC .btn .post { display: none; }
.mcqC:has(.gate:checked) .btn .pre { display: none; }
.mcqC:has(.gate:checked) .btn .post { display: inline; }
/* solange nichts gewaehlt ist, Button gedaempft plus Hinweis */
.mcqC:not(:has(.opt input:checked)) .btn { opacity: 0.45; }
.mcqC .hint { font-size: 0.85em; opacity: 0.7; margin-left: 0.7em; }
.mcqC:has(.opt input:checked) .hint { display: none; }
</style>

# Multiple Choice Quiz
## Variante C: erst wählen, dann prüfen



Das ist nur eine Seite um das Userinterface zu testen

Hier bekommst du die Rückmeldung **nicht** sofort. Du wählst erst eine Antwort und
drückst dann auf den Button. Das zwingt zu einer echten Entscheidung, statt sich durch
Anklicken zur richtigen Lösung durchzuprobieren.

Zusätzlich wird nach dem Prüfen **immer auch die richtige Antwort** markiert, selbst
wenn du danebengelegen hast. Du siehst also nicht nur, dass es falsch war, sondern auch,
was stattdessen gilt.

## Frage 1

<div class="mcqC">

**Welche Zerlegung von $4x + 12$ ist vollständig ausgeklammert?**

<label class="opt"><input type="radio" name="c1"> $2 \, (2x + 6)$<span class="fb no">Das Ergebnis stimmt, aber du bist noch nicht fertig. In der Klammer steckt bei $2x$ und $6$ noch eine gemeinsame $2$.</span></label>

<label class="opt"><input type="radio" name="c1"> $4 \, (x + 3)$<span class="fb ok">$4$ ist der größte gemeinsame Faktor, und in der Klammer haben $x$ und $3$ nichts mehr gemeinsam.</span></label>

<label class="opt"><input type="radio" name="c1"> $4 \, (x + 12)$<span class="fb no">Probe: $4 \cdot x + 4 \cdot 12 = 4x + 48$. Die $12$ muss ebenfalls durch $4$ geteilt werden.</span></label>

<label class="opt"><input type="radio" name="c1"> $x \, (4 + 12)$<span class="fb no">Probe: $x \cdot 4 + x \cdot 12 = 4x + 12x$. In der $12$ steckt gar kein $x$, daraus lässt sich keins herausziehen.</span></label>

<input type="checkbox" id="gate-c1" class="gate"><label for="gate-c1" class="btn"><span class="pre">Stimmt das?</span><span class="post">Auswertung ausblenden</span></label><span class="hint">Wähl erst eine Antwort.</span>

</div>

> [!tip]- Vorgehen anzeigen
> Beim vollständigen Ausklammern suchst du den **größten** gemeinsamen Faktor,
> nicht irgendeinen.
>
> 1. Zerleg jeden Summanden in seine Faktoren:
>    $$
>    4x = 2 \cdot 2 \cdot x
>    \qquad
>    12 = 2 \cdot 2 \cdot 3
>    $$
> 2. Sammle ein, was in **beiden** vorkommt: zwei Zweien, also $4$. Ein $x$ steckt nur
>    im ersten Summanden, das zählt nicht.
> 3. Zieh die $4$ heraus:
>    $$
>    4x + 12 = 4 \cdot x + 4 \cdot 3 = \boxed{4 \, (x + 3)}
>    $$
>
> **Kontrolle:** Steckt in der Klammer noch ein gemeinsamer Faktor, warst du zu zaghaft.

## Frage 2

<div class="mcqC">

**Der Term $-\frac{1}{2} a^2 - a + 2ab$ soll als Produkt geschrieben werden. Welche Variante stimmt?**

<label class="opt"><input type="radio" name="c2"> $-\frac{1}{2} a \, (a + 2 - 4ab)$<span class="fb no">Ausmultipliziert: $-\frac{1}{2} a^2 - a + 2a^2 b$. Im letzten Summanden steht ein $a$ zu viel.</span></label>

<label class="opt"><input type="radio" name="c2"> $a \left(-\frac{1}{2} a + 2b\right)$<span class="fb no">Ausmultipliziert: $-\frac{1}{2} a^2 + 2ab$. Der mittlere Summand $-a$ ist verschwunden.</span></label>

<label class="opt"><input type="radio" name="c2"> $2 \left(-\frac{1}{4} a - \frac{1}{2} + b\right) \cdot a$<span class="fb ok">Ausmultipliziert kommt genau $-\frac{1}{2} a^2 - a + 2ab$ heraus. Dass der Faktor in $2$ und $a$ aufgeteilt dasteht, ändert nichts.</span></label>

<label class="opt"><input type="radio" name="c2"> $0{,}5 a \left(-a - \frac{1}{2} + ab\right)$<span class="fb no">Ausmultipliziert: $-0{,}5 a^2 - 0{,}25 a + 0{,}5 a^2 b$. Nur der erste Summand passt.</span></label>

<input type="checkbox" id="gate-c2" class="gate"><label for="gate-c2" class="btn"><span class="pre">Stimmt das?</span><span class="post">Auswertung ausblenden</span></label><span class="hint">Wähl erst eine Antwort.</span>

</div>

> [!tip]- Vorgehen anzeigen
> Du musst hier gar nicht selbst faktorisieren. **Multiplizier jede Variante aus**
> und vergleich Summand für Summand.
>
> Der Ausgangsterm hat drei Summanden:
> $$
> -\frac{1}{2} a^2
> \qquad
> -a
> \qquad
> +2ab
> $$
>
> Der häufigste Fehler ist der mittlere. Wenn du $a$ ausklammerst und ein Summand
> **selbst** nur $-a$ ist, bleibt in der Klammer eine $-1$ stehen, keine Lücke:
> $$
> -a = a \cdot (-1)
> $$
>
> Die richtige Zerlegung lautet
> $$
> -\frac{1}{2} a^2 - a + 2ab = \boxed{a \left(-\frac{1}{2} a - 1 + 2b\right)}
> $$
> und Antwort c) ist genau das, nur mit dem Faktor $2$ vorgezogen.

<div style="font-size:0.85em; color:var(--text-muted); margin-top:2em; border-top:1px solid var(--background-modifier-border); padding-top:0.5em;">
  Aufgabenstellung in Frage 2 übernommen und bearbeitet von
  <a href="https://de.serlo.org/mathe/24492/aufgaben-zum-ausklammern" target="_blank" rel="noopener noreferrer">serlo.org, Aufgaben zum Ausklammern</a>,
  lizenziert unter <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.<br>
  Änderungen vorgenommen: Auswahl, Umformulierung, eigene Rückmeldungstexte.<br>
  Diese Seite steht daher ebenfalls unter <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.
</div>
