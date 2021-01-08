Crea el componente ``ng-class-score`` y muestra dos instancias del mismo en el componente app. Uno con el primer array y otro con el segundo. Marque utilizando ``ngClass`` las personas que tengan notas por debajo de 5 en rojo, entre 5 y 7 en color azul y por encima de 7 en color verde. 

Recuerda que para recorrer listas en html puedes usar un ``*ngFor``

```js
[
    {name: 'Julia', score: 9},
    {name: 'Pedro', score: 8},
    {name: 'Samuel', score: 4},
    {name: 'Luis', score: 10},
    {name: 'Alejandro', score: 7},
    {name: 'Lucia', score: 2},
]

[
    {name: 'Samantha', score: 4},
    {name: 'Luisa', score: 9},
    {name: 'Andres', score: 5},
    {name: 'Juan', score: 6},
    {name: 'Calamardo', score: 2},
    {name: 'Bob', score: 5},
]
```