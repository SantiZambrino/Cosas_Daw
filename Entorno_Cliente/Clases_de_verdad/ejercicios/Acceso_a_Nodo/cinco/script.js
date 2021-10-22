/*
Cuando se haga click sobre el párrafo, cambia de la clase “uno” a la clase “dos”.
Cada vez que haga click en el párrafo, cambia de clase alternativamente.
*/

function cambio() {
    var elemento = document.getElementsByTagName("p");
    console.log(elemento);
    if (elemento[0].className == "uno") {
        elemento[0].className = "dos";
    }else if (elemento[0].className == "dos") {
        elemento[0].className = "uno";
    }
}