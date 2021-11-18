  /*
    Nada más cargar la página se pedirá al usuario el número total de plantas que
    tiene el edificio (entre 1 y 8). Es necesario controlar que ese valor leído es correcto.
    */

window.onload = ()=>{
    let plantasTotales;
    let plantas;
    let nodoTexto;
    let papi;
    let botones;
    let spanes;
    // do {
    //     if (plantasTotales < 1 || plantasTotales > 8)
    //     alert('ERROR NUMERO SUPERIOR A 8 O INFERIOR A 0');

    //     plantasTotales = parseInt(prompt("Dime un numero de plantas entre 1 y 8;"))    
        
    // } while (plantasTotales < 1 || plantasTotales > 8);
    plantasTotales = 5;

   //desabilito los botones
   botones = document.getElementsByTagName('input');
   botones[0].disabled = true;
   botones[1].disabled = true;
   //Creo las plantas con la forma b;
    for (let i = plantasTotales; i > 0; i--) {
        plantas = document.createElement('div');

        if (i == 1) 
        plantas.style.border = '4px solid black',
        plantas.style.backgroundColor = 'yellow',
        spanes = document.getElementsByTagName('span'),
        spanes[0].innerHTML = `${i}`,
        spanes[1].innerHTML = 'Planta',
        botones[0].disabled = false;

        plantas.className = 'planta';

        nodoTexto = document.createTextNode(i);
        plantas.appendChild(nodoTexto);
        papi = document.getElementById('ascensor');
        papi.appendChild(plantas);
    }
    

}