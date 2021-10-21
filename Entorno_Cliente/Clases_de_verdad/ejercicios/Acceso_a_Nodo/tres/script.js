function sumar(params) {
    //Target el selector
    let elemento = document.querySelector("div")
    console.log(elemento)
    //suma 1 todo lo que haya dentro del selector
    elemento.innerHTML++;
}

function restar(params) {
    let elemento = document.querySelector("div")
    console.log(elemento)
    elemento.innerHTML--;
}