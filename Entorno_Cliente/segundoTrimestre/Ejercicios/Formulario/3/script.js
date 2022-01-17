window.onload = () =>{
    const btn = document.querySelector("input[type='button']")

    btn.onclick = aficiones;
}

function aficiones() {
    const casillas = document.getElementsByTagName("input[type='cheackbox]");
    const label = document.getElementsByTagName('label');
    const hoja = document.getElementsByTagName('textarea')[0];
    let texto ='';

    for (let i = 0; i < casillas.length; i++) {
        if (casillas[i].checked) {
            texto += label[i].value;
        }
    }

    hoja.textContent = texto;
}