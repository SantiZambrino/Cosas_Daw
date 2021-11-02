function mostrarSpoiler() {
    let fingers = document.getElementsByClassName("contenido");
    let anclas = document.getElementsByTagName("a");
    if (anclas[0].textContent == "Mostrar") {
        fingers[0].style.display = "block";
        anclas[0].innerHTML = "Oculto";
    }else{
        fingers[0].style.display = "none";
        anclas[0].innerHTML = "Mostrar";
    }   
}

