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




#template
- [ ] move this file to content folder #nachhilfe 

> [!note] Aufgabe 1  
> Berechne die gemischte partielle Ableitung $f_{xyz}(x, y, z)$ für die Funktion  
> $$ f(x, y, z) = x^3 \cdot e^y + x^2 + z \cdot e^{xy} $$
>> [!success]- Lösung anzeigen:
> > **Ableitung nach $x$**  
> > $$ \frac{\partial f}{\partial x} = 3x^2 \cdot e^y + 2x + z \cdot y \cdot e^{xy} $$
> >
> > **$f_x(x,y)$ nach y ableiten $y$**  
> > $$ \frac{\partial^2 f}{\partial y \partial x} = 3x^2 \cdot e^y + z \cdot e^{xy}(1 + xy) $$
> >
> > **$f_{x,y}(x,y)$Ableitung nach $z$**  
> > $$ \frac{\partial^3 f}{\partial z \partial y \partial x} = e^{xy}(1 + xy) $$
> >
> > **Endergebnis:**  
> > $$ \boxed{f_{xyz}(x, y, z) = e^{xy}(1 + xy)} $$

> [!note] Aufgabe 2
> Berechne die partiellen Ableitungen für die Funktion $$f(x,y) = x² + y² +xy $$
>> [!success]- Lösung anzeigen:
>> $$\begin{align}
>> f_x(x,y) &= 2x + y \\
>> f_y(x,y) &= 2y + x \\
>> f_{xx}(x,y) &= 2 \\
>> f_{yy}(x,y) &= 2
>> \end{align}$$

> [!note] Aufgabe 3
> 
> Berechnung die gemischten partiellen Ableitung  $$f_{xyz}(x,y,z) = \frac{\partial^3 f}{\partial x \partial y \partial z}$$  der Funktion $$f(x,y,z) = x^3 \cdot e^y + x^2 + z \cdot e^{xy}$$
> 
>> [!success]- Lösung anzeigen:
>> In dieser Lösung berechnen wir zuerst $f_{x}$. Dann leiten wird diese nach $y$ ab und erhalten $f_{xy}$. Diese wiederum nach $z$ abgeleitet gibt uns $f_{xyz}$. Beachte: Die Reihenfolge der Ableitungen ist egal (siehe [[Satz von Schwarz]]).  
>> 
>> ## 1. Erste Ableitung nach $x$
>> 
>> $f_{x}=\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}[x^3 \cdot e^y + x^2 + z \cdot e^{xy}]$
>> 
>> - $\frac{\partial}{\partial x}[x^3 \cdot e^y] = 3x^2 \cdot e^y$
>> - $\frac{\partial}{\partial x}[x^2] = 2x$
>> - $\frac{\partial}{\partial x}[z \cdot e^{xy}] = z \cdot e^{xy} \cdot y$ (Kettenregel)
>> 
>> **Zusammengesetzt ergibt das:** $f_x(x,y,z) = 3x^2 \cdot e^y + 2x + z \cdot y \cdot e^{xy}$
>> 
>> ---
>> 
>> ## 2.) $f_{x}$ nach $y$ ableiten
>> 
>> $\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}[3x^2 \cdot e^y + 2x + z \cdot y \cdot e^{xy}]$
>> 
>> - $\frac{\partial}{\partial y}[3x^2 \cdot e^y] = 3x^2 \cdot e^y$
>> - $\frac{\partial}{\partial y}[2x] = 0$
>> - $\frac{\partial}{\partial y}[z \cdot y \cdot e^{xy}] = z \cdot e^{xy} + z \cdot y \cdot e^{xy} \cdot x = z \cdot e^{xy}(1 + xy)$ 
>> 	([[Produktregel]] + [[Kettenregel]], und dann [[Ausklammern]])
>> 
>> **Zusammengesetzt ergibt das:** $f_{xy}(x,y,z) = 3x^2 \cdot e^y + z \cdot e^{xy}(1 + xy)$
>> 
>> ---
>> 
>> ## 3.) $f_{xy}$ nach $z$ ableiten
>> 
>> $\frac{\partial^3 f}{\partial z \partial y \partial x} = \frac{\partial}{\partial z}[3x^2 \cdot e^y + z \cdot e^{xy}(1 + xy)]$
>> 
>> - $\frac{\partial}{\partial z}[3x^2 \cdot e^y] = 0$ (da unabhängig von $z$)
>> - $\frac{\partial}{\partial z}[z \cdot e^{xy}(1 + xy)] = e^{xy}(1 + xy)$
>> 
>> ---
>> ## Endergebnis
>> 
>> $$f_{xyz}(x,y,z) = e^{xy}(1 + xy)$$
>> 
>> 

[[Partielle Ableitungen Draft]]






