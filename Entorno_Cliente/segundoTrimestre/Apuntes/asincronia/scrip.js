//Crear el objeto xmlhttprequest

//Siempre en target response
//Los datos se meten automaticamente en la funcion del paso 3
if(window.xmlhttprequest)

window.onload = ()=>{
    document.querySelector("input[type='button']").onclick = ()=>{
        //paso 1: crear objeto xmthttprequest
        let manolito;
        if (window.XMLHttpRequest) {
            manolito = new XMLHttpRequest();
        }
        else{
            manolito = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //PASO 2: crear la peticion de datos
        //Parametros: el verbom la direccion del recurso
        manolito.open('get', 'contenido.txt')

        //paso 3:crear la funcion para manejar los datos que me llegan(se acocia al evento LOAD)
        manolito.addEventListener('load',()=>{
            console.log("estan los datos")
        })

        //paso4: enviar peticion
        manolito.send();

        console.log("soy el ultimo")//Sale el primero al estar haciendo asincronia
    }
}