export{formUsuarios};

function formUsuarios(f, botones) {
    //Creo div
    const nuevoDiv = document.createElement('div')
    nuevoDiv.className = 'divDinamico';
    //Creo details
    const details = []
    //Crear span
    const spanes = []
    const nodos =['Obetener usuarios', 'Obtener usuario y Vehiculos', 'Editar Usuarios', 'Insertar Usuario', 'Borrar Usuario']
    for (let i = 0; i < 5; i++) {
         details[i] = document.createElement('details')
         spanes[i] = document.createElement('summary')
         spanes[i].appendChild(document.createTextNode(nodos[i]))
         details[i].appendChild(spanes[i])
         nuevoDiv.appendChild(details[i])
    }

    
    let nuevoInputText = document.createElement("input")
    nuevoInputText.setAttribute("type", "text")
    nuevoInputText.setAttribute("name", "textIdUsuario")
    nuevoInputText.setAttribute("placeholder", "Introduce tu ID")

    //Creo input  enviar
    const nuevoInputBtn = botones.cloneNode()//Clona un botón con un evento
    nuevoInputBtn.className = "";
    nuevoInputBtn.setAttribute("name", "enviar")
    nuevoInputBtn.value = 'Obtener Usuario'
    details[0].appendChild(nuevoInputText)
    details[0].appendChild(nuevoInputBtn)
    


    //Creo el text de la info para vehiculo
    const inputTextoVehiculo = nuevoInputText.cloneNode()
    inputTextoVehiculo.setAttribute('name', 'idUsuarioVehiculo')

    const nuevoInputBtnVehiculo = botones.cloneNode()
    nuevoInputBtnVehiculo.className = "";
    nuevoInputBtnVehiculo.setAttribute("name", "enviarCar")
    nuevoInputBtnVehiculo.value = 'Obtener Usuario y sus vehiculos'
    details[1].appendChild(inputTextoVehiculo);
    details[1].appendChild(nuevoInputBtnVehiculo)

    //Creo los inputs de editar
    const edits = ['dni', 'name', 'apellido', 'id']
    const editInputs= []
    for (let i = 0; i < edits.length; i++) {
        editInputs[i] = document.createElement('input')
        editInputs[i].setAttribute("type", 'text')
        editInputs[i].setAttribute("name", `edit${edits[i]}`)
        editInputs[i].setAttribute("placeholder", `Introduce tu ${edits[i]}`)
        // nuevoDiv.insertBefore(editInputs[i], spanes[3]);
        details[2].appendChild(editInputs[i]);
    }
    const btnEditar = botones.cloneNode()
    btnEditar.className = "";
    btnEditar.setAttribute("name", "Editar_Usu")
    btnEditar.value = 'Editar'
    details[2].appendChild(btnEditar)

    //Creo inputs de insertar
    const ides= ['nombre', 'apellidos', 'dni', 'telefono', 'email','pass','id_admin']
    const input = []
    for (let i = 0; i < ides.length; i++) {
       input[i] = document.createElement("input")
       input[i].setAttribute("type", `text`)
       input[i].setAttribute("name", `${ides[i]}`)
       input[i].setAttribute("placeholder", `Introduce tu ${ides[i]}`)
    //    nuevoDiv.insertBefore(input[i], spanes[4]);
       details[3].appendChild(input[i]);
    }
    const btnInsertar = botones.cloneNode()
    btnInsertar.className = "";
    btnInsertar.setAttribute("name", "Insertar Usuario")
    btnInsertar.value = 'Insertar'
    details[3].appendChild(btnInsertar)


    //Creo los campos para borrar
    const inputBorrar = document.createElement('input')
    inputBorrar.setAttribute('type', 'text')
    inputBorrar.setAttribute('name', 'campoBorrar')
    inputBorrar.setAttribute('placeholder', 'Introduce tu id')
    details[4].appendChild(inputBorrar)

    const btnBorrar = botones.cloneNode()
    btnBorrar.className = "";
    btnBorrar.setAttribute("name", "Borrar_Usuario")
    btnBorrar.value = 'BorrarUsu'
    details[4].appendChild(btnBorrar)
   
  
    f.appendChild(nuevoDiv)
 
}

function formVehiculos(f) {
   
}

function formServicios(f) {

}


