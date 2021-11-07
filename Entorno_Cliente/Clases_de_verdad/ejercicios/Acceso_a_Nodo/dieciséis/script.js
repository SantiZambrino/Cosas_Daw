/*
Usando las funciones setInterval y clearInterval de Javascript. Coloca una etiqueta meter, una etiqueta progress y un botón al lado de cada una. Al pulsar el botón se debe simular la “carga” de la barrita. Muestra un mensaje cuando se alcance elmáximo.
*/


var timer;
var salto = 2;

// cargar.onclick = function() {
    
// }

function cargarBoton() {
    timer = setInterval("cargar()", 200);
}

function cargar() {
    var botonCarga = document.getElementsByTagName("progress")[0]; 
    console.log(botonCarga.max)
    if (salto < botonCarga.max) {
        botonCarga.value = salto;
        salto += salto;
    }        
}