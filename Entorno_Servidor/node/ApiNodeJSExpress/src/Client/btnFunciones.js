export{formUsuarios};

function formUsuarios(f, botones) {
    //Creo div
    const nuevoDiv = document.createElement('div')
    nuevoDiv.className = 'divDinamico';
    //Crear span
    const span = document.createElement('span')
    const nodoTexto = document.createTextNode('Obtener Usuario')
    span.appendChild(nodoTexto) 
    const spanVehiculos = document.createElement('span')
    const nodoTextoVehiculo = document.createTextNode('Obtener Usuario y Vehiculo')
    spanVehiculos.appendChild(nodoTextoVehiculo) 
    //Creo Input text
    let nuevoInputText = document.createElement("input")
    nuevoInputText.setAttribute("type", "text")
    nuevoInputText.setAttribute("name", "textIdUsuario")
    nuevoInputText.setAttribute("placeholder", "Introduce tu ID")
    let inputTextoVehiculo = nuevoInputText.cloneNode()
    //Creo input  enviar
    let nuevoInputBtn = botones.cloneNode()//Clona un botón con un evento
    nuevoInputBtn.setAttribute("name", "enviar")
    nuevoInputBtn.value = 'Enviar'

    let nuevoInputBtnVehiculo = botones.cloneNode()
    nuevoInputBtnVehiculo.setAttribute("name", "enviarCar")
    nuevoInputBtnVehiculo.value = 'Enviar'

    nuevoDiv.appendChild(span)
    nuevoDiv.appendChild(nuevoInputText)
    nuevoDiv.appendChild(nuevoInputBtn)
    nuevoDiv.appendChild(spanVehiculos)
    nuevoDiv.appendChild(inputTextoVehiculo)
    nuevoDiv.appendChild(nuevoInputBtnVehiculo)
    f.appendChild(nuevoDiv)
 
}

function formVehiculos(f) {

}

function formServicios(f) {

}


