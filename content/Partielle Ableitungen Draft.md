---
draft: "true"
---

Berechne alle partielle Ableitungen $f_{x}(x,y)$, $f_{y}(x,y)$, $f_{xx}(x,y)$, $f_{xy}(x,y)$ ,$f_{yx}(x,y)$, $f_{yy}(x,y)$ der Funktion:
$$ f(x,y) = -\frac{1}{x²+y²} $$

Hierzu müssen wir die Funktion zunächst mit [[Potenzgesetze|Potenzgesetzen]] umformulieren: 
mit $$
\frac{1}{x} = x^{-1}
$$
ergibt sich $$f(x,y) = - (x² + y²)^{-1} $$Nun müssen wir die [[Kettenregel]] anwenden. 

## Berechnung von $f_{x}$
Wenn wir partiell nach $x$ ableiten, betrachten wir $y$ als Konstante. Also können wir schreiben $f(x,y) = f(x)$.  
Wir betrachten $f(x)$ als Verkettung zweier Funktionen: $f(x)= u(v(x))$
Hierbei ist $u(x)$ die äußere Funktion mit:  
$$
\begin{align}
u(x) &= -x^{-1}  \\
u'(x) &= x^{-2}
\end{align}
$$
 Die äußere Funktion $v(x)$ ist gegeben mit:
$$
\begin{align}
v(x) &= x^{2} + y^{2}  \\
v'(x) &= 2x
\end{align}
$$
Alles in die [[Kettenregel]] eingesetzt ergibt: 
$$\begin{align}
f'(x) &= 2x\cdot(x^{2}+y^{2})^{-2}  \\
 &= \frac{2x}{(x^{2}+y^{2})^{2}}
\end{align}$$
Am Anfang haben wir $y$ als konstant betrachtet. Behandeln wir $y$ als Variable schreiben wir $f_{x}(x,y)$ statt $f'(x)$. Die sauberste variante ist $\frac{ \partial f(x,y) }{ \partial x }$ 

## Berechnung von $f_{y}$
Erfolgt analog zu $f_{x}$ 

