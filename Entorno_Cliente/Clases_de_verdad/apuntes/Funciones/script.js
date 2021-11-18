function pulsar() {
    var dedo = document.querySelector('p');
    dedo.onclick = cambiar;//Quito los parentesis para que ejecute el codigo dentro de cambiar(), si dejo el parentisis lo hace sin llamarlo;
    console.log({dedo});
}

function cambiar() {
    var dedo = document.querySelector("p");
    dedo.style.backgroundColor = 'blue';
    dedo.style.fontSize = '1.5';
}