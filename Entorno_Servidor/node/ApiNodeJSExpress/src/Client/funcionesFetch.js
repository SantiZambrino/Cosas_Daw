import {mostrarObjeto, mostrarObjetoVehiculo} from './crecionObjetos.js'
export {mostrarDatosUsu, mostrarDatosUsuyCar}

function mostrarDatosUsu(f) {
    const textUsuario = f.textIdUsuario.value;
    console.log({ textUsuario })
    const id = textUsuario;
    console.log({id})
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
        .then(data => mostrarObjeto(data))
        .catch(err => console.error({err}));
}

function mostrarDatosUsuyCar(f) {
    console.log('te voy a mostar el usuario y sus coches')
    const textUsuario = f.idUsuarioVehiculo.value;
    console.log({ textUsuario })
    const id = textUsuario;
    const url = `http://localhost:3000/infoUsuVehiculo?id_usuario=${id}`
    console.log('estas dentro')

    fetch(url, {
        method: 'Post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //Por post las cosas se pasan por el body
        body: JSON.stringify({
            id_usuario: id
        })
    })
        .then(response => response.json())
        .then(data => mostrarObjetoVehiculo(data))
        .catch(err => console.error({err}));
}