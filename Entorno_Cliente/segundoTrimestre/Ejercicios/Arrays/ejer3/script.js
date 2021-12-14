var lista = [1,25,63,12,54];

var cuadrada = lista.map( element =>{
    return Math.sqrt(element);
});

console.log({cuadrada});

var elevar = lista.map((element, index) =>{
    return Math.pow(element,index);
});

console.log(elevar);

// Map crea un array igual rellena los valores que cumplen la condicion y el resto los deja Undefined
var pares = lista.map(element =>{
    if (element % 2 == 0) {
        return element;
    }
});

console.log(pares);

//Filter te rellena SOLO los valores que cumplen la condicion.
var pares2 = lista.filter(element => element % 2 == 0);


console.log(pares2);