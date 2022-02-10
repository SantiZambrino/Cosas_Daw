window.onload= () =>{
    document.querySelector("input[type='button']").onclick = ()=>{
        this.disabled = true;

        //Paso 1: crear el objeto XMLHttpRequest
        let aquiVaElObjeto; 
        if(window.XMLHttpRequest){
            aquiVaElObjeto = new XMLHttpRequest();
        }
        else{
            aquiVaElObjeto = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Paso 2: crear la peticion de datos
        aquiVaElObjeto.open('GET',"https://randomuser.me/api");

        //Paso 3: crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
        aquiVaElObjeto.addEventListener('load',function(datos){
            let data = JSON.parse(datos.target.response);
            mostrarObjeto(data);
        });

        //Paso 4: enviar la peticion
        aquiVaElObjeto.send();
    }
}


function mostrarObjeto(data) {
    //Deconstruye el objeto en una matriz
    for (const valor of Object.entries(data)) {
        if(Array.isArray(valor[1])){//Comprueba si valor[1] es un array
            for (const dato of valor[1]) {
                pintarObjeto(dato);//Creo el objeto
            }
        }
    }
}

function pintarObjeto(dato){
    const divPadre = document.querySelector('div');
    const articleCreado = document.createElement('article')
    articleCreado.className = 'usuario';
    const nuevoP = document.createElement('p');
    const nuevoP2 = document.createElement('p');
    const nuevoP3 = document.createElement('p');
    const imagen = document.createElement('img');

    const nombre = document.createTextNode(`nombre: ${dato.name.first} \n`)
    const apellido = document.createTextNode(`apellido: ${dato.name.last} \n`)
    const edad = document.createTextNode(`edad: ${dato.dob.age} años \n`)
    imagen.src= dato.picture.medium;
 

    nuevoP.appendChild(nombre)
    nuevoP2.appendChild(apellido)
    nuevoP3.appendChild(edad)

    articleCreado.appendChild(nuevoP)
    articleCreado.appendChild(nuevoP2)
    articleCreado.appendChild(nuevoP3)
    articleCreado.appendChild(imagen)
 
    divPadre.appendChild(articleCreado)
}