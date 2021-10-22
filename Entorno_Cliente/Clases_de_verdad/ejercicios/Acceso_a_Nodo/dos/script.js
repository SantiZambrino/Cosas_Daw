/*El primero muestra los valores de anchura y altura de la tabla, pide unos valores
nuevos para cada propiedad y los aplica a la tabla. ¿se aplican correctamente los
valores? ¿Falla alguno?*/

function medir() {
    
    //elements devuelve un array
    let elemento = document.getElementsByTagName("table");
    //El atributo que se pasa, hay que ponerlo entre comillas

    let ancho = elemento[0].getAttribute("width");
    console.log(ancho);
    let alto = elemento[0].getAttribute("height");

    let mensaje = `el ancho es ${ancho} y el alto es ${alto}`;
    console.log(mensaje)

    let nuevaAnchura = parseInt(prompt("Dime una nueva Anchura."));
    let nuevaAltura = parseInt(prompt("Dime una nueva Altura."));

    elemento[0] = elemento[0].setAttribute('height', nuevaAnchura);
    elemento[0].width = nuevaAnchura;
    
}
/*
El segundo muestra el valor actual del borde de la tabla y solicita un valor nuevo
para aplicarlo. ¿Funciona correctamente el nuevo valor?
*/
function borde() {
    let elemento = document.querySelector("table");
    console.log(elemento.border);
    let nuevoValor = parseInt(prompt("Dime un nuevo valor"));
    elemento.border = nuevoValor;
    console.log(elemento.border)
}

/*
El tercer botón va cambiar la alineación de la tabla cada vez que se pulse. Es
decir, si la tabla está alineada al centro, al pulsar el botón, la tabla quedará
alineada a la derecha. Si se pulsa el botón otra vez, se alineará a la izquierda y si
vuelvo a pulsarlo, la tabla se pondrá en el centro.
*/
function alinea() {
    let elemento = document.querySelector("table");
    if (elemento.align == "center") {
        elemento.align = "right";
    } else if (elemento.align == "right") {
        elemento.align = "left";
    } else if(elemento.align == "left"){
        elemento.align = "center";
    }
}