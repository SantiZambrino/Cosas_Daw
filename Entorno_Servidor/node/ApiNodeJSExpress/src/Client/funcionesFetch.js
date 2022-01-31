export * from 'funcionesFetch.js'
import '/Client/mostrarObjeto.js'

function mostrarDatosUsu(f) {
    const textUsuario = f.textIdUsuario.value;
    console.log({ textUsuario })
    const id = textUsuario;
    const url = `http://localhost:3000/id_usuario?id=${id}`
    console.log('estas dentro')

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => mostrarObjeto(data));
}