Crea un componente llamado countries-filtered-list al cual le pases como ``Input`` un array con el siguiente valor:

```js
[
    { name: 'Japón', population: 90000000 },
    { name: 'España', population: 40000000 },
    { name: 'Italia', population: 50000000 },
    { name: 'Venezuela', population: 30000000 },
    { name: 'Indonesia', population: 20000000 }
  ]
```
  
Utiliza ``*ngFor`` y ``*ngIf`` para mostrar dos listas. Una con los paises de mas de 30000000 habitantes y otra lista con los paises de menos o igual de 30000000 habitantes.