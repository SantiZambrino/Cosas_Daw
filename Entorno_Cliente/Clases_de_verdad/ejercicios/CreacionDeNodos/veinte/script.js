/*
Generar: cada vez que se pulse, crea un nuevo párrafo similar al que ya existe pero   maquetado   con   la   segunda   clase.   Todos   los   párrafos   generados   serán hermanos.

Borrar Viejo: elimina el párrafo que sale por defecto en la página. Al hacer eso,este botón y el botón ‘Sustituir’ quedan bloqueados.

Borrar Nuevos: este botón está bloqueado al principio y se desbloquea al pulsarel botón ‘Generar’. Su cometido es borrar TODOS los párrafos generados por el botón generar.
*/

window.onload = function() {
  var botones = document.getElementsByTagName("button");  

  //Generar
  botones[0].onclick = function() {
    var nuevoP = document.createElement("p");
    nuevoP.classList.add('clase2');

    //agrego texto
    var texto = document.getElementsByTagName('p')[0].textContent;//Copio el contenido del primer parrafo
    var nodoTexto = document.createTextNode(texto);
    nuevoP.appendChild(nodoTexto);

    //Agragar al nodo padre
    var whosYourDaddy = document.body;
    whosYourDaddy.appendChild(nuevoP)
    botones[2].disabled = false;
  }

  //Borrar viejo
  botones[1].onclick = function(){
    var elementoP = document.getElementsByTagName('p')[0];
    var whosYourDaddy = document.body;
    whosYourDaddy.removeChild(elementoP);
    botones[1].disabled = true;
    botones[3].disabled = true;
  }

  //Boton nuevo
  botones[2].onclick = function() {
    let papi = document.body;
    let hijos = papi.children

    while (papi.classList.contains("clase2")) {
        papi.removeChild(hijos.classList.contains("clase2"));
    }

    //   var papi = document.body;
    //   var hijos = document.getElementsByClassName('clase2');
    //   var i = 0
   
    //   while (papi) {
    //       papi.removeChild(hijos[i]);
    //       i++;
    //   }
  
  }
}