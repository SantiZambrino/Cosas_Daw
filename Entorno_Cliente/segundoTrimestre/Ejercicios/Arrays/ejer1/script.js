var lista = [2,3,4,18,19,20,21,23,0,2,5,69]
var elementUsu = parseInt(prompt("dime un numero: "));
var res = false;
lista.forEach(element =>{ 
    // if (element == elementUsu) {
    //     res = true;      
    // }

    //Operador ternario
    element == elementUsu ? res = true : res = false;
})

console.log(res);