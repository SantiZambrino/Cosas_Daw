export{mostrarObjeto, mostrarObjetoVehiculo}

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


function mostrarObjetoVehiculo(data){
    let texto ="";
    console.log({data})
    const div = document.getElementById('contenido')
    // for (const contenido in data) {
    //     if (Array.isArray(data[contenido])) {
    //         console.log('soy un puto array')
    //     }else crearDato(`${contenido}: ${data[contenido]}`, div)
        
    // }
    Object.entries(data).forEach(([key, value]) =>{
        if (Array.isArray(value)){
            console.log(value)
            for (const contenidoArray of value) {
                console.log(contenidoArray.marca)
                Object.entries(contenidoArray).forEach(([key, value]) =>{
                    if (key === 'marca') {
                        texto +=  value;
                        // crearDato((value), div)                
                    }
                    crearDato((`marca: ${texto}`), div) 
                    console.log(`${key}: ${value}`)
                })
            }
        }else{
            crearDato((key, value), div)
        }  
    });
}