
/*
El botón para avanzar hará que se muestre la siguiente foto cada vez que se
pulse. Si se llega al final de la lista de imágenes, el botón deja de funcionar.
*/
var contador = 1;
var elemento = document.getElementsByTagName("img");

function avanzar() {
    contador++;
    if (contador == 6) {
        contador = 1;
    }
    elemento[0].src = `./img/goku${contador}.png`;     
}

function retroceder() {
    contador--;
    if (contador < 1) {
        contador = 5; 
    }
    elemento[0].src = `./img/goku${contador}.png`;
}