
window.onload = ()=>{
    const form = document.forms[0];

    form.onkeypress = ()=>{
         form.textoCopiado.value = form.texto.value;   
    }
}

