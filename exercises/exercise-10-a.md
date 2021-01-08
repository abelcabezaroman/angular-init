Crea el componente ``pro-match`` que tenga en su typescript una variable llamada ``matches`` con el siguiente valor:

```js
[
    {
      team1: 'G2',
      team2: 'Danwon',
      score: '1-3'
    },
    {
      team1: 'Fnatic',
      team2: 'Sunning',
      score: '2-3'
    },
    {
      team1: 'FPX',
      team2: 'G2',
      score: '3-0'
    },
    {
      team1: 'Mad Lions',
      team2: 'Vodafone Giants',
      score: '3-1'
    }
  ]
```

Posteriormente crea otro componente llamado ``pro-match-list`` que será hijo de ``pro-match`` al cual le pases mediante un ``Input`` el listado de partido antes mencionado.

Crea una tabla con 2 columnas: Partido, Resultado. Muestra los valores correspondientes del array en la tabla. Teniendo en cuenta que el valor de la columna Partido seria Equipo 1 vs Equipo 2