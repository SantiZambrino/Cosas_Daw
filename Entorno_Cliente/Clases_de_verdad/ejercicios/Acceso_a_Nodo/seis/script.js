/*
Crea cinco botones y coloca como value un color diferente a cada uno. Cada vez que se pulse uno de los botones, el fondo de la página debe cambiar al color indicado por ese botón.
*/ 

function color(color) {
    //Apunto a los elementos botones
    var elementButton = document.getElementsByTagName("button");
    //apunto al body
    var elementBody = document.getElementsByTagName("body");

    //Recorro los botones
    for (let i = 0; i < elementButton.length; i++) {
        //Si el valor de uno de los botones, es igual al parametro que se pasa por la funcion se modificara un atributo del elemento body
        if (elementButton[i].value == color) {
            //setAttibute cambia el atributo del elemento
            elementBody[0].setAttribute('style', "background-color: " + color);
        }
    }
}