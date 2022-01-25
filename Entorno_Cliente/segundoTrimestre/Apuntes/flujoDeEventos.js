//Fase burbuja: va del mas especifico al mas generico por defecto se ejecuta esta fase
/**
 si tengo un div,p,b con un evento empieza ejecutandose por el b hacia el mas generico
 */


 //Fase captura o flujo de captura: va del mas generico al mas especifico

/**
  Cuando hay mezcla se ejectua primero todos los de captura segundo todos los de burbuja
*/

/**formas de asociar eventos
 * 1)mediante atributos HTML
    <p onclick="mostrar()">
 * 2) llamando en el JS
    let dedo = d.qs('p')
    dedo.onclick = ()=>{
    }
 * 3) addEventListener asocia eventos a un objeto del arbol dom y removeEventListener quita eventos asociados a ese objeto
    listeners:
    var dedo = d.qs('p')
 */
var dedo = document.querySelector('p');

dedo.addEventListener('click',()=>{
    alert('hola')
},true);//El ultimo parametro sirve para indicar a que flujo de evento pertenece si pongo false o nada es burbuja y si pongo true es captura
dedo.addEventListener('click',()=>{
    alert('soy diferente')
},true);//ahora no se machacan se cumple una y luego la otra, ventaje puedo tocar en que flujo de evento va,2 puedo añadir funcionalidad al mismo evento sin perder el anterior

//Si quiero cargarme una funcion
dedo.removeEventListener('click',()=>{
    alert("hola");
})//En estos casos es mejo nombrar las funciones en una variable para removerlo mas facil 


//Objeto event
//Cuando esta funcion este manejando un evento automaticamente sin decir nada se carga el objeto event que me permite mirar informacion del evento normalmete se usa un e
dedo.onkeydown = function(nala){
    nala.altkey
    nala.ctrlKey
    nala.stopPropagation();//Para la propagacion de eventos o sea para su flujo. Solo ejecutaria ese
    nala.charCode //Que tecla se ha tocado
    nala.buttons// que click del raton se ha pulsado UTILIZAR CON EVENTOS DE RATÓN
};
dedo.addEventListener()
