window.onload = () => {
    const f = document.forms[0];//Llamo el formulario
    const btn = f.divisa;//boton divisa
    const listaDeplegable = f.listaDesplegable;

    btn.onclick = () => {
        cambio(f, listaDeplegable)
    }
}
/*
Completa el ejercicio añadiendo dos campos y un botón nuevos para implementar la
conversión contraria (de euros a dólares).
*/
function cambio(f, listaDeplegable) {

    if (listaDeplegable.selectedIndex == 0) {
        alert('elige una de las opciones')
        return;
    } else {
        if (listaDeplegable.selectedIndex == 1) {

            let convercion = parseInt(f.dolar.value) / 0.83;
            console.log(convercion)
            f.euro.value = `${Math.round(convercion)}$`;
        } else{
            let convercion = parseInt(f.dolar.value) * 0.83;
            console.log(convercion)
            f.euro.value = `${convercion}€`;
        }
    }

}