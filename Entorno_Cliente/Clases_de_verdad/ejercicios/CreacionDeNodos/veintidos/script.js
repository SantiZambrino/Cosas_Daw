window.onload = function() {

    var elementoIMG = document.getElementsByTagName('img')[0];
    var divNuevo = document.createElement('div');
    var altoPantalla = parseInt(window.innerHeight);
    var anchoPantalla = parseInt(window.innerWidth);  
    var papi = document.body;
   

    divNuevo.style.setProperty('height', altoPantalla+'px');
    divNuevo.style.setProperty('width',  anchoPantalla+'px');
    divNuevo.style.setProperty('background-color', 'gray');
    divNuevo.style.setProperty('opacity', '0.7');
    divNuevo.style.setProperty('position', 'absolute');
    divNuevo.style.setProperty('top', '0');
    divNuevo.style.setProperty('left', '0');
    
    var imagenDiv = document.createElement('img');
    imagenDiv.src = "../veintidos/sunset-1373171.jpg";
    imagenDiv.style.setProperty('width', '1000px');

    // console.log({anchoImagen});
   
    imagenDiv.style.setProperty('height', '500px');
    imagenDiv.style.setProperty('position', 'relative');  
    imagenDiv.style.setProperty('top', '200px');
  
    elementoIMG.style.setProperty('position', 'absolute');
    elementoIMG.style.setProperty('top', '10px');
    elementoIMG.style.setProperty('left', '10px');



    elementoIMG.onclick = function() {
        papi.appendChild(divNuevo);
        papi.appendChild(imagenDiv);
        var anchoImagen = imagenDiv.offsetWidth;
        var mitadPantalla = (anchoPantalla / 2) - (anchoImagen/2);
        imagenDiv.style.setProperty('left', mitadPantalla+'px');
        console.log({anchoImagen});
    }

    divNuevo.onclick = function() {
        papi.removeChild(divNuevo);
        // papi.removeChild(imagenDiv);
        imagenDiv.parentNode.removeChild(imagenDiv);
    }

}