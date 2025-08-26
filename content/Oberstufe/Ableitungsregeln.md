---
tags:
  - Formelsammlung
  - "#Analysis"
  - "#Oberstufe"
---



> [!info]+ Potenzregel
> Für $f(x) = x^n$ gilt:  
> 
> $$
> f'(x) = n \cdot x^{n-1}
> $$
> 
> 
>> [!tip]- Beispiel anzeigen:  
>> 
>> $f(x) = x^4$
>> 
>> **Lösung:**
>> 
>> $$
>> f'(x) = 4 \cdot x^{4-1} = 4x^3
>> $$
>> 
>> 

> [!info]+ Faktorregel 
> Für $f(x) = a \cdot g(x)$ gilt:
> 
> $$
> f'(x) = a \cdot g'(x)
> $$
> 
>> [!tip]- Beispiel anzeigen:  
>>  
>> $$f(x) = 3 \cdot x^2$$  
>>  
>> Lösung: 
>> $$
>> f'(x) = 3 \cdot (2x) = 6x
>> $$

> [!info]+ Summenregel  
> Für $f(x) = u(x) \pm v(x)$ gilt:
> 
> $$
> f'(x) = u'(x) \pm v'(x)
> $$
> 
>> [!tip]- Beispiel anzeigen:    
>> 
>> $f(x) = x^3 + 2x$  
>>  
>> Lösung:  
>> $$
>> f'(x) = 3x^2 + 2
>> $$

> [!info]+ Produktregel  
> Für $f(x) = u(x) \cdot v(x)$ gilt:
> 
> $$
> f'(x) = u'(x)\cdot v(x) + u(x)\cdot v'(x)
> $$
> 
>> [!tip]- Beispiel anzeigen:    
>> 
>> $f(x) = x^2 \cdot \sin(x)$  
>>  
>> Lösung:  
>> $$
>> f'(x) = 2x \cdot \sin(x) + x^2 \cdot \cos(x)
>> $$
>> Noch mehr Beispiele und Übungsaufgaben gibt es hier: [[Ableitungsregeln Übungen]]
>

> [!info]+ Kettenregel  
> Für $f(x) = u(v(x))$ gilt:
> 
> $$
> f'(x) = u'(v(x)) \cdot v'(x)
> $$
> 
>> [!tip]- Beispiel anzeigen:    
>> 
>>  $$f(x) = \sin(3x^2)$$.  
>> 
>> Diese Funktion ist eine **Verkettung zweier Funktionen**:
>> - äußere Funktion: $$u(x) = \sin(x) \Rightarrow  u'(x) = \cos(x)$$  
>> - innere Funktion: $$v(x) = 3x^2 \Rightarrow  v'(x) = 6x$$
>> 
>> Alles in die Kettenregel einsetzen ergibt:
>> $$
>> f'(x) = u'(v(x)) \cdot v'(x) = \cos(3x^2) \cdot 6x
>> $$
>> 
>> 🌳 Ergebnis:  
>> $$
>> f'(x) = 6x \cdot \cos(3x^2)
>> $$
>> 
>> Weitere Beispiele und Übungen findest du hier: [[Ableitungsregeln Übungen]]

