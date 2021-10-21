var dedos; 

//Obtener todos lo elementos de la etiqueta que pasemos por valor.
document.getElementsByTagName("p");

//Obtengo los elementos de una clase.
document.getElementsByClassName("nombreClase");

//Obtengo el elemento por el id. Solo devuelve un elemento
document.getElementById("nombreID");

/*
En rendimiento son mas lentos que los getElement.
*/
//Obtengo el primer elemento que cumpla la condición del selector 
document.querySelector();
//Selecciona todas las clases
document.querySelectorAll();


//primero llego al nodo
<p aling="center" onmouseover="cambia()"></p>
function cambia(){
dedos= document.querySelector("p");
dedos.aling= "right";

//importante
//Devuelve todo lo que haya en el nodo incluso las etiquetas
dedos.innerHTML

//Devuelve solo el texto
dedos.textContent()
}
