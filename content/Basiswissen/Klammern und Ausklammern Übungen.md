---
title: Ausklammern Übungen
tags:
  - Mittelstufe
  - Algebra
  - Aufgaben
draft: true
created: 2026-08-25
aliases:
  - Ausklammern Übungen
  - Aufgaben zum Ausklammern
---

%%
Herkunft: Aufgabenstellungen adaptiert von serlo.org (CC BY-SA 4.0),
https://de.serlo.org/mathe/24492/aufgaben-zum-ausklammern
Lösungswege sind selbst gerechnet, nicht von Serlo übernommen.

Bewusst NICHT übernommen, weil die Extraktion sie nicht sauber liefern konnte:
- Serlo 54417 (Multiple Choice "Wo wurde richtig ausgeklammert"), Antwortoptionen fehlten
- Serlo 8453, 8563, 40587, 8479, 3881, 274885: komplett leer extrahiert (interaktiv/Bild)
- Serlo 8897 Teilaufgabe a: Formel war beim Extrahieren zerschossen
- Eine Teilaufgabe aus 54230 ("3+25+5*95"): Vorfaktor ging verloren
Nachtragen nur direkt von der Serlo-Seite, nicht aus dem Extraktions-Dump.
%%

Die Regel selbst steht in [[Klammern und Ausklammern]]. Hier geht es ums Üben.

Ausklammern klingt erstmal nach einer Regel, die man auswendig lernt. Ist es aber nicht.
Es ist vor allem ein **Werkzeug, um sich Arbeit zu sparen**. Du siehst das gleich in der
ersten Aufgabe: Sobald du den gemeinsamen Faktor entdeckst, wird aus einer Rechnung, für
die du sonst den Taschenrechner brauchst, eine Kopfrechnung.

Rechne die Aufgaben erst selbst, bevor du die Lösung aufklappst. Das ist der ganze Trick.

## Teil 1: Geschickt rechnen

> [!note] Aufgabe 1
> Berechne im Kopf, indem du geschickt ausklammerst.
>
> a) $7 \cdot 52 + 7 \cdot 61$
> b) $8 \cdot 6 + 11 \cdot 8$
> c) $4 \cdot 17 + 13 \cdot 4$
> d) $99 + 11 \cdot 123$
> e) $7 \cdot 12 + 2 \cdot 7 \cdot 4$
>
>> [!tip]- Tipp, falls du bei d) hängst
>> Bei d) steht der gemeinsame Faktor nicht sichtbar da. Frag dich: Was ist $99$
>> eigentlich für eine Zahl? Lässt sie sich als Vielfaches von $11$ schreiben?
>
>> [!success]- Lösung anzeigen
>> **a)** Beide Summanden haben den Faktor $7$:
>> $$
>> 7 \cdot 52 + 7 \cdot 61 = 7 \cdot (52 + 61) = 7 \cdot 113 = \boxed{791}
>> $$
>>
>> **b)** Der Faktor $8$ steht einmal links und einmal rechts. Das ist egal, Multiplikation
>> ist vertauschbar:
>> $$
>> 8 \cdot 6 + 11 \cdot 8 = 8 \cdot 6 + 8 \cdot 11 = 8 \cdot (6 + 11) = 8 \cdot 17 = \boxed{136}
>> $$
>>
>> **c)** Genauso mit $4$:
>> $$
>> 4 \cdot 17 + 13 \cdot 4 = 4 \cdot (17 + 13) = 4 \cdot 30 = \boxed{120}
>> $$
>>
>> **d)** Hier ist der gemeinsame Faktor versteckt. Es gilt $99 = 11 \cdot 9$:
>> $$
>> 99 + 11 \cdot 123 = 11 \cdot 9 + 11 \cdot 123 = 11 \cdot (9 + 123) = 11 \cdot 132 = \boxed{1452}
>> $$
>>
>> **e)** Rechne zuerst $2 \cdot 4 = 8$ zusammen, dann siehst du die $7$ in beiden Summanden:
>> $$
>> 7 \cdot 12 + 2 \cdot 7 \cdot 4 = 7 \cdot 12 + 7 \cdot 8 = 7 \cdot (12 + 8) = 7 \cdot 20 = \boxed{140}
>> $$

## Teil 2: Brüche loswerden

Hier wird Ausklammern zum Aufräumwerkzeug. Ziel ist, dass **in der Klammer kein Bruch mehr
steht**. Du klammerst also nicht irgendeinen gemeinsamen Faktor aus, sondern gezielt den,
der alle Nenner schluckt.

> [!note] Aufgabe 2
> Klammere so aus, dass in der Klammer keine Brüche mehr stehen.
>
> a) $\frac{3}{4} bx - \frac{3}{4} by + \frac{3}{4} bz$
> b) $\frac{1}{2} xu - \frac{1}{8} xv + \frac{3}{4} xz$
> c) $\frac{2}{3} a - \frac{5}{6} b$
>
>> [!tip]- Tipp
>> Schau dir nur die Nenner an und such ihr kleinstes gemeinsames Vielfaches.
>> Bei b) sind die Nenner $2$, $8$ und $4$. Welcher Bruch passt in alle drei hinein?
>
>> [!success]- Lösung anzeigen
>> **a)** Der Faktor $\frac{3}{4} b$ steckt in jedem Summanden:
>> $$
>> \frac{3}{4} bx - \frac{3}{4} by + \frac{3}{4} bz = \boxed{\frac{3}{4} b \, (x - y + z)}
>> $$
>>
>> **b)** Die Nenner sind $2$, $8$ und $4$. Der kleinste gemeinsame Baustein ist
>> $\frac{1}{8}$, dazu kommt das $x$, das überall vorkommt. Wir klammern also
>> $\frac{1}{8} x$ aus und fragen uns bei jedem Summanden: Womit muss ich $\frac{1}{8}$
>> multiplizieren?
>>
>> $$
>> \begin{aligned}
>> \frac{1}{2} &= \frac{1}{8} \cdot 4 \\
>> \frac{1}{8} &= \frac{1}{8} \cdot 1 \\
>> \frac{3}{4} &= \frac{1}{8} \cdot 6
>> \end{aligned}
>> $$
>>
>> Damit:
>> $$
>> \frac{1}{2} xu - \frac{1}{8} xv + \frac{3}{4} xz = \boxed{\frac{1}{8} x \, (4u - v + 6z)}
>> $$
>>
>> **c)** Nenner $3$ und $6$, also $\frac{1}{6}$ ausklammern:
>> $$
>> \frac{2}{3} = \frac{1}{6} \cdot 4
>> \qquad \text{und} \qquad
>> \frac{5}{6} = \frac{1}{6} \cdot 5
>> $$
>>
>> $$
>> \frac{2}{3} a - \frac{5}{6} b = \boxed{\frac{1}{6} \, (4a - 5b)}
>> $$
>>
>> Probe machen lohnt sich immer: Multiplizier die Klammer einmal aus und schau, ob du
>> wieder beim Ausgangsterm landest.

## Teil 3: Einen vorgegebenen Faktor ausklammern

Jetzt darfst du dir den Faktor nicht mehr aussuchen, er ist vorgegeben. Das ist die
Situation, die dir später beim Umformen von Gleichungen ständig begegnet.

> [!note] Aufgabe 3
> Klammere den angegebenen Ausdruck aus.
>
> a) $(-1)$ aus $a + b$
> b) $(-1)$ aus $b - a$
> c) $(-1)$ aus $-a - b - 1$
> d) $(-1)$ aus $a - b - 1$
> e) $(-ab^2)$ aus $-ab^4 + a^2 b^3 - a^3 b^2$
> f) $(-2ab)$ aus $2ab^2 - 4a^2 b$
> g) $\left(\frac{1}{2} x^2 y\right)$ aus $\frac{1}{2} x^4 y - \frac{5}{2} x^3 y - x^2 y^3$
>
>> [!tip]- Tipp
>> Denk es rückwärts. Du suchst die Klammer, die mit dem vorgegebenen Faktor multipliziert
>> wieder den Ausgangsterm ergibt. Frag also für jeden Summanden einzeln:
>> Faktor mal was ergibt diesen Summanden?
>
>> [!success]- Lösung anzeigen
>> **a)** Jeder Summand bekommt beim Ausklammern von $(-1)$ das umgekehrte Vorzeichen:
>> $$
>> a + b = \boxed{-(-a - b)}
>> $$
>>
>> **b)**
>> $$
>> b - a = \boxed{-(a - b)}
>> $$
>> Diese Umformung brauchst du oft. Merk dir: $b - a$ und $a - b$ unterscheiden sich
>> genau um das Vorzeichen.
>>
>> **c)**
>> $$
>> -a - b - 1 = \boxed{-(a + b + 1)}
>> $$
>>
>> **d)**
>> $$
>> a - b - 1 = \boxed{-(-a + b + 1)}
>> $$
>>
>> **e)** Wir gehen Summand für Summand durch und fragen jedes Mal, was mit $-ab^2$
>> multipliziert werden muss:
>> $$
>> \begin{aligned}
>> -ab^4 &= -ab^2 \cdot b^2 \\
>> a^2b^3 &= -ab^2 \cdot (-ab) \\
>> -a^3b^2 &= -ab^2 \cdot a^2
>> \end{aligned}
>> $$
>>
>> $$
>> -ab^4 + a^2 b^3 - a^3 b^2 = \boxed{-ab^2 \, (b^2 - ab + a^2)}
>> $$
>>
>> **f)**
>> $$
>> \begin{aligned}
>> 2ab^2 &= -2ab \cdot (-b) \\
>> -4a^2b &= -2ab \cdot 2a
>> \end{aligned}
>> $$
>>
>> $$
>> 2ab^2 - 4a^2 b = \boxed{-2ab \, (-b + 2a)}
>> $$
>>
>> **g)**
>> $$
>> \begin{aligned}
>> \frac{1}{2} x^4 y &= \frac{1}{2} x^2 y \cdot x^2 \\
>> -\frac{5}{2} x^3 y &= \frac{1}{2} x^2 y \cdot (-5x) \\
>> -x^2 y^3 &= \frac{1}{2} x^2 y \cdot (-2y^2)
>> \end{aligned}
>> $$
>>
>> $$
>> \frac{1}{2} x^4 y - \frac{5}{2} x^3 y - x^2 y^3 = \boxed{\frac{1}{2} x^2 y \, (x^2 - 5x - 2y^2)}
>> $$

## Teil 4: Fehler finden

Fehler zu finden ist schwerer, als selbst zu rechnen. Genau deshalb lohnt es sich.

> [!note] Aufgabe 4
> Hier wurde ausgeklammert, aber es stimmt nicht. Beschreibe mit eigenen Worten,
> welcher Fehler gemacht wurde, und korrigiere ihn.
>
> $$
> -\frac{1}{2} xy^2 - xy + 2x^2 y = -xy \left(\frac{1}{2} y - 2x\right)
> $$
>
>> [!tip]- Tipp
>> Multiplizier die rechte Seite aus und vergleich sie Summand für Summand mit der linken.
>
>> [!success]- Lösung anzeigen
>> **Probe durch Ausmultiplizieren:**
>> $$
>> -xy \left(\frac{1}{2} y - 2x\right) = -\frac{1}{2} xy^2 + 2x^2 y
>> $$
>>
>> Links stehen **drei** Summanden, rechts kommen nur **zwei** heraus. Der mittlere
>> Term $-xy$ ist unterwegs verschwunden.
>>
>> Der Grund ist ein klassischer Denkfehler: $-xy$ ist genau der Faktor, den man
>> ausklammert. Da denkt man leicht, er sei damit aufgebraucht. Ist er aber nicht.
>> Wenn du $-xy$ aus $-xy$ ausklammerst, bleibt in der Klammer eine $1$ stehen.
>>
>> **Richtig ist:**
>> $$
>> -\frac{1}{2} xy^2 - xy + 2x^2 y = \boxed{-xy \left(\frac{1}{2} y + 1 - 2x\right)}
>> $$
>>
>> Merk dir das als Regel: Wenn ein Summand identisch mit dem ausgeklammerten Faktor ist,
>> steht dort in der Klammer eine $1$, keine Lücke.

## Teil 5: Richtig oder falsch faktorisiert

> [!note] Aufgabe 5
> Der Term
> $$
> -\frac{1}{2} a^2 - a + 2ab
> $$
> soll als Produkt geschrieben werden. Entscheide bei jeder Variante, ob richtig oder
> falsch faktorisiert wurde.
>
> a) $-\frac{1}{2} a \, (a + 2 - 4ab)$
> b) $a \left(-\frac{1}{2} a + 2b\right)$
> c) $2 \left(-\frac{1}{4} a - \frac{1}{2} + b\right) \cdot a$
> d) $a \, (a - 2b) \cdot \left(-\frac{1}{2}\right)$
> e) $0{,}5 a \left(-a - \frac{1}{2} + ab\right)$
>
>> [!tip]- Tipp
>> Du musst hier gar nicht faktorisieren. Multiplizier einfach jede Variante aus und
>> vergleich mit dem Ausgangsterm. Sobald ein einziger Summand nicht passt, ist die
>> Variante falsch.
>
>> [!success]- Lösung anzeigen
>> **a) Falsch.**
>> $$
>> -\frac{1}{2} a \, (a + 2 - 4ab) = -\frac{1}{2} a^2 - a + 2a^2 b
>> $$
>> Die ersten beiden Summanden stimmen, der letzte nicht. Es kommt $2a^2 b$ heraus,
>> gesucht war $2ab$. Ein $a$ zu viel.
>>
>> **b) Falsch.**
>> $$
>> a \left(-\frac{1}{2} a + 2b\right) = -\frac{1}{2} a^2 + 2ab
>> $$
>> Der Summand $-a$ fehlt komplett. Das ist derselbe Fehler wie in Aufgabe 4.
>>
>> **c) Richtig.**
>> $$
>> 2 \left(-\frac{1}{4} a - \frac{1}{2} + b\right) \cdot a
>> = 2a \left(-\frac{1}{4} a - \frac{1}{2} + b\right)
>> = -\frac{1}{2} a^2 - a + 2ab
>> $$
>> Alle drei Summanden stimmen. Dass der Faktor hier in zwei Teile zerlegt ist, also
>> $2$ vorne und $a$ hinten, ändert nichts.
>>
>> **d) Falsch.**
>> $$
>> a \, (a - 2b) \cdot \left(-\frac{1}{2}\right) = -\frac{1}{2} a^2 + ab
>> $$
>> Auch hier fehlt $-a$, und statt $2ab$ steht nur $ab$ da.
>>
>> **e) Falsch.**
>> $$
>> 0{,}5 a \left(-a - \frac{1}{2} + ab\right) = -0{,}5 a^2 - 0{,}25 a + 0{,}5 a^2 b
>> $$
>> Nur der erste Summand stimmt.
>>
>> $$
>> \boxed{\text{Nur c) ist richtig faktorisiert.}}
>> $$

## Weiter üben

- Regel und Grundlagen: [[Klammern und Ausklammern]]
- Wenn dir beim Faktorisieren Ausdrücke wie $a^2 + 2ab + b^2$ begegnen: [[Binomische Formeln]]
- Ausklammern im Einsatz beim Lösen von Gleichungen: [[Nullstellen]]

<div style="font-size:0.85em; color:var(--text-muted); margin-top:2em; border-top:1px solid var(--background-modifier-border); padding-top:0.5em;">
  Aufgabenstellungen übernommen und bearbeitet von
  <a href="https://de.serlo.org/mathe/24492/aufgaben-zum-ausklammern" target="_blank" rel="noopener noreferrer">serlo.org, Aufgaben zum Ausklammern</a>,
  lizenziert unter <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.<br>
  Änderungen vorgenommen: Auswahl der Aufgaben, Umformulierung, eigene Lösungswege.<br>
  Diese Seite steht daher ebenfalls unter <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.
</div>
