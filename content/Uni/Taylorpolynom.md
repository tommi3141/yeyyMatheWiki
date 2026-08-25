---
tags:
draft: "true"
created: 2025-09-22
aliases:
---
Bevor draft = false gesetzt wird
- [ ] Footer Bearbeiten 
- [ ] Quellen richtig angegeben? 
- [ ] In richigen Ordner gepackt
- [ ] Genug Tags?
	- Stufe
	- Themenbereich





# Taylorpolynom – Kurzüberblick

> [!note]+ Taylorpolynom: Was ist das, und wozu brauchen wir es? 
> - Approximation einer Funktion (um einen Punkt herrum) 
> - Auswertung komplizierter funktionen wird vereinfacht
 


Das Taylorpolynom dient dazu, eine Funktion in der Umgebung eines Entwicklungspunktes durch ein Polynom zu approximieren. Dadurch lassen sich komplizierte Funktionen einfacher auswerten, analysieren oder linearisieren.

Für eine eindimensionale Funktion $f(x)$ um den Entwicklungspunkt $x_0$ lautet das Taylorpolynom $n$-ter Ordnung:

$$
T_n(x)
=
\sum_{k=0}^{n}
\frac{f^{(k)}(x_0)}{k!}
(x-x_0)^k
$$

## Typische Anwendungen

- Näherungsrechnung (z.B. $e^x$, $\sin(x)$, $\ln(x)$)
- Linearisierung nichtlinearer Systeme
- Optimierungsverfahren
- Analyse von Extremstellen
- Mehrdimensionale Approximationen mit Gradient und Hesse-Matrix

---

> [!note]+ Aufgabe 1, einfach
> ## Aufgabenstellung
> 
> Bestimme das Taylorpolynom 2. Ordnung von $f(x)=e^x$ um den Entwicklungspunkt $x_0=0$ und verwende es zur Approximation von $e^{0.2}$
> 
>> [!success]- Lösung anzeigen:
>> 
>> ### Schritt 1: Ableitungen bestimmen
>> 
>> Die Funktion und alle ihre Ableitungen lauten:
>> 
>> $$
>> f(x)=e^x
>> $$
>> 
>> $$
>> f'(x)=e^x
>> $$
>> 
>> $$
>> f''(x)=e^x
>> $$
>> 
>> ---
>> 
>> ### Schritt 2: Ableitungen am Entwicklungspunkt auswerten
>> 
>> Für $x_0=0$ gilt:
>> 
>> $$
>> f(0)=1
>> $$
>> 
>> $$
>> f'(0)=1
>> $$
>> 
>> $$
>> f''(0)=1
>> $$
>> 
>> ---
>> 
>> ### Schritt 3: Taylorpolynom aufstellen
>> 
>> Das Taylorpolynom 2. Ordnung lautet:
>> 
>> $$
>> T_2(x)
>> =
>> f(0)
>> +
>> f'(0)x
>> +
>> \frac{f''(0)}{2}x^2
>> $$
>> 
>> Einsetzen ergibt:
>> 
>> $$
>> T_2(x)
>> =
>> 1+x+\frac{x^2}{2}
>> $$
>> 
>> ---
>> 
>> ### Schritt 4: Näherungswert berechnen
>> 
>> Für $x=0.2$:
>> 
>> $$
>> T_2(0.2)
>> =
>> 1+0.2+\frac{0.2^2}{2}
>> $$
>> 
>> $$
>> =
>> 1+0.2+0.02
>> $$
>> 
>> $$
>> =
>> 1.22
>> $$
>> 
>> ---
>> 
>> ## Ergebnis
>> 
>> $$
>> T_2(x)=1+x+\frac{x^2}{2}
>> $$
>> 
>> und
>> 
>> $$
>> e^{0.2}
>> \approx
>> 1.22
>> $$
>> 
>> ---
>> 

# Aufgabe 2 – Mittel (1D)

## Aufgabenstellung

Bestimme das Taylorpolynom 3. Ordnung von

$$
f(x)=\ln(x)
$$

um den Entwicklungspunkt

$$
x_0=1
$$

und nutze es zur Approximation von

$$
\ln(1.1).
$$

---

## Lösung

### Schritt 1: Ableitungen bestimmen

$$
f(x)=\ln(x)
$$

$$
f'(x)=\frac{1}{x}
$$

$$
f''(x)=-\frac{1}{x^2}
$$

$$
f'''(x)=\frac{2}{x^3}
$$

---

### Schritt 2: Ableitungen am Entwicklungspunkt auswerten

Für $x_0=1$:

$$
f(1)=0
$$

$$
f'(1)=1
$$

$$
f''(1)=-1
$$

$$
f'''(1)=2
$$

---

### Schritt 3: Taylorpolynom aufstellen

Allgemein:

$$
T_3(x)
=
f(1)
+
f'(1)(x-1)
+
\frac{f''(1)}{2!}(x-1)^2
+
\frac{f'''(1)}{3!}(x-1)^3
$$

Einsetzen:

$$
T_3(x)
=
(x-1)
-\frac{1}{2}(x-1)^2
+\frac{1}{3}(x-1)^3
$$

---

### Schritt 4: Näherungswert berechnen

Für $x=1.1$:

$$
x-1=0.1
$$

Daher:

$$
T_3(1.1)
=
0.1
-\frac{0.1^2}{2}
+\frac{0.1^3}{3}
$$

$$
=
0.1
-0.005
+0.000333
$$

$$
=
0.095333
$$

---

## Ergebnis

$$
T_3(x)
=
(x-1)
-\frac{1}{2}(x-1)^2
+\frac{1}{3}(x-1)^3
$$

und

$$
\ln(1.1)
\approx
0.09533
$$

---

# Aufgabe 3 – Schwer (mehrdimensional)

## Aufgabenstellung

Bestimme das Taylorpolynom 2. Ordnung der Funktion

$$
f(x,y)=e^{x+y}
$$

um den Entwicklungspunkt

$$
(x_0,y_0)=(0,0).
$$

---

## Lösung

### Schritt 1: Funktionswert bestimmen

$$
f(0,0)=e^0=1
$$

---

### Schritt 2: Gradient bestimmen

Die partiellen Ableitungen lauten:

$$
\frac{\partial f}{\partial x}
=
e^{x+y}
$$

$$
\frac{\partial f}{\partial y}
=
e^{x+y}
$$

Am Entwicklungspunkt:

$$
\nabla f(0,0)
=
\begin{bmatrix}
1\\
1
\end{bmatrix}
$$

---

### Schritt 3: Hesse-Matrix bestimmen

Die zweiten partiellen Ableitungen sind:

$$
\frac{\partial^2 f}{\partial x^2}
=
e^{x+y}
$$

$$
\frac{\partial^2 f}{\partial y^2}
=
e^{x+y}
$$

$$
\frac{\partial^2 f}{\partial x \partial y}
=
e^{x+y}
$$

Am Entwicklungspunkt:

$$
H_f(0,0)
=
\begin{bmatrix}
1 & 1\\
1 & 1
\end{bmatrix}
$$

---

### Schritt 4: Taylorpolynom aufstellen

Für Funktionen mehrerer Variablen lautet das Taylorpolynom 2. Ordnung:

$$
T_2(\mathbf{x})
=
f(\mathbf{x_0})
+
\nabla f(\mathbf{x_0})^T
(\mathbf{x}-\mathbf{x_0})
+
\frac{1}{2}
(\mathbf{x}-\mathbf{x_0})^T
H_f(\mathbf{x_0})
(\mathbf{x}-\mathbf{x_0})
$$

Da der Entwicklungspunkt der Ursprung ist:

$$
\mathbf{x}
=
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

Der lineare Anteil ergibt:

$$
x+y
$$

Der quadratische Anteil:

$$
\frac12
\begin{bmatrix}
x & y
\end{bmatrix}
\begin{bmatrix}
1 & 1\\
1 & 1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

Zunächst:

$$
\begin{bmatrix}
1 & 1\\
1 & 1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=
\begin{bmatrix}
x+y\\
x+y
\end{bmatrix}
$$

Dann:

$$
\begin{bmatrix}
x & y
\end{bmatrix}
\begin{bmatrix}
x+y\\
x+y
\end{bmatrix}
=
x^2+2xy+y^2
$$

Somit:

$$
\frac12
(x^2+2xy+y^2)
$$

---

## Ergebnis

Das Taylorpolynom 2. Ordnung lautet:

$$
T_2(x,y)
=
1
+
x
+
y
+
\frac12 x^2
+
xy
+
\frac12 y^2
$$

oder äquivalent

$$
T_2(x,y)
=
1
+
(x+y)
+
\frac12 (x+y)^2
$$




# Taylorpolynom für Funktionen mehrerer Variablen

Für eine Funktion

$$
f:\mathbb{R}^n \rightarrow \mathbb{R}
$$

lautet das Taylorpolynom 2. Ordnung um den Entwicklungspunkt

$$
\mathbf{x}_0
=
\begin{bmatrix}
x_{0,1}\\
x_{0,2}\\
\vdots\\
x_{0,n}
\end{bmatrix}
$$

allgemein:

$$
T_2(\mathbf{x})
=
f(\mathbf{x}_0)
+
\nabla f(\mathbf{x}_0)^T
(\mathbf{x}-\mathbf{x}_0)
+
\frac{1}{2}
(\mathbf{x}-\mathbf{x}_0)^T
H_f(\mathbf{x}_0)
(\mathbf{x}-\mathbf{x}_0)
$$

mit

$$
\nabla f(\mathbf{x}_0)
=
\begin{bmatrix}
\frac{\partial f}{\partial x_1}\\
\frac{\partial f}{\partial x_2}\\
\vdots\\
\frac{\partial f}{\partial x_n}
\end{bmatrix}_{\mathbf{x}_0}
$$

als Gradient und

$$
H_f(\mathbf{x}_0)
=
\begin{bmatrix}
\frac{\partial^2 f}{\partial x_1^2}
&
\frac{\partial^2 f}{\partial x_1 \partial x_2}
&
\cdots
\\
\frac{\partial^2 f}{\partial x_2 \partial x_1}
&
\frac{\partial^2 f}{\partial x_2^2}
&
\cdots
\\
\vdots & \vdots & \ddots
\end{bmatrix}_{\mathbf{x}_0}
$$

als Hesse-Matrix.

---

# Aufgabe 4 – Schwer (3D)

## Aufgabenstellung

Bestimme das Taylorpolynom 2. Ordnung der Funktion

$$
f(x,y,z)
=
x^2y+yz+\sin(xz)
$$

um den Entwicklungspunkt

$$
(x_0,y_0,z_0)
=
(1,1,0).
$$

---

## Lösung

### Schritt 1: Funktionswert am Entwicklungspunkt

Zunächst:

$$
f(1,1,0)
=
1^2 \cdot 1
+
1 \cdot 0
+
\sin(1 \cdot 0)
$$

$$
=
1
$$

---

### Schritt 2: Gradient bestimmen

Die ersten partiellen Ableitungen sind:

#### Ableitung nach $x$

$$
f_x
=
2xy
+
z\cos(xz)
$$

#### Ableitung nach $y$

$$
f_y
=
x^2+z
$$

#### Ableitung nach $z$

$$
f_z
=
y+x\cos(xz)
$$

---

### Schritt 3: Gradient am Entwicklungspunkt

Einsetzen von

$$
(x,y,z)=(1,1,0)
$$

liefert:

$$
f_x(1,1,0)
=
2\cdot1\cdot1+0
=
2
$$

$$
f_y(1,1,0)
=
1^2+0
=
1
$$

$$
f_z(1,1,0)
=
1+1\cdot\cos(0)
=
2
$$

Somit:

$$
\nabla f(1,1,0)
=
\begin{bmatrix}
2\\
1\\
2
\end{bmatrix}
$$

---

### Schritt 4: Zweite Ableitungen bestimmen

#### Zweite Ableitungen

$$
f_{xx}
=
2y-z^2\sin(xz)
$$

$$
f_{yy}
=
0
$$

$$
f_{zz}
=
-x^2\sin(xz)
$$

---

#### Gemischte Ableitungen

$$
f_{xy}
=
2x
$$

$$
f_{xz}
=
\cos(xz)-xz\sin(xz)
$$

$$
f_{yz}
=
1
$$

---

### Schritt 5: Hesse-Matrix am Entwicklungspunkt

Da

$$
\sin(0)=0
\qquad
\cos(0)=1
$$

ergibt sich:

$$
f_{xx}(1,1,0)=2
$$

$$
f_{yy}(1,1,0)=0
$$

$$
f_{zz}(1,1,0)=0
$$

$$
f_{xy}(1,1,0)=2
$$

$$
f_{xz}(1,1,0)=1
$$

$$
f_{yz}(1,1,0)=1
$$

Somit:

$$
H_f(1,1,0)
=
\begin{bmatrix}
2 & 2 & 1\\
2 & 0 & 1\\
1 & 1 & 0
\end{bmatrix}
$$

---

### Schritt 6: Verschiebungsvektor definieren

Da der Entwicklungspunkt nicht im Ursprung liegt, setzen wir

$$
\Delta x=x-1
$$

$$
\Delta y=y-1
$$

$$
\Delta z=z
$$

und schreiben

$$
\Delta
=
\begin{bmatrix}
\Delta x\\
\Delta y\\
\Delta z
\end{bmatrix}.
$$

---

### Schritt 7: Linearen Anteil berechnen

$$
\nabla f(1,1,0)^T \Delta
=
2\Delta x
+
\Delta y
+
2\Delta z
$$

---

### Schritt 8: Quadratischen Anteil berechnen

Der quadratische Anteil lautet

$$
\frac12 \Delta^T H \Delta.
$$

Zunächst:

$$
\Delta^T H \Delta
=
2\Delta x^2
+
4\Delta x\Delta y
+
2\Delta x\Delta z
+
2\Delta y\Delta z
$$

Nach Multiplikation mit $\frac12$:

$$
\Delta x^2
+
2\Delta x\Delta y
+
\Delta x\Delta z
+
\Delta y\Delta z
$$

---

### Schritt 9: Taylorpolynom zusammensetzen

Alle Anteile zusammen:

$$
T_2(x,y,z)
=
1
+
2\Delta x
+
\Delta y
+
2\Delta z
+
\Delta x^2
+
2\Delta x\Delta y
+
\Delta x\Delta z
+
\Delta y\Delta z
$$

mit

$$
\Delta x=x-1,
\qquad
\Delta y=y-1,
\qquad
\Delta z=z.
$$

---

## Ergebnis

Das Taylorpolynom 2. Ordnung um den Punkt

$$
(1,1,0)
$$

lautet

$$
T_2(x,y,z)
=
1
+
2(x-1)
+
(y-1)
+
2z
+
(x-1)^2
+
2(x-1)(y-1)
+
(x-1)z
+
(y-1)z.
$$

---

## Warum diese Aufgabe deutlich schwieriger ist

Im Vergleich zu den vorherigen Aufgaben treten hier mehrere zusätzliche Herausforderungen auf:

1. Der Entwicklungspunkt liegt nicht im Ursprung.
2. Es gibt drei Variablen statt zwei.
3. Die Funktion enthält sowohl Polynome als auch trigonometrische Terme.
4. Die Hesse-Matrix besitzt mehrere gemischte Ableitungen.
5. Die Verschiebung mittels

$$
\Delta x=x-x_0
$$

muss konsequent durch die gesamte Rechnung mitgeführt werden.

Diese Struktur entspricht bereits typischen Klausuraufgaben in Analysis 2, Optimierung oder Regelungstechnik.