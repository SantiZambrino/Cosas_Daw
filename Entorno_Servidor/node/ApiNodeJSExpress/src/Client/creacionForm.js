import { formUsuarios } from './btnFunciones.js';
import {mostrarDatosUsu, mostrarDatosUsuyCar} from './funcionesFetch.js'

window.onload = () => {
    const f = document.forms[0];
    const btns = document.querySelectorAll("input[type='button']")

    btns.forEach(botones => {
        botones.onclick = () => {
            switch (botones.value) {
                case 'Usuarios':
                    if (f.enviar && f.textIdUsuario) f.removeChild(f.enviar), f.removeChild(f.textIdUsuario)
                    formUsuarios(f, botones)
                    //Capturo el boton enviar y el text 
                    const btnEnviar = f.enviar;
                    btnEnviar.addEventListener('click', (e) => {e.stopPropagation(), mostrarDatosUsu(f)})
                    f.enviarCar.addEventListener('click', (e) => {e.stopPropagation(), mostrarDatosUsuyCar(f)})
                    break;
                case 'Vehiculos':
                    formVehiculos(f)
                    break;
                case 'Servicios':
                    formServicios(f)
                    break;
                case 'Enviar':
                    break;
            }
        }
    })
}
