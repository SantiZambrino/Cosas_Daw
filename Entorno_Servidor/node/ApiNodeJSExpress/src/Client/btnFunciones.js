export{formUsuarios};

function formUsuarios(f, botones) {
    //Creo div
    const nuevoDiv = document.createElement('div')
    nuevoDiv.className = 'divDinamico';
    //Crear span
    const spanes = []
    const nodos =['Obetener usuarios', 'Obtener usuario y Vehiculos', 'Editar Usuarios', 'Insertar Usuario', 'Borrar Usuario']
    for (let i = 0; i < 5; i++) {
         spanes[i] = document.createElement('span')
         spanes[i].appendChild(document.createTextNode(nodos[i]))
         nuevoDiv.appendChild(spanes[i])
    }
    // const span = document.createElement('span')
    // const nodoTexto = document.createTextNode('Obtener Usuario')
    // span.appendChild(nodoTexto) 
    // const spanVehiculos = document.createElement('span')
    // const nodoTextoVehiculo = document.createTextNode('Obtener Usuario y Vehiculo')
    // spanVehiculos.appendChild(nodoTextoVehiculo) 
    //Creo Input text
    // const inputsText = []
    // const names = ['textIdUsuario', 'idUsuarioVehiculo','idUsuarioVehiculo','idUsuarioVehiculo','idUsuarioVehiculo']
    // for (let i = 0; i < 5; i++) {
    //     inputsText[i] = document.createElement( 'input[type="text"],[name = "$"]')
        
    // }
    let nuevoInputText = document.createElement("input")
    nuevoInputText.setAttribute("type", "text")
    nuevoInputText.setAttribute("name", "textIdUsuario")
    nuevoInputText.setAttribute("placeholder", "Introduce tu ID")
    //Creo el text de la info para vehiculo
    let inputTextoVehiculo = nuevoInputText.cloneNode()
    inputTextoVehiculo.setAttribute('name', 'idUsuarioVehiculo')
    //Creo input  enviar
    let nuevoInputBtn = botones.cloneNode()//Clona un botón con un evento
    nuevoInputBtn.className = "";
    nuevoInputBtn.setAttribute("name", "enviar")
    nuevoInputBtn.value = 'Enviar'

    let nuevoInputBtnVehiculo = botones.cloneNode()
    nuevoInputBtnVehiculo.setAttribute("name", "enviarCar")
    nuevoInputBtnVehiculo.value = 'Enviar'

    // nuevoDiv.appendChild(span)
    nuevoDiv.insertBefore(nuevoInputText, spanes[1])
    // nuevoDiv.appendChild(nuevoInputBtn)
    // nuevoDiv.appendChild(spanVehiculos)
    // nuevoDiv.appendChild(inputTextoVehiculo)
    // nuevoDiv.appendChild(nuevoInputBtnVehiculo)
    f.appendChild(nuevoDiv)
 
}

function formVehiculos(f) {
   
}

function formServicios(f) {

}


