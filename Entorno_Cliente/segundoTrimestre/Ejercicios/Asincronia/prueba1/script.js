window.onload = () => {
  document.querySelector("input[type='button']").onclick = () => {
    this.disabled = true;
    //Creo el objeto XMLHttpRequest
    let aquiVaElObjeto;
    //Comprobamos si se puede crear y si no creamos un ActivObject para navegadores antiguos
    if (window.XMLHttpRequest) aquiVaElObjeto = new XMLHttpRequest();
    else aquiVaElObjeto = new ActiveXObject("Microsoft.XMLHTPP");

    //Paso 2 : creamos la peticion de datos

    aquiVaElObjeto.open("get", "https://jsonplaceholder.typicode.com/users");

    //Crear la funcion para manejar los datos

    aquiVaElObjeto.addEventListener("load", (datos) => {
      let respuesta = JSON.parse(datos.target.response);

      //document.querySelector("input[type='button']").disabled = false;
      console.log(respuesta)
      mostrarObjeto(respuesta[Math.floor(Math.random() * 10)]);
    });

    //Paso 4: enviar

    aquiVaElObjeto.send();
  };
};
 
function mostrarObjeto(res) {
  for (const key in res) {
    //Miro si es objeto
    if(typeof res[key] === 'object'){
        //Si lo es miro si es un array de objetos 
        if(Array.isArray(res[key]))console.log('hola')
        //Eb caso contrario recorro el objeto y lo muestro
        else{
            for(let campoInterno in res[key]){
                if(campoInterno == 'geo'){
                    for(let camposGeo in res[key][campoInterno]){
                        pintarObjeto(`${camposGeo}: ${res[key][campoInterno][camposGeo]}`)
                    }
                }
                else pintarObjeto(`${campoInterno}: ${res[key][campoInterno]}`)
            }
        }
    }
    else if (key != "id") pintarObjeto(`${key}: ${res[key]}`);
  }
}

function pintarObjeto(key) {
  const divPadre = document.querySelector("div");
  const nuevoP = document.createElement("p");
  const nodotexto = document.createTextNode(key);
  nuevoP.appendChild(nodotexto);
  divPadre.appendChild(nuevoP);
}
