window.onload = function() {

    var elementoIMG = document.getElementsByTagName('img')[0];
    var divNuevo = document.createElement('div');
    var altoPantalla = parseInt(window.innerHeight);
    var anchoPantalla = parseInt(window.innerWidth);    
    var anchoImagen = elementoIMG.offsetWidth ;
    var mitadPantalla = (anchoPantalla / 2);
    mitadPantalla -= anchoImagen;

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
    imagenDiv.style.setProperty('height', '500px');
    imagenDiv.style.setProperty('position', 'relative');
    imagenDiv.style.setProperty('left', mitadPantalla+'px');
    imagenDiv.style.setProperty('top', '200px');
    var papi = document.body;

    elementoIMG.style.setProperty('position', 'absolute');
    elementoIMG.style.setProperty('top', '10px');
    elementoIMG.style.setProperty('left', '10px');
    


    elementoIMG.onclick = function() {
        // elementoIMG.style.setProperty('display','none');
        papi.appendChild(divNuevo);
        papi.appendChild(imagenDiv);
    }

    imagenDiv.onclick = function() {
        papi.removeChild(divNuevo);
        papi.removeChild(imagenDiv);
    }

}