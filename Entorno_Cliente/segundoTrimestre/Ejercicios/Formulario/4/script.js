window.onload = ()=>{
    const f = document.forms[0];//Llamo el formulario
    const btn = f.divisa;//boton divisa

    btn.onclick=()=>{
        cambio(f)
    }
}

function cambio(f) {
    let convercion = parseInt(f.dolar.value)* 0.83;
    console.log(convercion)
    f.euro.value = `${convercion}€`;
}