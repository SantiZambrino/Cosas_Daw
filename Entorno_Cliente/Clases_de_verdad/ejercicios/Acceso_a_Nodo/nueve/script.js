/* 
Repite el ejercicio 5 de esta relación pero esta vez no uses clases (toca directamentetodas las propiedades CSS que necesites).
*/

function cambio() {
    let finger = document.getElementsByTagName("p");

    finger[0].style.backgroundColor = "red";
    finger[0].setAttribute("font-family", "Arial, Helvetica, sans-serif;");
    finger[0].style.color = "#FFF";   
    finger[0].style.setProperty('font-size',' 30px');
}