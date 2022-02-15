import {mostrarObjeto, mostrarObjetoVehiculo, editconfirmation, insertConfirmation ,deleteConfirmation} from './crecionObjetos.js'
export {mostrarDatosUsu, mostrarDatosUsuyCar, editarUsuario, insertarUsuario, borrarUsuario}

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
    const url = `http://localhost:3000/infoUsuVehiculo`
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

function editarUsuario(f) {
    console.log('editando')
    const userDni = f.editdni.value
    const username = f.editname.value
    const userApellido = f.editapellido.value
    const id = f.editid.value
    const url = `http://localhost:3000/editUsuario`

    fetch(url, {
        method: 'Post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dni: userDni,
            nombre: username,
            apellidos: userApellido,
            id_usu: id
        })
    })
    .then(response => response.json())
    .then(editconfirmation())
    .catch(err => console.error({err}));
}

function insertarUsuario(f) {
    const username = f.nombre.value
    const userApellido = f.apellidos.value
    const userDni = f.dni.value
    const userTelefono = f.telefono.value
    const userEmail = f.email.value
    const userPass = f.pass.value
    const userAdmin = f.id_admin.value
    const url = `http://localhost:3000/insertUsu`

    fetch(url, {
        method: 'Post',
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: username,
            apellido: userApellido,
            dni: userDni,
            telefono: userTelefono,
            email: userEmail,
            pass: userPass,
            id_admin: userAdmin
        })
    })
    .then(response => response.json())
    .then(insertConfirmation())
    .catch(err => console.error({err}));

}

function borrarUsuario(f) {
    const id = f.campoBorrar.value
    const url = `http://localhost:3000/borrarUsu`

    fetch(url, {
        method: 'Post',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_usu: id
        })
    })
    .then(response => response.json())
    .then(deleteConfirmation())
    .catch(err => console.error({err}));
}