//La unica que Jaime deja poner global
var timer;
//window onload carga el JS despues de cargar la pagina
window.onload = function () {
   timer = setInterval("mover()", 1000);
}

function mover() {
     //Estas variables no son globales solo existen dentro de la funcion anonima
     var dedo = document.getElementsByTagName('div')[0];
     var numero = parseInt(Math.floor(Math.random()* 1900)+1);
     dedo.style.left = numero +'px';    
     var numeroVertical = parseInt(Math.floor(Math.random()* 1000)+1);
     dedo.style.top = numero + 'px';
}

function parar() {
    clearInterval(timer);
}

function reanudar() {
    timer = setInterval("mover()", 1000);
}

function mostrarDatos(params) {
    var dedo = document.getElementsByTagName('div')[0];
    console.log(dedo.offsetWidth); 
    console.log(dedo.offsetHeight); 
    console.log(dedo.clientHeight); 
    console.log(dedo.clientWidth); 
}
