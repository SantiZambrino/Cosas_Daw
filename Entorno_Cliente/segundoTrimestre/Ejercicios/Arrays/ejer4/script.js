const arrayCadenas = ['hola','otra', 'cadena', 'perro', 'arbol', 'coche'];

arrayCadenas.forEach((element, index, theArray) =>{
    if (element.length == 4) {
        theArray[index] = '****';
    }
    else if (element.length == 6) {
        theArray[index] = '******';
    }
});

console.log(arrayCadenas);