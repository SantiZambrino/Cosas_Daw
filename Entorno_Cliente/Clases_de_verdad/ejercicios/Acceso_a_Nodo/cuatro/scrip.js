
/*
El botón para avanzar hará que se muestre la siguiente foto cada vez que se
pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
*/
var contador = 2;

function avanzar() {

    // let comparador = "./img/goku1.jpg";
    let elemento = document.getElementsByTagName("img");
    elemento[0].src = `./img/goku${contador}.png`;     
    contador++;
    if (contador == 6) {
        contador = 1;
    }
}