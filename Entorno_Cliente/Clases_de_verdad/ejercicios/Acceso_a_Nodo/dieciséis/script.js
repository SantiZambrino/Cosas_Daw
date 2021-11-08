/*
Usando las funciones setInterval y clearInterval de Javascript. Coloca una etiqueta meter, una etiqueta progress y un botón al lado de cada una. Al pulsar el botón se debe simular la “carga” de la barrita. Muestra un mensaje cuando se alcance elmáximo.

18)
Usa   sólo   el   elemento   progress   y   el   botón   que   se   encarga   de   realizar   el funcionamiento explicado en el ejercicio 16. Cambia el nombre del botón por“Generar moneda”
*/


var timer;
var salto = 2;

window.onload = function () {
    var barraProgreso = document.getElementsByTagName("button")[0];
    var botonMeter = document.getElementsByTagName("button")[1];
    barraProgreso.onclick = function () {
        barraProgreso.disabled = true;
        timer = setInterval("cargar()", 200);

    }
    botonMeter.onclick = function() {
        botonMeter.disabled = true;
        timer = setInterval("descargar()", 200);
    }
}

function cargar() {
    var barraProgreso = document.getElementsByTagName("progress")[0];
    var barraProgresor = document.getElementsByTagName("button")[0];
    console.log(barraProgreso.value);
    if (barraProgreso.value < barraProgreso.max) {
        barraProgreso.value = salto;
        salto += salto;
    }else{
        barraProgreso.value = barraProgreso.max;
        console.log("valor final: " + barraProgreso.value);
        clearInterval(timer);
        barraProgresor.disabled = false;
    }
}

function descargar() {
    var meter = document.getElementsByTagName("meter")[0];
    var botonMeter = document.getElementsByTagName("button")[1];
    if (meter.value > meter.min) {
        meter.value -= saltoMeter;
    } else{
        console.log("valor final: " + meter.value);
        clearInterval(timer);
        botonMeter.disabled = false;
    }
}
