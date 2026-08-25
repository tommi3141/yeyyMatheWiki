---
title: MC Variante B, Minimal
tags:
  - Mittelstufe
  - Algebra
  - Aufgaben
  - Interaktiv
draft: true
created: 2026-08-25
---

%%
VARIANTE B: Minimal
- Keine Kästen, keine Rahmen. Antworten sehen aus wie eine normale Liste.
- Feedback erscheint eingerückt mit dünnem Farbbalken links, Text in normaler Farbe.
- Lösungsweg als natives <details>, NICHT als Callout. Absicht: damit du den
  optischen Unterschied zum Callout aus Variante A direkt vergleichen kannst.
- Sofort-Feedback beim Klick, kein Submit.
%%

<style>
.mcqB {
  --ok: #1a7f37; --no: #b3261e;
  margin: 1.3em 0 1.6em 0;
}
[saved-theme="dark"] .mcqB, .theme-dark .mcqB {
  --ok: #4ade80; --no: #f87171;
}
.mcqB > p { margin: 0.25em 0; }
.mcqB .opt {
  display: block;
  padding: 0.3em 0 0.3em 0.1em;
  cursor: pointer;
  border-bottom: 1px solid rgba(128,128,128,0.16);
}
.mcqB .opt:last-of-type { border-bottom: none; }
.mcqB .opt:hover { color: inherit; opacity: 0.75; }
.mcqB .opt input { margin-right: 0.6em; }
.mcqB .fb {
  display: none;
  margin: 0.45em 0 0.55em 1.7em;
  padding-left: 0.8em;
  border-left: 3px solid rgba(128,128,128,0.4);
  font-size: 0.9em;
  line-height: 1.55;
}
.mcqB .opt input:checked ~ .fb { display: block; }
.mcqB .fb.ok { border-left-color: var(--ok); }
.mcqB .fb.no { border-left-color: var(--no); }
.mcqB .fb.ok::before { content: "Stimmt. "; color: var(--ok); font-weight: 600; }
.mcqB .fb.no::before { content: "Noch nicht. "; color: var(--no); font-weight: 600; }
.mcqB .frage { font-weight: 600; }

.loesung {
  border-top: 1px solid rgba(128,128,128,0.25);
  margin: 0.8em 0 1.6em 0;
  padding-top: 0.4em;
}
.loesung > summary {
  cursor: pointer;
  font-size: 0.92em;
  opacity: 0.8;
  padding: 0.2em 0;
}
.loesung > summary:hover { opacity: 1; }
.loesung[open] > summary { font-weight: 600; opacity: 1; margin-bottom: 0.4em; }
</style>

# Variante B: Minimal

Kein Rahmen, kein Kasten. Die Antworten sehen aus wie normaler Fließtext, nur
anklickbar. Die Rückmeldung erscheint eingerückt mit einem dünnen Farbbalken.
Ruhiger als Variante A und näher am Lehrbuch, aber weniger als „hier kannst du
etwas tun" erkennbar.

Der Lösungsweg steckt hier bewusst in einem nativen `<details>` statt in einem
Callout, damit du beide Optiken vergleichen kannst.

## Frage 1

<div class="mcqB">

**Welche Zerlegung von $4x + 12$ ist vollständig ausgeklammert?**

<label class="opt"><input type="radio" name="b1"> $2 \, (2x + 6)$<span class="fb no">Das Ergebnis stimmt, aber du bist noch nicht fertig. In der Klammer steckt bei $2x$ und $6$ noch eine gemeinsame $2$.</span></label>

<label class="opt"><input type="radio" name="b1"> $4 \, (x + 3)$<span class="fb ok">$4$ ist der größte gemeinsame Faktor, und in der Klammer haben $x$ und $3$ nichts mehr gemeinsam.</span></label>

<label class="opt"><input type="radio" name="b1"> $4 \, (x + 12)$<span class="fb no">Mach die Probe: $4 \cdot x + 4 \cdot 12 = 4x + 48$. Die $12$ muss ebenfalls durch $4$ geteilt werden.</span></label>

<label class="opt"><input type="radio" name="b1"> $x \, (4 + 12)$<span class="fb no">Probe: $x \cdot 4 + x \cdot 12 = 4x + 12x$. In der $12$ steckt gar kein $x$, daraus lässt sich keins herausziehen.</span></label>

</div>

<details class="loesung">
<summary>Vorgehen anzeigen</summary>

Beim vollständigen Ausklammern suchst du den **größten** gemeinsamen Faktor,
nicht irgendeinen.

Zerleg zuerst jeden Summanden in seine Faktoren:

$$
4x = 2 \cdot 2 \cdot x
\qquad
12 = 2 \cdot 2 \cdot 3
$$

Was in **beiden** vorkommt, sind zwei Zweien, also $4$. Ein $x$ steckt nur im
ersten Summanden, das zählt nicht mit.

$$
4x + 12 = 4 \cdot x + 4 \cdot 3 = \boxed{4 \, (x + 3)}
$$

**Kontrolle:** Steckt in der Klammer noch ein gemeinsamer Faktor, warst du zu zaghaft.

</details>

## Frage 2

<div class="mcqB">

**Der Term $-\frac{1}{2} a^2 - a + 2ab$ soll als Produkt geschrieben werden. Welche Variante stimmt?**

<label class="opt"><input type="radio" name="b2"> $-\frac{1}{2} a \, (a + 2 - 4ab)$<span class="fb no">Ausmultipliziert: $-\frac{1}{2} a^2 - a + 2a^2 b$. Im letzten Summanden steht ein $a$ zu viel.</span></label>

<label class="opt"><input type="radio" name="b2"> $a \left(-\frac{1}{2} a + 2b\right)$<span class="fb no">Ausmultipliziert: $-\frac{1}{2} a^2 + 2ab$. Der mittlere Summand $-a$ ist verschwunden.</span></label>

<label class="opt"><input type="radio" name="b2"> $2 \left(-\frac{1}{4} a - \frac{1}{2} + b\right) \cdot a$<span class="fb ok">Ausmultipliziert kommt genau $-\frac{1}{2} a^2 - a + 2ab$ heraus. Dass der Faktor in $2$ und $a$ aufgeteilt dasteht, ändert nichts.</span></label>

<label class="opt"><input type="radio" name="b2"> $0{,}5 a \left(-a - \frac{1}{2} + ab\right)$<span class="fb no">Ausmultipliziert: $-0{,}5 a^2 - 0{,}25 a + 0{,}5 a^2 b$. Nur der erste Summand passt.</span></label>

</div>

<details class="loesung">
<summary>Vorgehen anzeigen</summary>

Du musst hier gar nicht selbst faktorisieren. **Multiplizier jede Variante aus**
und vergleich Summand für Summand. Sobald einer nicht passt, ist die Variante raus.

Der Ausgangsterm hat drei Summanden:

$$
-\frac{1}{2} a^2
\qquad
-a
\qquad
+2ab
$$

Der häufigste Fehler ist der mittlere. Wenn du $a$ ausklammerst und ein Summand
**selbst** nur $-a$ ist, bleibt in der Klammer eine $-1$ stehen, keine Lücke:

$$
-a = a \cdot (-1)
$$

Die richtige Zerlegung lautet

$$
-\frac{1}{2} a^2 - a + 2ab = \boxed{a \left(-\frac{1}{2} a - 1 + 2b\right)}
$$

und Antwort c) ist genau das, nur mit dem Faktor $2$ vorgezogen.

</details>

<div style="font-size:0.85em; color:var(--text-muted); margin-top:2em; border-top:1px solid var(--background-modifier-border); padding-top:0.5em;">
  Aufgabenstellung in Frage 2 übernommen und bearbeitet von
  <a href="https://de.serlo.org/mathe/24492/aufgaben-zum-ausklammern" target="_blank" rel="noopener noreferrer">serlo.org, Aufgaben zum Ausklammern</a>,
  lizenziert unter <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.<br>
  Änderungen vorgenommen: Auswahl, Umformulierung, eigene Rückmeldungstexte.<br>
  Diese Seite steht daher ebenfalls unter <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.
</div>
