---
title: MC Variante A, Karten
tags:
  - Mittelstufe
  - Algebra
  - Aufgaben
  - Interaktiv
draft: true
created: 2026-08-25
---

%%
VARIANTE A: Karten
- Antworten als abgesetzte Karten mit farbigem Balken links
- Feedback-Text in NORMALER Textfarbe, Farbe nur in Balken und Haken
- Lösungsweg als vault-üblicher Callout [!tip]- direkt unter der Frage
- Sofort-Feedback beim Klick, kein Submit
Vergleiche mit Variante B (Minimal) und Variante C (Submit).
%%

<style>
.mcqA {
  --ok: #1a7f37; --no: #b3261e;
  --okbg: rgba(46,160,67,0.13); --nobg: rgba(248,81,73,0.13);
  --line: rgba(128,128,128,0.30);
  margin: 1.4em 0;
}
[saved-theme="dark"] .mcqA, .theme-dark .mcqA {
  --ok: #4ade80; --no: #f87171;
  --okbg: rgba(74,222,128,0.13); --nobg: rgba(248,113,113,0.13);
}
.mcqA > p { margin: 0.3em 0; }
.mcqA .opt {
  display: block;
  margin: 0.45em 0;
  padding: 0.6em 0.85em;
  cursor: pointer;
  border: 1px solid var(--line);
  border-left: 4px solid var(--line);
  border-radius: 7px;
}
.mcqA .opt:hover { background: rgba(128,128,128,0.09); }
.mcqA .opt input { margin-right: 0.6em; }
.mcqA .fb {
  display: none;
  margin-top: 0.5em;
  margin-left: 1.75em;
  font-size: 0.9em;
  line-height: 1.5;
}
.mcqA .opt input:checked ~ .fb { display: block; }
.mcqA .fb.ok::before { content: "\2713\00a0"; color: var(--ok); font-weight: 700; }
.mcqA .fb.no::before { content: "\2717\00a0"; color: var(--no); font-weight: 700; }
.mcqA .opt:has(input:checked):has(.ok) { border-left-color: var(--ok); background: var(--okbg); }
.mcqA .opt:has(input:checked):has(.no) { border-left-color: var(--no); background: var(--nobg); }
</style>

# Variante A: Karten

Jede Antwort ist eine eigene Karte. Beim Anklicken färbt sich der Balken links,
der Erklärtext darunter bleibt in normaler Schriftfarbe und ist dadurch gut lesbar.
Der Lösungsweg steckt in einem eingeklappten Callout, also im gewohnten Vault-Muster.

## Frage 1

<div class="mcqA">

**Welche Zerlegung von $4x + 12$ ist vollständig ausgeklammert?**

<label class="opt"><input type="radio" name="a1"> $2 \, (2x + 6)$<span class="fb no">Das Ergebnis stimmt, aber du bist noch nicht fertig. In der Klammer steckt bei $2x$ und $6$ noch eine gemeinsame $2$.</span></label>

<label class="opt"><input type="radio" name="a1"> $4 \, (x + 3)$<span class="fb ok">Genau. $4$ ist der größte gemeinsame Faktor, und in der Klammer haben $x$ und $3$ nichts mehr gemeinsam.</span></label>

<label class="opt"><input type="radio" name="a1"> $4 \, (x + 12)$<span class="fb no">Mach die Probe: $4 \cdot x + 4 \cdot 12 = 4x + 48$. Die $12$ muss ebenfalls durch $4$ geteilt werden.</span></label>

<label class="opt"><input type="radio" name="a1"> $x \, (4 + 12)$<span class="fb no">Probe: $x \cdot 4 + x \cdot 12 = 4x + 12x$. In der $12$ steckt gar kein $x$, daraus lässt sich keins herausziehen.</span></label>

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
> 2. Sammle ein, was in **beiden** vorkommt. Das sind zwei Zweien, also $4$. Ein $x$
>    steckt nur im ersten Summanden, das zählt nicht.
> 3. Zieh die $4$ heraus und frag dich bei jedem Summanden: $4$ mal was?
>    $$
>    4x + 12 = 4 \cdot x + 4 \cdot 3 = \boxed{4 \, (x + 3)}
>    $$
>
> **Kontrolle:** Wenn in der Klammer noch ein gemeinsamer Faktor steckt, warst du zu
> zaghaft. Multiplizier am Ende immer einmal aus und vergleich mit dem Ausgangsterm.

## Frage 2

<div class="mcqA">

**Der Term $-\frac{1}{2} a^2 - a + 2ab$ soll als Produkt geschrieben werden. Welche Variante stimmt?**

<label class="opt"><input type="radio" name="a2"> $-\frac{1}{2} a \, (a + 2 - 4ab)$<span class="fb no">Ausmultipliziert: $-\frac{1}{2} a^2 - a + 2a^2 b$. Im letzten Summanden steht ein $a$ zu viel.</span></label>

<label class="opt"><input type="radio" name="a2"> $a \left(-\frac{1}{2} a + 2b\right)$<span class="fb no">Ausmultipliziert: $-\frac{1}{2} a^2 + 2ab$. Der mittlere Summand $-a$ ist verschwunden.</span></label>

<label class="opt"><input type="radio" name="a2"> $2 \left(-\frac{1}{4} a - \frac{1}{2} + b\right) \cdot a$<span class="fb ok">Richtig. Ausmultipliziert kommt genau $-\frac{1}{2} a^2 - a + 2ab$ heraus. Dass der Faktor in $2$ und $a$ aufgeteilt dasteht, ändert nichts.</span></label>

<label class="opt"><input type="radio" name="a2"> $0{,}5 a \left(-a - \frac{1}{2} + ab\right)$<span class="fb no">Ausmultipliziert: $-0{,}5 a^2 - 0{,}25 a + 0{,}5 a^2 b$. Nur der erste Summand passt.</span></label>

</div>

> [!tip]- Vorgehen anzeigen
> Du musst hier gar nicht selbst faktorisieren. **Multiplizier einfach jede Variante aus**
> und vergleich Summand für Summand. Sobald einer nicht passt, bist du fertig und die
> Variante ist raus.
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
