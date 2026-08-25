---
title: Multiple Choice Prototyp
tags:
  - Mittelstufe
  - Algebra
  - Aufgaben
  - Interaktiv
draft: false
created: 2026-08-25
---

%%
PROTOTYP, noch kein fertiger Inhalt.
Zweck: testen, ob klickbare Multiple-Choice-Fragen ohne JavaScript funktionieren,
und zwar sowohl in Obsidian als auch auf der Quartz-Website.

Technik: <input type="radio"> plus CSS-Geschwisterselektor input:checked ~ .fb
Kein JavaScript, keine externe Abhängigkeit, kein Tracking.

Wichtig beim Erweitern:
- Jede Frage braucht ein EIGENES name="..." am input, sonst hängen die Fragen zusammen.
- Formeln muessen als normales Markdown zwischen den Tags stehen, NICHT innerhalb
  eines HTML-Blocks. remarkMath laeuft vor dem HTML-Parsing, sonst bleibt $...$ als
  roher Text stehen.
- Nach <div class="mcq"> muss eine LEERZEILE stehen, sonst schluckt der HTML-Block
  das Markdown darin.
- Die Aufgaben stammen aus derselben Serlo-Quelle wie
  [[Klammern und Ausklammern Übungen]], siehe Footer.
%%

<style>
.mcq {
  border: 1px solid rgba(128,128,128,0.35);
  border-radius: 8px;
  padding: 0.6em 1em 0.8em 1em;
  margin: 1.2em 0;
}
.mcq > p { margin: 0.35em 0; }
.mcq .opt {
  display: block;
  padding: 0.4em 0.7em;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
}
.mcq .opt:hover { background: rgba(128,128,128,0.12); }
.mcq .opt input { margin-right: 0.5em; }
.mcq .fb {
  display: none;
  font-size: 0.9em;
  margin-top: 0.35em;
  margin-left: 1.7em;
}
.mcq .opt input:checked ~ .fb { display: block; }
.mcq .opt:has(input:checked) { border-color: rgba(128,128,128,0.45); }
.mcq .opt:has(input:checked) .ok { color: #1a7f37; }
.mcq .opt:has(input:checked) .no { color: #b3261e; }
.mcq .opt:has(input:checked):has(.ok) { background: rgba(46,160,67,0.15); }
.mcq .opt:has(input:checked):has(.no) { background: rgba(248,81,73,0.15); }
</style>

# Multiple Choice Prototyp

Das hier ist ein technischer Test, kein fertiges Lernmaterial. Wenn du die Fragen
anklicken kannst und darunter eine Rückmeldung erscheint, funktioniert die Technik.

## Test 1: ohne Formeln

Hier geht es nur darum, ob das Anklicken überhaupt funktioniert.

<div class="mcq">

**Was passiert beim Ausklammern?**

<label class="opt"><input type="radio" name="t1"> Aus einer Summe wird ein Produkt.<span class="fb ok">Richtig. Aus $ab + ac$ wird $a(b+c)$, also aus einer Summe ein Produkt.</span></label>

<label class="opt"><input type="radio" name="t1"> Aus einem Produkt wird eine Summe.<span class="fb no">Das ist die Gegenrichtung, nämlich das Ausmultiplizieren.</span></label>

<label class="opt"><input type="radio" name="t1"> Der Term wird kleiner.<span class="fb no">Der Wert des Terms ändert sich beim Ausklammern nie. Nur die Schreibweise wird eine andere.</span></label>

</div>

## Test 2: mit Formeln

Hier ist die eigentliche Frage: Rendert KaTeX innerhalb der Antwortmöglichkeiten?

<div class="mcq">

**Welche Zerlegung von $4x + 12$ ist vollständig ausgeklammert?**

<label class="opt"><input type="radio" name="t2"> $2 \, (2x + 6)$<span class="fb no">Das stimmt zwar, ist aber nicht fertig. In der Klammer steckt noch eine gemeinsame $2$.</span></label>

<label class="opt"><input type="radio" name="t2"> $4 \, (x + 3)$<span class="fb ok">Richtig. $4$ ist der größte gemeinsame Faktor, in der Klammer bleibt nichts Gemeinsames übrig.</span></label>

<label class="opt"><input type="radio" name="t2"> $4 \, (x + 12)$<span class="fb no">Probe: $4 \cdot x + 4 \cdot 12 = 4x + 48$. Die $12$ muss auch durch $4$ geteilt werden.</span></label>

<label class="opt"><input type="radio" name="t2"> $x \, (4 + 12)$<span class="fb no">Probe: $x \cdot 4 + x \cdot 12 = 4x + 12x$. Die $12$ hat gar kein $x$, aus ihr kann keins ausgeklammert werden.</span></label>

</div>

## Test 3: echte Aufgabe

Das ist die Serlo-Aufgabe, die beim Extrahieren ihre Antwortmöglichkeiten verloren hatte.
In [[Klammern und Ausklammern Übungen]] steht sie als eingeklappter Callout, hier klickbar.

<div class="mcq">

**Der Term $-\frac{1}{2} a^2 - a + 2ab$ soll als Produkt geschrieben werden. Welche Variante stimmt?**

<label class="opt"><input type="radio" name="t3"> $-\frac{1}{2} a \, (a + 2 - 4ab)$<span class="fb no">Ausmultipliziert ergibt das $-\frac{1}{2} a^2 - a + 2a^2 b$. Im letzten Summanden steht ein $a$ zu viel.</span></label>

<label class="opt"><input type="radio" name="t3"> $a \left(-\frac{1}{2} a + 2b\right)$<span class="fb no">Ausmultipliziert ergibt das $-\frac{1}{2} a^2 + 2ab$. Der mittlere Summand $-a$ fehlt.</span></label>

<label class="opt"><input type="radio" name="t3"> $2 \left(-\frac{1}{4} a - \frac{1}{2} + b\right) \cdot a$<span class="fb ok">Richtig. Ausmultipliziert: $-\frac{1}{2} a^2 - a + 2ab$. Dass der Faktor hier in $2$ und $a$ aufgeteilt ist, ändert nichts.</span></label>

<label class="opt"><input type="radio" name="t3"> $0{,}5 a \left(-a - \frac{1}{2} + ab\right)$<span class="fb no">Ausmultipliziert ergibt das $-0{,}5 a^2 - 0{,}25 a + 0{,}5 a^2 b$. Nur der erste Summand passt.</span></label>

</div>

## Was dieser Prototyp noch nicht kann

- **Kein Zurücksetzen.** Einmal geklickt bleibt geklickt. Dafür bräuchte es JavaScript
  oder einen zusätzlichen Radio-Button als Reset.
- **Mehrfachauswahl** (mehrere richtige Antworten) ginge mit `type="checkbox"`,
  ist hier aber nicht drin.
- **Kein Punktestand** über mehrere Fragen hinweg.
- **CSS liegt in der Notiz.** Bei mehreren solchen Seiten gehört das in Quartz'
  eigenes Stylesheet, das wäre dann Wurzels Baustelle.
- **`:has()`** brauchen die farbigen Hintergründe. Das können alle aktuellen Browser,
  aber ältere nicht. Fällt im Zweifel nur auf den farbigen Hintergrund zurück,
  der Text erscheint trotzdem.

<div style="font-size:0.85em; color:var(--text-muted); margin-top:2em; border-top:1px solid var(--background-modifier-border); padding-top:0.5em;">
  Aufgabenstellung in Test 3 übernommen und bearbeitet von
  <a href="https://de.serlo.org/mathe/24492/aufgaben-zum-ausklammern" target="_blank" rel="noopener noreferrer">serlo.org, Aufgaben zum Ausklammern</a>,
  lizenziert unter <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.<br>
  Änderungen vorgenommen: Auswahl, Umformulierung, eigene Rückmeldungstexte.<br>
  Diese Seite steht daher ebenfalls unter <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.
</div>
