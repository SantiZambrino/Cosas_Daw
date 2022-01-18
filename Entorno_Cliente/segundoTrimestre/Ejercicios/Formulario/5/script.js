/*
Crea un formulario con dos campos de texto y un boton llamado COMPROBAR. El
botón debe comprobar si el contenido de uno de los campos es anagrama del otro.
Mostrará el resultado haciendo uso de la función alert. Si ambos campos están vacíos,
no se considerará que son anagramas
*/

window.onload = () =>{
    const f = document.forms[0];
    const btn = f.btn
    console.log({btn})

    btn.onclick = ()=>{
        anagrama(f)
    }
}

function anagrama(f) {
    console.log(f.palabra.value);
    let palabra = f.palabra.value.toLowerCase();
    for (const valor of palabra) {
        console.log(`${palabra}: ${valor}`)
    }
}