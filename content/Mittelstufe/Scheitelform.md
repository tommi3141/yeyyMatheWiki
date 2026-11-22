---
tags:
  - Mittelstufe
  - Analysis
  - Erklärung
  - GeoGebra
draft: false
created: 2026-11-22
aliases:
  - Scheitelpunktform
  - Scheitelform einer Parabel
---

%%
Erklär-Notiz zur Scheitelform. Eigener Inhalt, keine übernommenen Quellen.
Applet: GeoGebra/scheitelform.ggb (selbst erstellt, Farben aus der yeyyMathe-Website).
%%

Wo liegt der tiefste Punkt der Parabel $f(x) = 2x^2 - 12x + 19$? So auf Anhieb sieht man das
nicht. Schreibt man dieselbe Funktion aber als $f(x) = 2(x-3)^2 + 1$, kann man ihn direkt ablesen:
Er liegt bei $S(3 \mid 1)$.

Genau deshalb heißt diese Schreibweise **Scheitelform**: Man kann den Scheitelpunkt besonders
schnell ablesen, ohne irgendetwas zu rechnen.

> [!info]+ Merksatz
> Eine Parabel in Scheitelform hat ihren Scheitelpunkt bei $S(d \mid e)$.
>
> $$
> f(x) = a \cdot (x - d)^2 + e
> $$
>
> - $a$ ist der **Streckfaktor**: Er bestimmt, wie weit die Parabel geöffnet ist und in welche Richtung.
> - $d$ verschiebt die Parabel in **x-Richtung**.
> - $e$ verschiebt die Parabel in **y-Richtung**.

## Probier es selbst

Zieh an den Reglern und beobachte, was mit der Parabel passiert. Die gestrichelte Linie ist die
Normalparabel $y = x^2$ zum Vergleich.

![[scheitelform.ggb|860x620]]

Versuch mit dem Applet diese Fragen zu beantworten:

1. Was passiert, wenn $a$ negativ wird?
2. Stell $a = 3$ und danach $a = 0{,}3$ ein. Was ändert sich?
3. Stell $d = 4$ ein. In welche Richtung wandert die Parabel, und warum steht in der Formel dann ein Minus?
4. Welche Werte musst du einstellen, damit der Scheitelpunkt bei $S(-2 \mid 3)$ liegt?

> [!success]- Lösungen anzeigen
> 1. Die Parabel ist dann **nach unten** geöffnet. Der Scheitel ist jetzt der höchste Punkt.
> 2. Bei $a = 3$ wird sie **schmaler** (gestreckt), bei $a = 0{,}3$ **breiter** (gestaucht).
> 3. Sie wandert um 4 **nach rechts**. In der Formel steht $(x - 4)^2$, siehe [[#Warum das funktioniert]].
> 4. $d = -2$ und $e = 3$. In der Formel steht dann $(x + 2)^2 + 3$. $a$ ist egal.

## Was die drei Parameter machen

| Parameter | Bedeutung | Was du siehst |
|---|---|---|
| $a > 0$ | nach oben geöffnet | Scheitel ist der **tiefste** Punkt |
| $a < 0$ | nach unten geöffnet | Scheitel ist der **höchste** Punkt |
| $\lvert a \rvert > 1$ | gestreckt | schmaler als die Normalparabel |
| $\lvert a \rvert < 1$ | gestaucht | breiter als die Normalparabel |
| $d$ | Verschiebung in x-Richtung | $d > 0$ nach rechts, $d < 0$ nach links |
| $e$ | Verschiebung in y-Richtung | $e > 0$ nach oben, $e < 0$ nach unten |

Für $a = 1$, $d = 0$ und $e = 0$ bekommst du genau die Normalparabel $f(x) = x^2$.

## Warum das funktioniert

Schau dir die Klammer an: $(x - d)^2$ ist ein Quadrat und kann deshalb nie negativ werden. Am
kleinsten ist sie, nämlich $0$, wenn $x = d$ ist.

Genau an dieser Stelle fällt der ganze Teil $a \cdot (x - d)^2$ weg, und es bleibt nur
$f(d) = e$ übrig. Für jedes andere $x$ kommt etwas dazu (bei $a > 0$) oder geht etwas weg
(bei $a < 0$). Also ist $(d \mid e)$ der tiefste bzw. höchste Punkt: der Scheitel.

Und das Minus? Die Parabel soll ihren Scheitel bei $x = 3$ haben, also muss die Klammer bei $x = 3$
null werden. Das klappt mit $(x - 3)$, denn $3 - 3 = 0$. Darum gilt: **Minus in der Klammer heißt
nach rechts.**

## Beispiel

> [!example]+ Beispiel
> Gegeben ist $f(x) = -\frac{1}{2}(x + 1)^2 + 4$. Lies den Scheitel ab und beschreibe die Parabel.
>
> Zuerst die Klammer in die Form $(x - d)$ bringen:
>
> $$
> (x + 1) = (x - (-1)) \quad\Rightarrow\quad d = -1
> $$
>
> Außerdem ist $e = 4$ und $a = -\frac{1}{2}$. Also:
>
> $$
> \boxed{S(-1 \mid 4)}
> $$
>
> Die Parabel ist nach unten geöffnet ($a < 0$) und breiter als die Normalparabel ($\lvert a \rvert < 1$).
> Der Scheitel ist ihr höchster Punkt.

> [!tip]- Von der Scheitelform zur Normalform
> Wenn du die Klammer mit der [[Binomische Formeln|binomischen Formel]] ausmultiplizierst, bekommst
> du die Form $ax^2 + bx + c$:
>
> $$
> 2(x - 3)^2 + 1 = 2(x^2 - 6x + 9) + 1 = 2x^2 - 12x + 19
> $$
>
> Das ist dieselbe Funktion wie im Einstieg, nur sieht man den Scheitel nicht mehr.

## Typische Fehler

> [!failure]- Häufiger Fehler: Vorzeichen von d
> $$
> f(x) = (x + 3)^2 \quad\Rightarrow\quad S(3 \mid 0)
> $$
> Das stimmt nicht, weil die Klammer bei $x = 3$ nicht null wird: $3 + 3 = 6$.
>
>> [!success] So stimmt es
>> $$
>> f(x) = (x - (-3))^2 \quad\Rightarrow\quad S(-3 \mid 0)
>> $$
>> Die Klammer wird bei $x = -3$ null. Plus in der Klammer heißt nach links.

> [!failure]- Häufiger Fehler: Vorzeichen von e
> $$
> f(x) = (x - 2)^2 - 5 \quad\Rightarrow\quad S(2 \mid 5)
> $$
> Das stimmt nicht, weil $e$ **ohne** Vorzeichenwechsel abgelesen wird. Außerhalb der Klammer steht $-5$.
>
>> [!success] So stimmt es
>> $$
>> S(2 \mid -5)
>> $$

## Check dich

Kannst du den Begriff erklären, ein eigenes Beispiel finden und es begründen?

- Erkläre mit eigenen Worten, warum die Scheitelform „Scheitelform" heißt.
- Gib die Funktionsgleichung einer Parabel an, die nach unten geöffnet ist, schmaler als die
  Normalparabel ist und ihren Scheitel bei $S(1 \mid -2)$ hat.
- Warum bedeutet $(x - 5)^2$ eine Verschiebung nach **rechts**, obwohl ein Minus dasteht?

> [!success]- Mögliche Lösung zur zweiten Frage
> Zum Beispiel $f(x) = -2(x - 1)^2 - 2$. Jedes $a < -1$ funktioniert.

## Weiterlesen

- [[Was ist eine Funktion]]
- [[Binomische Formeln]] zum Umwandeln in die Normalform
- [[GeoGebra]] — mehr zu den Applets auf dieser Website
