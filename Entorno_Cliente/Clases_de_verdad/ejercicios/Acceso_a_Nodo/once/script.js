/*
Oculta el segundo DIV usando la propiedad visibility de CSS. Consigueque ese DIV “vuelva a aparecer” sí y solo sí, el cursor del ratón se coloca en el primer DIV.
*/

function abraCadabra() {
    //Apunto al div 2
    var finger = document.getElementById("div2");

    //obtengo la hoja de estilos
    var stilo = window.getComputedStyle(finger);

    //Cambio la propiedad de visibility
    finger.style.visibility = 'hidden';
}

function aparece() {
    var finger = document.getElementById("div2");
    
    var stilo = window.getComputedStyle(finger);

    finger.style.visibility = 'visible';  
 }