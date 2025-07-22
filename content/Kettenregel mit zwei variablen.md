
## Beispiel: Partielle Ableitung mit Kettenregel

Gegeben sei die Funktion:

$$
f(x, y) = \frac{1}{x^2 + y^2}
$$

Wir schreiben dies als Verkettung zweier Funktionen $$f(x, y) = u(v(x, y))$$
- Äußere Funktion u: $$u(z) = \frac{1}{z} \quad \Rightarrow \quad u'(z) = -\frac{1}{z^2}$$
- Innere Funktion v: $$v(x, y) = x^2 + y^2 \quad \Rightarrow \quad \frac{\partial v}{\partial x} = 2x$$

Die [[Kettenregel mit zwei variablen]] lautet "äußere mal innere Ableitung":
$$
\frac{\partial f}{\partial x} = u'(v(x, y)) \cdot \frac{\partial v}{\partial x}
$$

Einsetzen von u und v in die Kettenregel ergibt: 

$$
\frac{\partial f}{\partial x} = \left(-\frac{1}{(x^2 + y^2)^2}\right) \cdot 2x = \frac{-2x}{(x^2 + y^2)^2}
$$
### Ergebnis:

$$
\boxed{
\frac{\partial}{\partial x} \left( \frac{1}{x^2 + y^2} \right) = \frac{-2x}{(x^2 + y^2)^2}
}
$$
