window.onload=()=>{
    const form = document.forms[0];
    const btnCopiar = document.querySelector("input[type='button']")
    
    console.log(btnCopiar);
    btnCopiar.onclick = ()=>{
        let texto = form.texto.value
        console.log(texto)
        form.textoCopia.value = texto;
    }
}