window.onload = () =>{
    let botonMoneda;
    let salto = 25;
    let timer;
    let sumaMonedas = 1;
    let monedaNumero = 0;
   

    botonMoneda = document.getElementsByTagName("input")[0];

    //deshabilito el boton
    botonMoneda.onclick = function () {
        botonMoneda.disabled = true;  
        //intervalo cada segundo
        timer = setInterval(cargar, 1000);      
    }


    function cargar() {

        let barraMeter = document.getElementsByTagName("meter")[0];
        let botonMoneda = document.getElementsByTagName("input")[0];
        let moneda = document.getElementsByTagName("span")[1];
        //Mientras value sea menor que max cargo la barra
        if (barraMeter.value < barraMeter.max) {
            barraMeter.value = salto;
            salto += salto;
        }else {  
            barraMeter.value = barraMeter.max;
            //Sumo monedas cada vez que la barra cargue
            monedaNumero = parseInt(moneda.textContent);
            monedaNumero += sumaMonedas;
            moneda.textContent = monedaNumero;
            //Corto el intervalo
            clearInterval(timer);
            //Reseteo valores
            botonMoneda.disabled = false;
            barraMeter.value = 0;
            salto = 25;
        }
        //Si es igual a 3 creo la imagen 
        if (parseInt(moneda.textContent) == 3) {
            let nuevaImagen = document.createElement('img');
            nuevaImagen.src ="../img/countess.jpg";

            let papi = document.getElementsByTagName("article")[2];
            papi.appendChild(nuevaImagen);
        }
    }
    
}