window.onload =() =>{
   
    const botonLlamar = document.querySelector('button')
    const colgar = document.getElementById('colgar');

    botonLlamar.onclick = aparece;

    colgar.onclick = finLlamada;

}

function aparece() {
    const cuadroLLamada = document.getElementById('consultaMedica');
    cuadroLLamada.style.display = 'flex';
}

function finLlamada() {
    const cuadroLLamada = document.getElementById('consultaMedica');
    cuadroLLamada.style.display = 'noce';
}