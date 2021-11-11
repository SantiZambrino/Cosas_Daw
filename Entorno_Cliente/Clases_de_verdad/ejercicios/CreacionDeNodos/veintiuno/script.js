/*
Crea un programa en Javascript que al colocar el ratón encima de cualquier enlace,aparezca un div de 200x200px con maquetación en CSS (color de fondo, tamaño de letras, relleno, sombra paralela, bordes redondeados...) en la esquina superior derecha de la pantalla con el texto: Esto es un enlace.

Mejora el ejercicio anterior para que el mensaje sea: “La URL de este enlace es:xxxxxx” (siendo xxxxxx la url del enlace sobre el que se coloca el ratón). 
*/

window.onload = function(){

    var enlaces = document.getElementsByTagName('a');
    var divNuevo = document.createElement('div');
    divNuevo.className = "divCreado";
    // var texto = "Esto es un enlace";
    // var nodoTexto = document.createTextNode(texto);
    // divNuevo.appendChild(nodoTexto);
    var papi = document.body;
    console.log(enlaces[0].href);    

    enlaces[0].onmouseover = function() {
        var texto = enlaces[0].href;
        var nodoTexto = document.createTextNode(texto);   
        divNuevo.appendChild(nodoTexto); 
        papi.appendChild(divNuevo);
    };
    enlaces[1].onmouseover = function() {
        papi.appendChild(divNuevo);
    };
    enlaces[2].onmouseover = function() {
        papi.appendChild(divNuevo);
    };

    //Quitar el div
    enlaces[0].onmouseleave = function() {
        papi.removeChild(divNuevo);   
    }
    enlaces[1].onmouseleave = function() {
        papi.removeChild(divNuevo);
    }
    enlaces[2].onmouseleave = function() {
        papi.removeChild(divNuevo);
    }

}
