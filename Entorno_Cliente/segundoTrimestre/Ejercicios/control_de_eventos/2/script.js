window.onload = ()=>{

    const divTexto = document.querySelectorAll('div')[0];
    const divAbajo = document.querySelectorAll('div')[1];
    const takeTheBody = document.body
    let elementoP = document.createElement('p');
    let elementoP2 = document.createElement('p');
    crear(divTexto,elementoP,elementoP2);

    takeTheBody.addEventListener('mousemove',(event)=>{
        let x = event.offsetX;
        let  y= event.offsetY;
        // console.log({x})
        // console.log({y})
        elementoP.textContent = `eje X: ${x}`
        elementoP2.textContent = `eje X: ${y}`
    })

    divAbajo.addEventListener('mousedown',(event)=>{
        // event.defaultPrevented
        let btn = event.button//tiene mas soporte de navegadores    
        console.log({btn})
        textoAbajo()
    })
    //Este Listener con el evento contexmenu y el prevent default quitan el menu del raton derecho
    divAbajo.addEventListener('contextmenu',(event)=>{
        event.preventDefault()
    })
}

function crear(divTexto,elementoP,elementoP2) {
    let texto = document.createTextNode(`eje X: 0`)
    let texto2 = document.createTextNode(`eje Y: 0`)
    elementoP.appendChild(texto)
    elementoP2.appendChild(texto2)
    divTexto.appendChild(elementoP)
    divTexto.appendChild(elementoP2)
}

function textoAbajo() {
    //Mirar si hay un first child. SI lo hay borrarlo
    //Crear uno nuevo y mostrar el mensaje
}  