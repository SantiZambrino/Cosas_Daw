/*
Crea un formulario con varios elementos checkbox (pej, países) y una lista desplegable
vacía.
Implementa el código necesario para que, cada vez que se marque un checkbox, se cree
una entrada nueva en la lista desplegable con el país correspondiente. Si se desmarca un
checkbox, debe eliminarse el país correspondiente de la lista.
*/

window.onload = () => {
    const f = document.forms[0];

    for (const casilla of f.elements) {
        if (casilla.type == "checkbox") casilla.onclick = () => { crearDesplegable(f, casilla) }
    }

}

function crearDesplegable(f, casilla) {
    const padre = f.desplegable;
    if (casilla.checked) {
        console.log(casilla.checked)
        console.log(casilla.value)
        let nuevo = document.createElement("option")//Creo elemento nuevo
        nuevo.value = casilla.value;// le agrego un value al option
        let texto = casilla.value;//Creo texto
        let nodoTexto = document.createTextNode(texto) //Meto el texto en el nodo texto
        nuevo.appendChild(nodoTexto)//Meto el nodo en el elemento creado
        padre.appendChild(nuevo);//Lo meto en el nodo padre
    }
    else {
        console.log(casilla.checked);
        let opciones = document.querySelectorAll('option')//selecciono las opciones
        for (const option of opciones) {
            if (casilla.value == option.value) {
                padre.removeChild(option)//Las elimino
            }
        }
    }
}