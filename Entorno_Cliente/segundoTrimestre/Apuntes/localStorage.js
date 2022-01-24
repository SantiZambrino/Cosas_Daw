localStorage.variable // almacena variable tipo string
localStorage.removeItem// elimina las variables
let dato =  JSON.stringify(variable)//castea un objeto a string porque solo puedo guardar cadenas en la localStorage
let objeto = JSON.parse(dato) // vuelvo a pasarlo a formato JSON para recorrelo