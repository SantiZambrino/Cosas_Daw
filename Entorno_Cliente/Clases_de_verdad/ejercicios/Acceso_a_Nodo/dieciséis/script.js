/*
Usando las funciones setInterval y clearInterval de Javascript. Coloca una etiqueta meter, una etiqueta progress y un botón al lado de cada una. Al pulsar el botón se debe simular la “carga” de la barrita. Muestra un mensaje cuando se alcance elmáximo.
*/


var timer;
var salto = 2;
var saltoMeter = 2; 

window.onload = function () {
    var botonCarga = document.getElementsByTagName("button")[0];
    var botonMeter = document.getElementsByTagName("button")[1];
    botonCarga.onclick = function () {
        timer = setInterval("cargar()", 200);
    }
    botonMeter.onclick = function() {
        timer = setInterval("descargar()", 200);
    }
}

function cargar() {
    var botonCarga = document.getElementsByTagName("progress")[0];
    console.log(botonCarga.value);
    if (botonCarga.value < botonCarga.max) {
        botonCarga.value = salto;
        salto += salto;
    }else{
        botonCarga.value = botonCarga.max;
        console.log("valor final: " + botonCarga.value);
        clearInterval(timer);
    }
}

function descargar() {
    var meter = document.getElementsByTagName("meter")[0];
    if (meter.value > meter.min) {
        meter.value -= saltoMeter;
    } else{
        console.log("valor final: " + meter.value);
        clearInterval(timer);
    }
}
