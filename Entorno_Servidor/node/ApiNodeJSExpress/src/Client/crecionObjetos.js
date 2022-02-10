export { mostrarObjeto, mostrarObjetoVehiculo }

function mostrarObjeto(data) {
    const div = document.getElementById('contenido')
    for (const campos of data) {
        for (const contenido in campos) {
            console.log(contenido + " contiene " + campos[contenido])
            if (contenido != 'contrasena' && contenido != 'id_usuario' && contenido != 'id_admin') {
                let texto = `${contenido}: ${campos[contenido]}`;
                crearDato(texto, div)
            }
        }
    }
}


function crearDato(texto, div) {
    const elementoP = document.createElement('p')
    const nodoTexto = document.createTextNode(texto);
    elementoP.appendChild(nodoTexto)
    div.appendChild(elementoP)
}


function mostrarObjetoVehiculo(data) {
    let texto = "";
    // console.log({ data })
    const div = document.getElementById('contenido')
    console.log({data})
    console.log(Object.entries(data))
    for (const contenido of Object.entries(data)) {//Lo recorro con el for of
        if (contenido[0] != 'vehiculos') crearDato(contenido, div)//Si es diferente a vehiculos lo muestro
        for (const valor of contenido) {//Recorro contenido
            if (Array.isArray(valor)) {//Miro si hay algun array
                for (const contenido of valor) {texto += " " + contenido.marca;}//recorro el array y busco el contenido de marca
            }
        }
    }
    crearDato((`marca: ${texto}`), div)//Muestro la marca
}