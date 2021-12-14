var cadena = "hola que tal como estas?"

var res = cadena.split(" ")

console.log(res);

res.forEach(element => console.log(`La palabra "${element}" tiene: ${element.length} letras.`));