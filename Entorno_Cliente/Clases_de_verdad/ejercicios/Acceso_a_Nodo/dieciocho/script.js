var timer;
var salto = 2;
var saltoMeter = 2; 
var sumaMonedas = 1;
var monedaNumero = 0;

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
    var botonProgreso = document.getElementsByTagName("button")[0];
    var moneda = document.getElementsByClassName("monedas")[0];
   
    console.log(barraProgreso.value);
    
    if (barraProgreso.value < barraProgreso.max) {
        barraProgreso.value = salto;
        salto += salto;
    }else {  
        barraProgreso.value = barraProgreso.max;
        monedaNumero = parseInt(moneda.textContent);
        monedaNumero += sumaMonedas;
        moneda.textContent = monedaNumero;
        console.log("valor final: " + barraProgreso.value);
        clearInterval(timer);
        botonProgreso.disabled = false;
        barraProgreso.value = 0;
        salto = 2;
    }

}