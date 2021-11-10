/*
Crea un programa en Javascript que al colocar el ratón encima de cualquier enlace,aparezca un div de 200x200px con maquetación en CSS (color de fondo, tamaño de letras, relleno, sombra paralela, bordes redondeados...) en la esquina superior derecha de la pantalla con el texto: Esto es un enlace.
*/

window.onload = function(){
    var enlaces = document.getElementsByTagName('a');
    var divNuevo = document.createElement('div');
    divNuevo.className = "divCreado";
    var texto = "Esto es un enlace";
    var nodoTexto = document.createTextNode(texto);
    divNuevo.appendChild(nodoTexto);
    var papi = document.body;
    

    enlaces[0].onmouseover = function() {
        papi.appendChild(divNuevo);    
    };
    enlaces[1].onmouseover = function() {
        papi.appendChild(divNuevo);
    };
    enlaces[2].onmouseover = function() {
        papi.appendChild(divNuevo);
    };

    enlaces[0].onmouseout = function () {
        papi.removeChild()
    }

}
