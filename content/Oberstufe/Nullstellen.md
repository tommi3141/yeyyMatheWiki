---
tags:
  - Oberstufe
  - Analysis
  - Erklärung
draft: false
created: 2026-08-25
aliases:
  - Satz vom Nullprodukt
  - Nullstellen bestimmen
---

Eine **Nullstelle** ist die Stelle, an der ein Graph die x-Achse trifft. Mehr steckt nicht dahinter:
Du suchst das $x$, bei dem der Funktionswert $0$ herauskommt.

$$
f(x) = 0
$$

Das klingt nach einem Detail, ist aber die Rechnung, die dir im Abi am häufigsten begegnet.
Schnittpunkte mit der x-Achse, Extremstellen, Wendestellen, Schnittpunkte zweier Graphen — am Ende
läuft fast alles darauf hinaus, eine Gleichung gleich null zu setzen.

## Die eine Idee, die alles trägt

Bevor du irgendeine Formel auspackst: Es gibt einen Trick, der die halbe Arbeit macht.

> [!info]+ Satz vom Nullprodukt
> Ein Produkt ist genau dann $0$, wenn **mindestens einer der Faktoren** $0$ ist.
>
> $$
> u(x) \cdot v(x) = 0 \quad \Longleftrightarrow \quad u(x) = 0 \;\;\text{oder}\;\; v(x) = 0
> $$
>
> Überleg dir kurz, warum das stimmen muss: Wenn du zwei Zahlen multiplizierst und keine davon
> null ist, kann unmöglich null herauskommen. Genau deshalb darfst du ein Produkt in seine
> Faktoren zerlegen und jeden einzeln gleich null setzen.
>
>> [!tip]- Beispiel anzeigen:
>> $$
>> (x - 3)(2x + 8) = 0
>> $$
>>
>> **Lösung:** Jeden Faktor einzeln null setzen.
>>
>> $$
>> x - 3 = 0 \quad \Rightarrow \quad x = 3
>> $$
>>
>> $$
>> 2x + 8 = 0 \quad \Rightarrow \quad 2x = -8 \quad \Rightarrow \quad x = -4
>> $$
>>
>> $$
>> \boxed{x_1 = 3, \quad x_2 = -4}
>> $$

Deine eigentliche Aufgabe ist damit meistens gar nicht das Lösen, sondern das **Umformen in ein
Produkt**. Sobald da ein Produkt steht, bist du fertig.

## Welcher Weg bei welcher Funktion

> [!info]+ Ausklammern, wenn in jedem Summanden ein $x$ steckt
> Steht in jedem Summanden mindestens ein $x$, klammere die höchste gemeinsame $x$-Potenz aus.
> Mehr dazu unter [[Klammern und Ausklammern|Ausklammern]].
>
>> [!tip]- Beispiel anzeigen:
>> $$
>> f(x) = x^3 - 4x
>> $$
>>
>> **Lösung:** Erst $x$ ausklammern, dann die dritte binomische Formel rückwärts.
>>
>> $$
>> x^3 - 4x = x \cdot (x^2 - 4) = x \cdot (x-2) \cdot (x+2)
>> $$
>>
>> Jetzt steht ein Produkt aus drei Faktoren da — Satz vom Nullprodukt anwenden:
>>
>> $$
>> x = 0 \quad\text{oder}\quad x - 2 = 0 \quad\text{oder}\quad x + 2 = 0
>> $$
>>
>> $$
>> \boxed{x_1 = 0, \quad x_2 = 2, \quad x_3 = -2}
>> $$

> [!info]+ Quadratische Gleichungen
> Bekommst du die Form $ax^2 + bx + c = 0$ nicht durch Ausklammern zerlegt, nimm die
> Mitternachtsformel:
>
> $$
> x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
> $$
>
>> [!tip]- Beispiel anzeigen:
>> $$
>> f(x) = x^2 - 5x + 6
>> $$
>>
>> **Lösung:** Hier ist $a = 1$, $b = -5$, $c = 6$.
>>
>> $$
>> x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{5 \pm \sqrt{25 - 24}}{2} = \frac{5 \pm 1}{2}
>> $$
>>
>> $$
>> \boxed{x_1 = 3, \quad x_2 = 2}
>> $$

> [!info]+ Schon faktorisiert? Dann direkt ablesen
> Steht die Funktion bereits als Produkt da, brauchst du gar nicht zu rechnen.
>
> $$
> f(x) = 2(x+1)(x-5)^2
> $$
>
> Nullstellen bei $x = -1$ und $x = 5$. Der Vorfaktor $2$ ist egal, denn $2 \neq 0$ und kann
> das Produkt nie null machen.

## Der Fehler, der dich Punkte kostet

> [!warning]+ Teile niemals durch $x$
> Sehr verbreitet und immer falsch:
>
> $$
> x^3 - 4x = 0 \quad \Big|\, : x \qquad \Rightarrow \qquad x^2 - 4 = 0
> $$
>
> Damit bekommst du $x = 2$ und $x = -2$ — und hast $x = 0$ **verloren**. Beim Teilen durch $x$
> nimmst du stillschweigend an, dass $x \neq 0$ ist. Genau der Fall, den du suchst, fällt hinten
> runter.
>
> Also: **ausklammern statt dividieren.** Dann bleiben alle Lösungen erhalten.

## Aufgaben

> [!note] Aufgabe 1
> Bestimme die Nullstellen von
> $$
> f(x) = x^2 - 9
> $$
>
>> [!success]- Lösung anzeigen:
>> Das ist die dritte binomische Formel rückwärts:
>>
>> $$
>> x^2 - 9 = (x-3)(x+3)
>> $$
>>
>> Satz vom Nullprodukt:
>>
>> $$
>> x - 3 = 0 \quad\text{oder}\quad x + 3 = 0
>> $$
>>
>> $$
>> \boxed{x_1 = 3, \quad x_2 = -3}
>> $$

> [!note] Aufgabe 2
> Bestimme die Nullstellen von
> $$
> f(x) = x^3 - 3x^2
> $$
>
>> [!success]- Lösung anzeigen:
>> In beiden Summanden steckt $x^2$, also $x^2$ ausklammern:
>>
>> $$
>> x^3 - 3x^2 = x^2 \cdot (x - 3)
>> $$
>>
>> Satz vom Nullprodukt:
>>
>> $$
>> x^2 = 0 \quad\text{oder}\quad x - 3 = 0
>> $$
>>
>> $$
>> \boxed{x_1 = 0, \quad x_2 = 3}
>> $$
>>
>> Weil der Faktor $x^2$ quadratisch ist, nennt man $x_1 = 0$ eine **doppelte Nullstelle**. Der
>> Graph schneidet die x-Achse dort nicht, sondern berührt sie nur.

> [!note] Aufgabe 3
> Bestimme die Nullstellen von
> $$
> f(x) = 2x^2 - 8x + 6
> $$
>
>> [!success]- Lösung anzeigen:
>> Erst durch $2$ teilen — das ist hier erlaubt, weil $2$ eine Zahl ist und kein $x$:
>>
>> $$
>> 2x^2 - 8x + 6 = 0 \quad \Big|\, : 2
>> $$
>>
>> $$
>> x^2 - 4x + 3 = 0
>> $$
>>
>> Mitternachtsformel mit $a = 1$, $b = -4$, $c = 3$:
>>
>> $$
>> x_{1,2} = \frac{4 \pm \sqrt{16 - 12}}{2} = \frac{4 \pm 2}{2}
>> $$
>>
>> $$
>> \boxed{x_1 = 3, \quad x_2 = 1}
>> $$

> [!note] Aufgabe 4
> Bestimme die Nullstellen von
> $$
> f(x) = x^3 - x
> $$
>
>> [!success]- Lösung anzeigen:
>> $x$ ausklammern, dann dritte binomische Formel:
>>
>> $$
>> x^3 - x = x(x^2 - 1) = x(x-1)(x+1)
>> $$
>>
>> $$
>> \boxed{x_1 = 0, \quad x_2 = 1, \quad x_3 = -1}
>> $$
>>
>> Hättest du hier durch $x$ geteilt, wäre $x_1 = 0$ verschwunden.

## Wie es weitergeht

Nullstellen sind das Werkzeug, mit dem du gleich weiterarbeitest: Für Hoch-, Tief- und Wendepunkte
suchst du die Nullstellen von $f'(x)$ und $f''(x)$. Genau dieselbe Rechnung, nur mit einer anderen
Funktion. Siehe [[Extremwerte und Wendepunkte]].
