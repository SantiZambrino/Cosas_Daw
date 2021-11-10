/*
Generar: cada vez que se pulse, crea un nuevo párrafo similar al que ya existe pero   maquetado   con   la   segunda   clase.   Todos   los   párrafos   generados   serán hermanos.

Borrar Viejo: elimina el párrafo que sale por defecto en la página. Al hacer eso,este botón y el botón ‘Sustituir’ quedan bloqueados.

Borrar Nuevos: este botón está bloqueado al principio y se desbloquea al pulsarel botón ‘Generar’. Su cometido es borrar TODOS los párrafos generados por el botón generar.

Sustituir: este botón sustituye el párrafo inicial por una tabla de dos filas y dos celdas con números en su interior. Recuerda que este botón estará bloqueado si se borra el párrafo inicial con el botón ‘Borrar Viejo’.
*/

window.onload = function () {
  var botones = document.getElementsByTagName("button");

  //Generar
  botones[0].onclick = function () {
    var nuevoP = document.createElement("p");
    nuevoP.classList.add('clase2');

    //agrego texto
    var texto = document.getElementsByTagName('p')[0].textContent;//Copio el contenido del primer parrafo
    var nodoTexto = document.createTextNode(texto);
    nuevoP.appendChild(nodoTexto);

    //Agregar al nodo padre
    var whosYourDaddy = document.querySelector('div');
    whosYourDaddy.appendChild(nuevoP)
    botones[2].disabled = false;
  }

  //Borrar viejo
  botones[1].onclick = function () {
    var elementoP = document.getElementsByTagName('p')[0];
    var whosYourDaddy = document.body;
    whosYourDaddy.removeChild(elementoP);
    botones[1].disabled = true;
    botones[3].disabled = true;
  }

  //Boton nuevo
  botones[2].onclick = function () {
    let papi = document.querySelector('div');
    let hijos = papi.children;
    console.log(hijos);
    while (papi.firstChild) {
      papi.removeChild(papi.firstChild);
    }
  }

  //Sustituir
  botones[3].onclick = function () {
    //Obtengo el nodo padre
    var padre = document.querySelector('div');
    //Creo la tabla
    var nuevoTable = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    // nuevoTable.className = 'clase2';
    for (var i = 0; i < 2; i++) {
      var fila = document.createElement('tr');
      for (var y = 0; y < 2; y++) {
        var columna = document.createElement('td');
        var textoColumna = document.createTextNode(i + "" + y);
        columna.appendChild(textoColumna);
        fila.appendChild(columna);
      }
      tblBody.appendChild(nuevoTable);
    }
    nuevoTable.appendChild(tblBody);
    padre.appendChild(nuevoTable);
  }
}