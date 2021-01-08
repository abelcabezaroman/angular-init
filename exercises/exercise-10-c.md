Dado el anterior ejercicio crea un nuevo componente llamado ``pro-match-form`` que sea hijo directo de ``pro-match``. 

Este nuevo componente mostrará 3 ``<input/>`` que servirán para añadir un nuevo resultado a la tabla. Un input recogerá el nombre del equipo 1, otro input el nombre del equipo 2 y otro, el resultado.

Además, añade un botón que cuando el usuario haga click ejecute un ``@Output()`` hacia el componente padre enviando los datos recogidos con ``ngModel`` del formulario para que ``pro-match`` lo recoja y añada una nueva fila a la tabla.


