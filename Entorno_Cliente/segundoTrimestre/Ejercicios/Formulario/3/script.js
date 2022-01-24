/*
Mejora el apartado anterior quitando el botón. Ahora cada vez que se marque un
checkbox, se añadirá al contenido del textarea. Si se desmarca, hay que quitarlo.
*/

window.onload = () =>{
    const form = document.forms[0];//Selecciono el formulario
    const casillas = document.querySelectorAll("input[type='checkbox']");//Selecciono los checkbox

    casillas.forEach(casilla =>{//Casilla son los checkbox
        casilla.onclick = ()=>{//Al darle click
            if (casilla.checked) form.hoja.value +=  `${casilla.value} `;//Si casilla esta marcada escribo en el text area el valor de casilla
            else form.hoja.value = `${form.hoja.value.replace(casilla.name+" ", "")}`;// si no borro la opcion del checkarea al quitar el check 
        }
    })
}
