
window.onload = ()=>{
    const form = document.forms[0];

    form.oninput = ()=>{
         form.textoCopiado.value = form.texto.value;   
    }
}

