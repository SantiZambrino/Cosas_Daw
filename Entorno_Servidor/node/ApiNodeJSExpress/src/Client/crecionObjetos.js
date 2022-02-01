export{mostrarObjeto}

function mostrarObjeto(data) {
    const div = document.getElementById('contenido')
    for (const campos of data) {
        for (const contenido in campos) {
            console.log(contenido + " contiene " + campos[contenido])
            if (contenido!='contrasena'&& contenido !='id_usuario'&& contenido !='id_admin') {
                let texto = `${contenido}: ${campos[contenido]}`;
                crearDato(texto,div)
            }
        }
    }
}


function crearDato(texto,div) {
    const elementoP = document.createElement('p')
    const nodoTexto = document.createTextNode(texto);
    elementoP.appendChild(nodoTexto)
    div.appendChild(elementoP)
}

