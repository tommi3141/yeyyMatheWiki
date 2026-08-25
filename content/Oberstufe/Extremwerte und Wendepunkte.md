---
tags:
  - Oberstufe
  - Analysis
  - Erklärung
draft: false
created: 2026-08-25
aliases:
  - Hochpunkt
  - Tiefpunkt
  - Wendepunkt
  - Kurvendiskussion
---

Hoch-, Tief- und Wendepunkte sind das Herzstück jeder Kurvendiskussion. Die gute Nachricht: Du
brauchst dafür nichts Neues zu lernen. Du brauchst nur die [[Ableitungsregeln]] und die Fähigkeit,
[[Nullstellen]] zu bestimmen. Der Rest ist ein festes Schema.

## Die Idee dahinter

Stell dir vor, du fährst mit dem Rad über einen Hügel. Beim Hinauffahren steigt es, beim
Hinunterfahren fällt es. **Genau auf der Kuppe** ist es für einen Moment flach.

Flach heißt: Steigung null. Und die Steigung ist genau das, was $f'(x)$ misst.

> [!info]+ Notwendige Bedingung
> An einer Extremstelle $x_0$ ist die Steigung null:
>
> $$
> f'(x_0) = 0
> $$
>
> Deshalb ist der erste Schritt immer derselbe: **Ableiten und gleich null setzen.**

Damit hast du die *Kandidaten*. Was du noch nicht weißt: Ist es ein Hügel oder ein Tal?

## Hochpunkt oder Tiefpunkt?

Dafür schaust du dir die **Krümmung** an, also $f''(x)$.

> [!info]+ Hinreichende Bedingung
> Sei $f'(x_0) = 0$. Dann gilt:
>
> $$
> f''(x_0) < 0 \quad \Rightarrow \quad \text{Hochpunkt (Maximum)}
> $$
>
> $$
> f''(x_0) > 0 \quad \Rightarrow \quad \text{Tiefpunkt (Minimum)}
> $$
>
> Merkhilfe, falls du die Vorzeichen dauernd verwechselst: Ein **negatives** $f''$ krümmt den Graphen
> nach **unten** — wie ein Hügel. Ein **positives** $f''$ krümmt nach **oben** — wie eine Schüssel,
> also ein Tal. Das Vorzeichen zeigt in die Richtung, in die sich der Graph wölbt.

> [!warning]+ Der Sonderfall $f''(x_0) = 0$
> Ist auch die zweite Ableitung null, sagt dir das Kriterium **nichts**. Es kann trotzdem ein
> Extrempunkt sein, muss aber nicht.
>
> Klassisches Gegenbeispiel: $f(x) = x^3$. Hier ist $f'(0) = 0$ und $f''(0) = 0$, aber der Graph
> steigt einfach weiter. So einen Punkt nennt man **Sattelpunkt**.
>
> In dem Fall prüfst du den **Vorzeichenwechsel von $f'$**: Wechselt $f'$ bei $x_0$ von $+$ nach $-$,
> ist es ein Hochpunkt. Von $-$ nach $+$ ein Tiefpunkt. Kein Wechsel, kein Extrempunkt.

## Wendepunkte

Ein **Wendepunkt** ist die Stelle, an der die Krümmung kippt — aus der Linkskurve wird eine
Rechtskurve. Auf dem Fahrrad ist das der Moment, in dem du das Lenkrad durch die Mittelstellung
drehst.

Krümmung ist $f''$. Wenn die Krümmung ihr Vorzeichen wechselt, muss sie unterwegs null sein.

> [!info]+ Wendepunkte bestimmen
> **Notwendig:**
>
> $$
> f''(x_0) = 0
> $$
>
> **Hinreichend:**
>
> $$
> f'''(x_0) \neq 0
> $$
>
> Das ist dieselbe Logik wie oben, nur eine Ableitung weiter oben angesetzt.

## Das Schema

> [!abstract]+ So gehst du jedes Mal vor
> 1. $f'(x)$ und $f''(x)$ bilden (für Wendepunkte zusätzlich $f'''(x)$)
> 2. $f'(x) = 0$ setzen und nach $x$ auflösen → Kandidaten
> 3. Kandidaten in $f''$ einsetzen → Hochpunkt oder Tiefpunkt
> 4. **x-Werte in $f$ einsetzen**, um die y-Koordinate zu bekommen
> 5. Ergebnis als Punkt angeben: $H(x \mid y)$ bzw. $T(x \mid y)$

> [!warning]+ Schritt 4 wird am häufigsten vergessen
> Gefragt ist der **Punkt**, nicht die Stelle. $x = 2$ ist erst die halbe Antwort. Setz den Wert in
> die **ursprüngliche** Funktion $f$ ein — nicht in $f'$ oder $f''$ — und gib $T(2 \mid -3)$ an.

## Komplett durchgerechnet

> [!info]+ Beispiel
> Bestimme alle Hoch-, Tief- und Wendepunkte von
> $$
> f(x) = x^3 - 3x^2 + 1
> $$
>
>> [!tip]- Lösung anzeigen:
>> **Schritt 1: Ableitungen bilden**
>>
>> $$
>> f'(x) = 3x^2 - 6x, \qquad f''(x) = 6x - 6, \qquad f'''(x) = 6
>> $$
>>
>> **Schritt 2: $f'(x) = 0$**
>>
>> $$
>> 3x^2 - 6x = 0
>> $$
>>
>> $3x$ ausklammern, nicht durch $x$ teilen:
>>
>> $$
>> 3x(x - 2) = 0 \quad \Rightarrow \quad x_1 = 0, \quad x_2 = 2
>> $$
>>
>> **Schritt 3: in $f''$ einsetzen**
>>
>> $$
>> f''(0) = 6 \cdot 0 - 6 = -6 < 0 \quad \Rightarrow \quad \text{Hochpunkt}
>> $$
>>
>> $$
>> f''(2) = 6 \cdot 2 - 6 = 6 > 0 \quad \Rightarrow \quad \text{Tiefpunkt}
>> $$
>>
>> **Schritt 4: y-Werte über $f$**
>>
>> $$
>> f(0) = 0 - 0 + 1 = 1
>> $$
>>
>> $$
>> f(2) = 8 - 12 + 1 = -3
>> $$
>>
>> $$
>> \boxed{H(0 \mid 1), \quad T(2 \mid -3)}
>> $$
>>
>> **Schritt 5: Wendepunkt**
>>
>> $$
>> f''(x) = 6x - 6 = 0 \quad \Rightarrow \quad x = 1
>> $$
>>
>> $f'''(1) = 6 \neq 0$, also liegt wirklich ein Wendepunkt vor.
>>
>> $$
>> f(1) = 1 - 3 + 1 = -1
>> $$
>>
>> $$
>> \boxed{W(1 \mid -1)}
>> $$

## Aufgaben

> [!note] Aufgabe 1
> Bestimme Hoch-, Tief- und Wendepunkte von
> $$
> f(x) = x^3 - 12x
> $$
>
>> [!success]- Lösung anzeigen:
>> $$
>> f'(x) = 3x^2 - 12, \qquad f''(x) = 6x, \qquad f'''(x) = 6
>> $$
>>
>> $f'(x) = 0$:
>>
>> $$
>> 3x^2 - 12 = 0 \quad \Rightarrow \quad x^2 = 4 \quad \Rightarrow \quad x_1 = 2, \; x_2 = -2
>> $$
>>
>> In $f''$ einsetzen:
>>
>> $$
>> f''(2) = 12 > 0 \quad \Rightarrow \quad \text{Tiefpunkt}
>> $$
>>
>> $$
>> f''(-2) = -12 < 0 \quad \Rightarrow \quad \text{Hochpunkt}
>> $$
>>
>> y-Werte:
>>
>> $$
>> f(2) = 8 - 24 = -16, \qquad f(-2) = -8 + 24 = 16
>> $$
>>
>> $$
>> \boxed{H(-2 \mid 16), \quad T(2 \mid -16)}
>> $$
>>
>> Wendepunkt: $f''(x) = 6x = 0 \Rightarrow x = 0$, und $f'''(0) = 6 \neq 0$.
>>
>> $$
>> f(0) = 0 \quad \Rightarrow \quad \boxed{W(0 \mid 0)}
>> $$

> [!note] Aufgabe 2
> Bestimme die Extrempunkte von
> $$
> f(x) = x^2 - 4x + 7
> $$
>
>> [!success]- Lösung anzeigen:
>> $$
>> f'(x) = 2x - 4, \qquad f''(x) = 2
>> $$
>>
>> $$
>> 2x - 4 = 0 \quad \Rightarrow \quad x = 2
>> $$
>>
>> $f''(2) = 2 > 0$, also Tiefpunkt.
>>
>> $$
>> f(2) = 4 - 8 + 7 = 3
>> $$
>>
>> $$
>> \boxed{T(2 \mid 3)}
>> $$
>>
>> Einen Wendepunkt gibt es nicht: $f''(x) = 2$ ist konstant und wird nie null. Das passt zur
>> Anschauung — eine Parabel ist überall gleich gekrümmt.

> [!note] Aufgabe 3
> Bestimme Hoch-, Tief- und Wendepunkte von
> $$
> f(x) = x^4 - 2x^2
> $$
>
>> [!success]- Lösung anzeigen:
>> $$
>> f'(x) = 4x^3 - 4x, \qquad f''(x) = 12x^2 - 4, \qquad f'''(x) = 24x
>> $$
>>
>> $f'(x) = 0$, dabei $4x$ ausklammern:
>>
>> $$
>> 4x(x^2 - 1) = 4x(x-1)(x+1) = 0 \quad \Rightarrow \quad x_1 = 0, \; x_2 = 1, \; x_3 = -1
>> $$
>>
>> In $f''$ einsetzen:
>>
>> $$
>> f''(0) = -4 < 0 \quad \Rightarrow \quad \text{Hochpunkt}
>> $$
>>
>> $$
>> f''(1) = 12 - 4 = 8 > 0 \quad \Rightarrow \quad \text{Tiefpunkt}
>> $$
>>
>> $$
>> f''(-1) = 12 - 4 = 8 > 0 \quad \Rightarrow \quad \text{Tiefpunkt}
>> $$
>>
>> y-Werte:
>>
>> $$
>> f(0) = 0, \qquad f(1) = 1 - 2 = -1, \qquad f(-1) = 1 - 2 = -1
>> $$
>>
>> $$
>> \boxed{H(0 \mid 0), \quad T(1 \mid -1), \quad T(-1 \mid -1)}
>> $$
>>
>> Wendepunkte:
>>
>> $$
>> 12x^2 - 4 = 0 \quad \Rightarrow \quad x^2 = \frac{1}{3} \quad \Rightarrow \quad x = \pm\frac{1}{\sqrt{3}}
>> $$
>>
>> Für beide Stellen ist $f'''(x) = 24x \neq 0$. Die y-Werte:
>>
>> $$
>> f\left(\pm\frac{1}{\sqrt{3}}\right) = \frac{1}{9} - \frac{2}{3} = -\frac{5}{9}
>> $$
>>
>> $$
>> \boxed{W_1\left(\tfrac{1}{\sqrt{3}} \;\Big|\; -\tfrac{5}{9}\right), \quad W_2\left(-\tfrac{1}{\sqrt{3}} \;\Big|\; -\tfrac{5}{9}\right)}
>> $$
