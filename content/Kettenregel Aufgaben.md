

> [!note] Aufgabe 1
> Bestimme die Ableitung der Funktion
> 
> $$
> f(x) = \frac{1}{x^2 + \text{sin}(x)}
> $$
> 
>> [!success]- Lösung anzeigen:
>> Erforderliches Grundwissen für diese Aufgabe: [[Kettenregel Aufgaben]]
>> Wir schreiben f(x) als Verkettung zweier Funktionen $$f(x) = u(v(x))$$
>> - Äußere Funktion u: $$u(x) = \frac{1}{x} = x^{-1} \quad \Rightarrow \quad u'(x) = -x^{-2} = -\frac{1}{x^2}$$
>> - Innere Funktion v: $$v(x) = x^2 + \text{sin}(x) \quad \Rightarrow \quad v'(x) = 2x + \text{cos}(x)$$
>> Die [[Kettenregel Aufgaben]] lautet "äußere mal innere Ableitung":
>> $$
>> f'(x) = u'(v(x)) \cdot v'(x)
>> $$
>> 
>> Einsetzen von u und v in die Kettenregel ergibt: 
>> 
>> $$
>> f'(x) = -\frac{1}{(x^2 + \text{sin}(x))^2} \cdot (2x + \text{cos}(x)) = -\frac{2x + \text{cos}(x)}{(x^2 + \text{sin}(x))^2}
>> $$
>> ### Ergebnis:
>> 
>> $$
>> \boxed{
>> f'(x) =  -\frac{2x + \text{cos}(x)}{(x^2 + \text{sin}(x))^2}
>> }
>> $$
>> 
