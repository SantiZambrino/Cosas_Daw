/* 
Al pasar por encima de alguno de esos DIVs, el color de fondo de la página debe cambiar al color que tenga el DIV sobre el que está el cursor del ratón.
*/

function cambioColor1() {
    let finger1 = document.getElementById("uno");
    let fingerBody = document.getElementsByTagName("body");
    //Obtiene la hoja de estilos del css
    let estilo1 = window.getComputedStyle(finger1);
    estilo1 = estilo1.getPropertyValue('background-color')

    fingerBody[0].style.backgroundColor = estilo1; 
}

function cambioColor2() {
    let finger2 = document.getElementById("dos");
    let fingerBody = document.getElementsByTagName("body");
    let estilo2 = window.getComputedStyle(finger2);
    estilo2 = estilo2.getPropertyValue('background-color');
    fingerBody[0].style.backgroundColor = estilo2; 
}

function cambioColor3() {
    let finger = document.getElementById("tres");
    let fingerBody = document.getElementsByTagName("body");
    let estilo2 = window.getComputedStyle(finger);
    estilo2 = estilo2.getPropertyValue('background-color');
    fingerBody[0].style.backgroundColor = estilo2;
}

/*
Añade el código necesario para que el color de la página vuelva a su colororiginal si el cursor del ratón no está encima de ninguno de los DIVs del ejercicio.
*/
function colorOriginal() {
    let fingerBody = document.getElementsByTagName("body");
    fingerBody[0].style.setProperty('background-color','white');
}