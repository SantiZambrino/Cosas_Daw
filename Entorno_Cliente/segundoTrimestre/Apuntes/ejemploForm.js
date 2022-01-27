window.onload = ()=>{
    const btn = document.getElementById('btn')

    btn.onclick = (e)=>{
        e.preventDefault//Evitar que el submit envie por defecto
        validar();
    };
    
}

function validar() {
    //Forma mas sencilla(es un coñazo)
    let f = document.getElementById('form');
    let campoTexto = f.name;
    let clave = f.clave;
    let claveRepetida = f.claveRepetida;
    let edad = f.numero;
    let sexo = f.sexo;
    let lista = f.ciudades;
    let check = f.check;
    let edad = f.edad


    // campoTexto.value.trim();
    if ((campoTexto.value == "") ||(campoTexto.value.length == 0)) {
        alert('campo nombre no puede estar vacio');
        campoTexto.focus();
        return;
    }

    if ((clave.value.length < 8)||(clave.value.lenght > 12)) {
        alert('la clave tiene que tener minimo 12 caracteres')
        pass.focus();
        return;
    }

    if (pass.value != claveRepetida.value) {
        alert('un campo esta incorrecto')
        pass.focus();
        return;
    }
    if (campoTexto.value == pass.value) {
        alert('Usuario y contraseña son iguales')
        pass.value = "";//me cargo lo que hay en clave
        pass.focus();
        return;
    }
    if (isNaN(sexo.value)) {//True si no es un numero, False si es un numero
        alert("no es un numero");
        edad.focus()
        return;
    }
    if ((!f.sexo[0].checked)&&(!f.sexo[1].checked)) {
        
    }
    if (lista.selectedIndex == 0) {
        alert("elige una ciudad");
        selected.focus()
        return;
    }
    if (!check.check.check) {
        alert('acepta las condiciones de uso');
        return;
    }
    if ((edad.value<18)||(edad.value>60)) {
        alert('edad incorrecta')
        return;
    }
    f.submit();
}