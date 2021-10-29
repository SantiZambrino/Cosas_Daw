//acceso a propiedades CSS

//Modificar valores
var dedo = document.getElementById("caja");
//Si la propiedad tiene una palabra
dedo.style.width = "700 px";
//Segundo caso si la propiedad es compuesta aplicar Camel Case ej text-aling en css textAlign en el cambio de propiedad en JS
dedo.style.textAlign = "right";
//Cuando tiene valores compuestos tiene que ir en el mismo orden que en el css
dedo.style.border= "2px solid red";
dedo.style.background = "#fa3 'img/foto.jpg' no-repeat"
//otras maneras
dedo.style.setProperty("widht", "700px");
dedo.style.width("700px");

//Mostrar valores
//mirar resert.css y normaliza.css

//consultar valores de la hoja de estilo

//1)
dedo = document.getElementById("caja");

//2)Obtener las propiedades asociadas al elemento
var estilos = window.getComputedStyle(dedo);

//3) Obtiene el valor que quieres y guarda un string en una variable. si se pasa un parseInt y el valor tiene algun px ej "700 px" quita el px y se queda con el 700. La propiedad se pasa de manera correcta, sin camelCase 
var color = estilos.getPropertyValue("color");

//Hacer todos menos el 9
