function entraImagen(){
    alert("Estoy dentro de la imagen");
    let dedo = document.querySelector("img");
    dedo.src = "../cuatro/img/goku3.png";
}

function saleImagen() {
    alert("estoy fuera");
    let dedo = document.querySelector("img");
    dedo.src = "../cuatro/img/goku1.png";
}