/*
Cada vez que se pulse el botón
Publicar, se va a crear un div cuyo contenido será el texto del textarea. Nota: maqueta de
manera vistosa los DIV creados
*/

window.onload = ()=>{
    const f = document.forms[0];
    const btn = f.btn;


    btn.onclick=()=>{
        console.log(f.comentario)
        let texto = f.comentario.value;
        console.log(texto)
        publicar(f,texto)
    }
}

/* 
 Haz que sólo se publiquen en el div los 50 primeros caracteres escritos en el textarea

 Limita a que sólo se puedan escribir 100 caracteres en el textarea. Después de los 100
caracteres escritos, no se puede seguir escribiendo. El botón Publicar no debe cambiar
su comportamiento
*/
function publicar(f, texto) {
    const padre = document.querySelector('body');
    let nuevo = document.createElement('div')
    nuevo.className = "divClase";
    let nodoTexto = document.createTextNode(texto);
    nuevo.appendChild(nodoTexto);
    padre.appendChild(nuevo);
}