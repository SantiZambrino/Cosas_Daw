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
    // for (const contenido in data) {
    //     if (Array.isArray(data[contenido])) {
    //         console.log('soy un puto array')
    //     }else crearDato(`${contenido}: ${data[contenido]}`, div)

    // }

    // Mostrar objeto con Object.entries
    // Object.entries(data).forEach(([key, value]) => {
    //     if (Array.isArray(value)) {
    //         console.log(value)
    //         for (const contenidoArray of value) {
    //             console.log(contenidoArray.marca)
    //             Object.entries(contenidoArray).forEach(([key, value]) => {
    //                 if (key === 'marca') {
    //                     texto += " " + value;
    //                     // crearDato((value), div)                
    //                 }
    //                 console.log(`${key}: ${value}`)
    //             })
    //         }
    //         crearDato((`marca: ${texto}`), div)
    //     } else {
    //         crearDato((key, value), div)
    //     }
    // });
    console.log({ data })
    const datosPrueba = Object.getOwnPropertyNames(data)
    console.log({datosPrueba})
    const datos = Object.entries(data);//Meto los objetos en entries
    for (const contenido of datos) {//Lo recorro con el for of
        if (contenido[0] != 'vehiculos') crearDato(contenido, div)//Si es diferente a vehiculos lo muestro
        for (const valor of contenido) {//Recorro contenido
            if (Array.isArray(valor)) {//Miro si hay algun array
                for (const contenido of valor) {texto += " " + contenido.marca;}//recorro el array y busco el contenido de marca
            }
        }
    }
    crearDato((`marca: ${texto}`), div)//Muestro la marca
}