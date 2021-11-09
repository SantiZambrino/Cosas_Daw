/*
 En HTML, crea una lista de 3 elementos y el botón “Añadir”. Al pulsar sobre el botón, se le pide al usuario que meta una cadena de texto y se creará una nueva entrada en la lista con el texto indicado.
*/

function crear() {
    //Apunto a los parrafos
    var parrafos = document.getElementsByTagName('p');
    //Pido el texto
    var texto = prompt("Escribe una cadena de texto: ",  " ");
    //Crear nodo texto
    var nodoTexto = document.createTextNode(texto);
    //enlazar al nodo padre
    var whosYourDaddy = document.body;
    whosYourDaddy.appendChild(nodoTexto);    
}