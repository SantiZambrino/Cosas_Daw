window.onload = ()=>{
    const f = document.forms[0];
    const btns = document.querySelectorAll("input[type='button']")

    btns.forEach(botones =>{
        botones.onclick= ()=>{
            switch (botones.value) {
                case 'Usuarios':
                    console.log('Hola Usuario')
                    formUsuarios(f,botones)
                    break;
                case 'Vehiculos':
                    console.log('Hola Vehiculos')
                    formVehiculos(f)
                    break;
                case 'Servicios':
                    console.log('Hola Servicios')
                    formServicios(f)
                    break;
                case 'Enviar':
                    console.log('Hola')
                    break;
            }
        }
    })
    // const inputText = document.querySelector('input[type="text"]')
    // const nuevoInputBtn = document.querySelector('input[type="button"]')
    // nuevoInputBtn.onclick = ()=>{
      
    // }
}

function formUsuarios(f,botones) {
    let nuevoInputText = document.createElement("input")
    nuevoInputText.setAttribute("type","text")
    nuevoInputText.setAttribute("placeholder","Introduce tu ID")
  
    // let nuevoInputBtn = document.createElement("input")
    // nuevoInputBtn.setAttribute("type","button")

    let nuevoInputBtn = botones.cloneNode()   
    nuevoInputBtn.value = 'Enviar'
   
    f.appendChild(nuevoInputText)
    f.appendChild(nuevoInputBtn)
    nuevoInputBtn.onclick = ()=>{
        console.log('hola')
    }
}

function formVehiculos(f) {
    
}

function formServicios(f) {
    
}