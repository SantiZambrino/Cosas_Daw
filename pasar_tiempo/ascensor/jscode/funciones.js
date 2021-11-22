/*
  Nada más cargar la página se pedirá al usuario el número total de plantas que
  tiene el edificio (entre 1 y 8). Es necesario controlar que ese valor leído es correcto.
  */

window.onload = () => {
    let plantasTotales;
    let plantas;
    let nodoTexto;
    let papi;
    let botones;
    let spanes;
    let eleccionPlantaUsu;
    let mensaje;
    let contenidoPlanta;
    let subir;

    do {
        if (plantasTotales < 1 || plantasTotales > 8)
        alert('ERROR NUMERO SUPERIOR A 8 O INFERIOR A 0');

        plantasTotales = parseInt(prompt("Dime un numero de plantas entre 1 y 8;"))    

    } while (plantasTotales < 1 || plantasTotales > 8);
    // plantasTotales = 5;

    //desabilito los botones
    botones = document.getElementsByTagName('input');
    botones[0].disabled = true;
    botones[1].disabled = true;
    //Creo las plantas con la forma b;
    for (let i = plantasTotales; i > 0; i--) {
        plantas = document.createElement('div');

        if (i == 1)
            // plantas.style.border = '4px solid black',
            plantas.style.setProperty('border', '4px solid black'),
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

    //Muevo el acensor eligiendo a que planta quiero
    botones[0].onclick = () => {
        botones = document.getElementsByTagName('input');
        botones[1].disabled = false;
        mensaje = 'Elija la planta a la que quiera ir.';
        mensaje += `\nOpciones desde la 1º planta hasta la ${plantasTotales}º planta: `;
        eleccionPlantaUsu = parseInt(prompt(mensaje));
        spanes = document.getElementsByTagName('span')[0];
        contenidoPlanta = parseInt(spanes.textContent);
        plantas = document.getElementsByClassName('planta');
        spanes = document.getElementsByTagName('span');

        if (eleccionPlantaUsu < 1)
            alert(`La planta ${eleccionPlantaUsu}º no existe ira a la 1º planta`),
                eleccionPlantaUsu = 1,
                cambiarPlanta(eleccionPlantaUsu);
        else if (eleccionPlantaUsu > plantasTotales)
            alert(`La planta ${eleccionPlantaUsu}º no existe ira a la ${plantasTotales}º planta`),
                eleccionPlantaUsu = plantasTotales,
                cambiarPlanta(eleccionPlantaUsu);
        else if (eleccionPlantaUsu == contenidoPlanta) alert('estas en la misma planta');// idea de Josemi, yo queria compar los colores del backGround;
        else
  
            cambiarPlanta(eleccionPlantaUsu);
            if (contenidoPlanta < eleccionPlantaUsu) {
                console.log('subiendo...');
                for (let i = contenidoPlanta; i <= eleccionPlantaUsu; i++) {
                    let audio = document.getElementsByTagName('audio')[0];
                    audio.play();
                    sleep(1000);
                    console.log(`Planta: ${i}`);
                }
            }
            else if(contenidoPlanta > eleccionPlantaUsu){
                console.log('bajando...');
                for (let i = contenidoPlanta; i >= eleccionPlantaUsu; i--) {
                    let audio = document.getElementsByTagName('audio')[0];
                    audio.play();
                    sleep(1000);
                    console.log(`Planta: ${i}`);
                }
            }
    }

    //Borra las plantas del ascensor
    botones[1].onclick = () =>{
        borrar();
    }

    function cambiarPlanta(eleccionPlantaUsu) {
        spanes = document.getElementsByTagName('span')[0];
        contenidoPlanta = parseInt(spanes.textContent);
        plantas = document.getElementsByClassName('planta');
        spanes = document.getElementsByTagName('span');
        let cantidadP =plantas.length; 
        console.log({cantidadP})
        console.log({contenidoPlanta})
        plantas[plantas.length - contenidoPlanta].style.backgroundColor = 'white',
        plantas[plantas.length - contenidoPlanta].style.border = 'none',
        plantas[plantasTotales - eleccionPlantaUsu].style.setProperty('border', '4px solid black'),
        plantas[plantasTotales - eleccionPlantaUsu].style.backgroundColor = 'yellow',
        spanes[0].innerHTML = eleccionPlantaUsu;
        if (contenidoPlanta < eleccionPlantaUsu) 
        return console.log(`subiendo de la planta ${contenidoPlanta}º a la planta ${eleccionPlantaUsu}`);
        else 
        return console.log(`bajando de la planta ${contenidoPlanta}º a la planta ${eleccionPlantaUsu}`);
    }

    function borrar() {
        spanes = document.getElementsByTagName('span')[0];
        spanes.innerHTML = 'X';
        papi = document.getElementById('ascensor');
        while(papi.firstChild)
        papi.removeChild(papi.firstChild);
        botones[0].disabled = true;
        botones[1].disabled = true;
    }

    /*
    Ejemplo de uso:
	console.log('Descansando...');
  	sleep(2000);
  	console.log('Dos segundos despues');
    */
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
         if ((new Date().getTime() - start) > milliseconds) {
          break;
         }
        }
    }
}
