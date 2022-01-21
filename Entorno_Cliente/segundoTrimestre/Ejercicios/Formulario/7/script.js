/*
Cada vez que se pulse el botón
Publicar, se va a crear un div cuyo contenido será el texto del textarea. Nota: maqueta de
manera vistosa los DIV creados
*/

window.onload = ()=>{
    const f = document.forms[0];
    const btn = f.btn;
    const textArea = f.comentario;


    btn.onclick=()=>{
        let texto = f.comentario.value;
        publicar(f,texto)
    }

    //Si al pulsar la tecla mas de 100 veces deja de escribir en el text area
    textArea.onkeypress=()=>{
        if(f.comentario.value.length < 100) return true;
        else return false;
    }
}

/* 
 Haz que sólo se publiquen en el div los 50 primeros caracteres escritos en el textarea

 Limita a que sólo se puedan escribir 100 caracteres en el textarea. Después de los 100
caracteres escritos, no se puede seguir escribiendo. El botón Publicar no debe cambiar
su comportamiento
*/
function publicar(f, texto) {
    console.log(texto.length)
    //limitar a 50 caracteres
    let nuevoTexto = ""
    let cantidadLetras = 0;
    for (const letra of texto) {
        if (cantidadLetras < 50) {
           nuevoTexto += letra;
        }
        cantidadLetras++;
    }
    console.log(nuevoTexto.length)
    // console.log({nuevoTexto});
    const padre = document.querySelector('body');
    let nuevo = document.createElement('div')
    nuevo.className = "divClase";
    let nodoTexto = document.createTextNode(texto);// texto codigo normal, nuevoTexto limitado a 50
    nuevo.appendChild(nodoTexto);
    padre.appendChild(nuevo);
}