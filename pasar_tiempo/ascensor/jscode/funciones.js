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
    let eleccionPlantaUsu;
    let mensaje;
    let recorrerPlantas;
    let estilosPlantas;
    let fondo;
    let contador = 5;
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
    // for (let i = plantasTotales; i > 0; i--) {
    //     plantas = document.createElement('div');

    //     if (i == 1) 
    //     // plantas.style.border = '4px solid black',
    //     plantas.style.setProperty('border', '4px solid black'),
    //     plantas.style.backgroundColor = 'yellow',
    //     spanes = document.getElementsByTagName('span'),
    //     spanes[0].innerHTML = `${i}`,
    //     spanes[1].innerHTML = 'Planta',
    //     botones[0].disabled = false;

    //     plantas.className = 'planta';

    //     nodoTexto = document.createTextNode(i);
    //     plantas.appendChild(nodoTexto);
    //     papi = document.getElementById('ascensor');
    //     papi.appendChild(plantas);
    // }

    for (let i = 0; i < plantasTotales; i++) {
        plantas = document.createElement('div');
        if (i == 4) 
        // plantas.style.border = '4px solid black',
        plantas.style.setProperty('border', '4px solid black'),
        plantas.style.backgroundColor = 'yellow',
        spanes = document.getElementsByTagName('span'),
        spanes[0].innerHTML = `${contador}`,
        spanes[1].innerHTML = 'Planta',
        botones[0].disabled = false;

        plantas.className = 'planta';

        nodoTexto = document.createTextNode(contador);
        plantas.appendChild(nodoTexto);
        papi = document.getElementById('ascensor');
        papi.appendChild(plantas);
        contador--;
    }
    /*
    Si la planta a la que debe ir el ascensor es la misma que la planta en la que está, mostrará un mensaje por pantalla diciendo: Ya estás en esa planta.
    */
    botones[0].onclick = ()=>{
        mensaje = 'Elija la planta a la que quiera ir.';
        mensaje += `\nOpciones desde la 1º planta hasta la ${plantasTotales}º planta: `;
        eleccionPlantaUsu = parseInt(prompt(mensaje));

        if (eleccionPlantaUsu < 1) 
        alert(`La planta ${eleccionPlantaUsu}º no existe ira a la 1º planta`),
        eleccionPlantaUsu = 1;
        else if (eleccionPlantaUsu > plantasTotales)
        alert(`La planta ${eleccionPlantaUsu}º no existe ira a la ${plantasTotales}º planta`),
        eleccionPlantaUsu = plantasTotales;

        // recorrerPlantas = document.getElementsByClassName('planta');
        // estilosPlantas = window.getComputedStyle(recorrerPlantas[eleccionPlantaUsu -1]);
        // fondo = estilosPlantas.getPropertyValue('background-Color');
        // console.log({fondo});
        // if (fondo == "rgb(255, 255, 0)") {
        //     alert ('estas en la misma planta');
        // }
    
        }
    }
