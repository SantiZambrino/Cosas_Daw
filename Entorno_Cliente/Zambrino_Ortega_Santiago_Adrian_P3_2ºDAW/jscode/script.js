window.onload = ()=>{
    const f = document.forms[0];
    // const btnEnviar = document.querySelector("input[type='submit']")
    // console.log(btnEnviar)


    for (const contenido of f) {
        if (contenido.value == 'Enviar') {
            console.log(contenido);
            contenido.onclick = (e)=>{
                e.preventDefault()
                validar(f);
            } 
        }
        //La longitud mínima de la clave debe ser de 8 caracteres.
    }
}

function validar(f) {
    const campoRepetido = document.querySelectorAll('input[type="password"]')[1]// contraseña repetida
    const campoNick = document.querySelectorAll('input[type="text"]')[0];
    const captcha = document.querySelectorAll('input[type="text"]')
    const condicionesUso = document.querySelector('input[type="checkbox"]')

    localStorage.nick = campoNick.value
    localStorage.pass = campoRepetido.value
    localStorage.email = f.email.value
    console.log("soy el local"+localStorage.nick)
    console.log("soy el local"+localStorage.pass)


    if (f.pregunta.value == 0) {
        alert('elige una pregunta')
        f.pregunta.focus()
        return;
    }
    console.log(campoNick.value)
    if ((f.respuesta.value.length != 6)) {
        alert('debe ser de 6 caracteres')
        f.respuesta.focus()
        return;
    }
    if (!f.sexo[0].checked && !(f.sexo[1].checked)) {
        alert('marca un boton')
        return
    }
    if (isNaN(f.edad.value)) {
       alert('introduce un numero')
       f.edad.focus()
       return  false;
    }
    if ((f.edad.value > 99) || (f.edad.value < 3)) {
        alert('rango entre 3 y 99')
        f.edad.focus()
        return
     }
     localStorage.edad = f.edad.value;
    if (captcha[captcha.length-1].value != 'NJFDD') {
        alert('captcha incorreto')
        captcha[captcha.length-1].focus()
        return
    }
    if (!condicionesUso.checked) {
        alert('Debes marcar el cheacked')
        // condicionesUso.focus()
        return
    }
  
    for (const contenido of f) {
        console.log({contenido})
        if (contenido.type == 'text') {
            //Todos los campos de texto son obligatorios
            // console.log('soy un texto')
            if ((contenido.value == "")||(contenido.value.lenght == 0)) {
                // console.log('estoy vacio por dentro')
                alert('los campos texto no pueden estar vacios')
                contenido.focus()
                return;
            }
            // if (contenido.value == campoNick.value) {
            //     localStorage.nick = contenido.value;
            //     console.log("soy el local"+localStorage.nick)
            // }
        }
        if (contenido.type == 'password') {
            if (contenido.value.length < 8){
                alert('debe tener mas de 8 caracteres')
                return;
            }
            //El campo clave debe coincidir con el campo donde se repite la clave
            else if(contenido.value == campoNick.value){
                alert('no puede llamarse igual que el nick')
                contenido.focus()
                return
            }
            else if (contenido.value != campoRepetido.value) {//Si la contraseña es diferente al repetirse entra en la condicion
                alert('campoIncorrecto')
                contenido.value = "";
                campoRepetido.value = "";
                contenido.focus()
                return;
            }
        }
        /**
         * El campo donde se indican la pregunta debe tener seleccionada alguna opción de su lista que no sea la primera.
         */


    }
    const usuario = {
        nick: localStorage.nick,
        pass: localStorage.pass,
        edad:  localStorage.edad,
        email: localStorage.email,

    }
    localStorage.datos = JSON.stringify(usuario)
    f.submit();
}

