export function formUsuarios(f, botones) {
    //Creo Input text
    let nuevoInputText = document.createElement("input")
    nuevoInputText.setAttribute("type", "text")
    nuevoInputText.setAttribute("name", "textIdUsuario")
    nuevoInputText.setAttribute("placeholder", "Introduce tu ID")
    //Creo input  enviar
    let nuevoInputBtn = botones.cloneNode()//Clona un botón con un evento
    nuevoInputBtn.setAttribute("name", "enviar")
    nuevoInputBtn.value = 'Enviar'

    f.appendChild(nuevoInputText)
    f.appendChild(nuevoInputBtn)

}

function formVehiculos(f) {

}

function formServicios(f) {

}

