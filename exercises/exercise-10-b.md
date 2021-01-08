Dado el anterior ejercicio añade una nueva columna en el componente ``pro-match-list`` que sea un elemento ``button`` que contenga una X para cada fila.

Añade un evento ``(click)`` al botón para que mediante un ``@Output()`` envie al padre el indice del array del elemento clickado y, que el padre ``pro-match``, reciba el indice y elimine el elemento de la lista con un ``splice``.

Recuerda que en un ``*ngFor`` tienes la posibilidad de obtener el indice del array ``let index = index``. Seguro que te sirve de algo :)