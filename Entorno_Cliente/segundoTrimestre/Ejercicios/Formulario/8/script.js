window.onload = ()=>{
    const f = document.forms[0];
    const divColor = document.getElementsByTagName('div')[0];
    const listaDesplegable = f.listaD;

    for (const casilla of f.elements) {
        if (casilla.type == "radio")casilla.onclick = () => { cambioColor(casilla,divColor)};
    }

    listaDesplegable.onclick = ()=>{
        
        cambioColorLista(listaDesplegable,divColor)
    }
}    
/*
Indicando el color deseado entre alguna de las opciones de un bloque de botones
radio (al menos 3 colores para elegir)
*/
function cambioColor(casilla,divColor) {
    console.log('hola')
    console.log(casilla.value)
    switch (casilla.value) {
        case 'brown':
            divColor.style.backgroundColor = casilla.value; 
            break;
        case 'violet':
            divColor.style.backgroundColor = casilla.value;
            break;
        case 'silver':
            divColor.style.backgroundColor = casilla.value;
            break;
    }
}

function cambioColorLista(listaDeplegable,divColor) {
    switch (listaDeplegable.selectedIndex) {
        case 1:
            divColor.style.backgroundColor = listaDeplegable[1].style.backgroundColor = listaDeplegable[1].value; 
            break;
        case 2:
            divColor.style.backgroundColor = listaDeplegable[2].style.backgroundColor = listaDeplegable[2].value;
            break;
        case 3:
            divColor.style.backgroundColor = listaDeplegable[3].style.backgroundColor = listaDeplegable[3].value;
            break;
    }
}

/*
  Indicando el color deseado entre los elementos de una lista desplegable (al menos 3
colores para elegir).
 */