window.onload = () =>{
    let inputAniadir = document.getElementsByTagName('input')[0];
    let inputLimpiar = document.getElementsByTagName('input')[1];
    let eleccionFoto;
    let ruta;
    let imgNueva;
    let padre;

    
    inputAniadir.onclick = ()=>{
        //habilito el boton Limpiar
        inputLimpiar.disabled = false;

        eleccionFoto = prompt('Dime la ruta de la foto que quieres: ');
        //Foto por defecto si se deja en blanco
        if (eleccionFoto == "") {
            eleccionFoto = "terra.jpg";
            ruta = "../img/" + eleccionFoto;
        }
        else{
            ruta = "../img/" + eleccionFoto;
        }
       //Creo la imagen 
        imgNueva = document.createElement('img');
        imgNueva.src = ruta;
        imgNueva.className = 'foto';
        //La coloco en el padre
        padre = document.getElementById('contenedor');
        padre.appendChild(imgNueva);
    }
    //Borro los nodos creados mientras haya un primer hijo
    inputLimpiar.onclick = ()=>{
        padre = document.getElementById('contenedor');
        while (padre.firstChild) {
            padre.removeChild(padre.firstChild);
        }
    }
}