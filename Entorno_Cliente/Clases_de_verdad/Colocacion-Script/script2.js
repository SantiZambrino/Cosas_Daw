var timer;
var numero = 0;

//Poner un limite al borde
//Ejer de progra el 16,18,17

window.onload = function() {
    //funciona en ebra. Puede seguir ejecuntando el resto del codigo por eso lee la variable 0
    timer = setInterval("mover()", 30/1000);
    // numero = 0;
}

function mover() {
     var dedo = document.getElementsByTagName('div')[0];
     var contenidoTotal = dedo.offsetWidth;
     var salto = 5;
 
     if ((numero + contenidoTotal) < (window.innerWidth - salto)) {
            dedo.style.left = numero +'px';
            numero += 5;
            console.log(numero+contenidoTotal)
      } 
}

function mover2() {
    var salto = 5;
    var dedo = document.querySelector("div");
    var estilo = window.getComputedStyle(dedo);
    var actual = parseInt(estilo.getPropertyValue("left"));
    var ancho = parseInt(estilo.getPropertyValue('width'));
    var borde =  parseInt(estilo.getPropertyValue('border'));
    var pading =  parseInt(estilo.getPropertyValue('padding'));
    var margin =  parseInt(estilo.getPropertyValue('margin'));
    actual += salto;
    if (actual < window.outerWidth - (ancho + borde + pading + margin)) {
        dedo.style.left = actual +"px";   
    }
}

function mostrarDatos(params) {
    var dedo = document.getElementsByTagName('div')[0];
    console.log(dedo.offsetWidth); 
    console.log(dedo.offsetHeight); 
    console.log(dedo.clientHeight); 
    console.log(dedo.clientWidth); 
}

//BOM modelo de objetos del navegador.

//Objeto Screen: me da info de la pantalla del dispositivo


// console.log(screen.width); 

// console.log(screen.availWidth); 

// console.log(screen.height); 

//No cuenta las barras del sistema operativo
// console.log(screen.availHeight); 

//Profundidad de colores que se representa en la pantalla;
// console.log(screen.colorDepth);


//Objeto Windows: hace referencia a la ventana del navegador

//Tamaño en anchura de la ventana del navegador

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(dedo.offset);

//pading y margin
// console.log(dedo.offsetWidth); 
// console.log(dedo.offsetHeight);

// console.log(dedo.clientHeight); 
// console.log(dedo.clientWidth); 