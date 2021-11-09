function crear(){
     var nuevo = document.createElement("p");
     nuevo.aling = "center";
        nuevo.className = "nuevaClase";//nuevo.setAttribute('align','center');
     var texto = prompt("Mete texto: ", " ");
     var nodoTexto = document.createTextNode(texto);
        nuevo.appendChild(nodoTexto); //engancha el nodo texto a la etiqueta que estoy crendo
     var papi = document.querySelector("article");
    papi.appendChild(nuevo);    
}