window.onload = () =>{
    const form = document.forms[0];
    const btn = form.btn;

    btn.onclick = ()=>{
        const casillas = document.querySelectorAll("input[type='checkbox']");
        const hoja = document.getElementsByTagName('textarea')[0];
        let texto ='';
    
        // console.log(form.tenis.checked);
        // for (let i = 0; i < casillas.length; i++) {
        //    if (casillas[i].checked) {
        //        console.log('hola')
        //        texto += casillas[i].value;
        //    }
        // }
        // console.log('hola')
        casillas.forEach(item => {
            if (item.checked) console.log('hola');
        });
    
        form.hoja.value = texto;
    };
}
