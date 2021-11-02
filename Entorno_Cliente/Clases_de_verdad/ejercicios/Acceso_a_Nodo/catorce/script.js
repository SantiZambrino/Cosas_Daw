function abrir(num) {
    //apunto a los elementos
    let lista =  document.getElementsByClassName("oculto");
    //Por el parametro que se pasa lo muestro
    lista[num].style.display ="block";

    //Recorro el for si la i es diferente al num cambio el display a oculto
    for (let i = 0; i < lista.length; i++) {
        if (i != num) {
            lista[i].style.display ="none";
        }
    }
}