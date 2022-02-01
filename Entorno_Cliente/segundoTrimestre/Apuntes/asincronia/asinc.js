// 
/* 
Asincronía:
    .JS solo puede realizar UNA sola cosa a la vez.
    .Puede delegar tareas a otros servicios y seguir con su vida.
Ejemplo:
1)Pintar cabecera
2)Obtener datos
3)colocar datos
3)puntar imagenes
5)eventos
Sincrono   Asincrono
1           1
2 bloqueado 2 cuando llegue lo hago
3 x         4     
4 x         5
5 x         3 Cuando llegue lo muestro
 
El sincrono hasta que no llega los datos no hace el resto
Asincrono pide los datos pero sigue haciendo las cosas y cuando llegan los mustro


Concurrencia: cuando dos o mas tareas se ejecutan simultaneamente(no significa que se ejecuten en el mismo instante de tiempo)
Ocurre con los procesadores de un solo nucleo.

Paralelismo: Dos o mas tareas se ejecutan de forma paralela es decir en el mismo instante de tiempo.

JAVA SCRIPT ES ASINCRONO Y CONCURRENTE

event loop: 
    caracteristica de js que se carga de coordinar el orden de ejecucion de las instrucciones "normales" y las instrucciones asincrones.

    asincronia:
    async
    await
    fetch
*/      