---
title: Satz von Schwarz
tags:
  - Uni
  - Analysis
  - Erklärung
draft: true
created: 2026-08-25
---

Wenn du eine Funktion mit mehreren Variablen zweimal partiell ableitest, kannst du das in
verschiedenen Reihenfolgen tun: erst nach $x$, dann nach $y$ — oder umgekehrt. Die naheliegende
Frage ist, ob dabei dasselbe herauskommt. Der Satz von Schwarz sagt: ja, unter einer milden
Bedingung.

> [!info]+ Satz von Schwarz
> Sei $f: D \subseteq \mathbb{R}^n \to \mathbb{R}$ und seien die zweiten partiellen Ableitungen
> $f_{xy}$ und $f_{yx}$ in einer Umgebung von $a \in D$ vorhanden und in $a$ **stetig**.
> Dann gilt:
>
> $$
> \frac{\partial^2 f}{\partial x\, \partial y}(a) = \frac{\partial^2 f}{\partial y\, \partial x}(a)
> $$
>
> Kurz: $f_{xy} = f_{yx}$. Die Reihenfolge der Ableitungen ist egal.

In der Praxis ist die Bedingung fast immer erfüllt. Alles was du üblicherweise ableitest —
Polynome, $\sin$, $\cos$, $e^x$, und Kombinationen daraus — ist beliebig oft stetig differenzierbar.
Deshalb darfst du bei solchen Funktionen die Reihenfolge bedenkenlos tauschen.

> [!tip]- Beispiel anzeigen:
> $$
> f(x,y) = x^3 y^2 + \sin(x)
> $$
>
> **Weg 1 — erst nach $x$, dann nach $y$:**
> $$
> f_x = 3x^2 y^2 + \cos(x) \quad \Rightarrow \quad f_{xy} = 6x^2 y
> $$
>
> **Weg 2 — erst nach $y$, dann nach $x$:**
> $$
> f_y = 2x^3 y \quad \Rightarrow \quad f_{yx} = 6x^2 y
> $$
>
> $$
> \boxed{f_{xy} = f_{yx} = 6x^2 y}
> $$

## Warum die Stetigkeit wichtig ist

Die Voraussetzung ist keine reine Formsache. Es gibt Funktionen, bei denen die gemischten
Ableitungen existieren, aber nicht stetig sind — und dann kommt tatsächlich Unterschiedliches heraus.

> [!warning]+ Gegenbeispiel
> $$
> f(x,y) = \begin{cases} \dfrac{xy(x^2-y^2)}{x^2+y^2} & (x,y) \neq (0,0) \\[6pt] 0 & (x,y) = (0,0) \end{cases}
> $$
>
> Hier existieren beide gemischten Ableitungen im Ursprung, aber es gilt
> $f_{xy}(0,0) = -1$ und $f_{yx}(0,0) = 1$. Sie sind also **nicht** gleich.
> Der Grund: $f_{xy}$ ist im Ursprung nicht stetig, die Voraussetzung des Satzes ist verletzt.

## Praktischer Nutzen

Wenn du eine gemischte Ableitung berechnen sollst, darfst du dir die bequemere Reihenfolge
aussuchen. Oft ist ein Weg deutlich weniger Rechenarbeit als der andere.

Siehe dazu [[Gemischte Partielle Ableitung]].
