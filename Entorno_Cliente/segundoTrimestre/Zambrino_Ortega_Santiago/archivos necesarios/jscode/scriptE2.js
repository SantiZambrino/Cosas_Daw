window.onload = ()=>{
    //Apartado A
    document.querySelector("input[type='button']").onclick = function(){
      

        //Paso 1: crear el objeto XMLHttpRequest
        let objeto; 
        if(window.XMLHttpRequest){
            objeto = new XMLHttpRequest();
        }
        else{
            objeto = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Paso 2: crear la peticion de datos
        objeto.open('GET',"http://www.jaimeweb.es/medac/datos.json");

        //Paso 3: crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
        objeto.addEventListener('load',function(datos){
            let data = JSON.parse(datos.target.response);

            mostrarObjeto(data);
            
        });

        //Paso 4: enviar la peticion
        objeto.send();

    }
}

function mostrarObjeto(data) {
    let texto = '';
    for (const valor of Object.entries(data)) {
        //Apartado B
        console.log(valor[1]) 
        //Apartado C
        for (const value in valor[1]) {
            texto += ` ${valor[1][value]} \n`
        }  
    }
    console.log(texto)
}