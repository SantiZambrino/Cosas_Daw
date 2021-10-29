/* 
Desarrolla un script que, al pulsar el botón correspondiente, pida al usuario una cantidad en euros y muestre con un alert su equivalente en dólares americanos con el formato del siguiente ejemplo:1 euros equivalen a 1.1642 dólares americanosDestacar que el valor del dólar es algo que cambia con frecuencia y se busca hacer pocos cambios en el código para arreglar el programa en un futuro (u otros más largo dónde se use el código de este) cada vez que eso suceda.Puedes ver un ejemplo de funcionamiento en la URL: https://youtu.be/OkrAXcs53o8
*/

function ejercicio1() {
    let euros = parseInt(prompt("Dime una cantidad de dinero en Euros: "));
    let dolar = 1.1642;
    let convertir = euros * dolar;
    alert(`El cambio ${euros}€ a dolar es de: ${convertir}`);
}

/* 
Realiza un script que pida 10 calificaciones al usuario y a continuación, muestre unalert con el número de suspensos que hay (notas menores a 5), el número de aprobados que hay (notas entre 5 y 6), el número de notables que hay (notas entre 7y 8) y el número de sobresalientes que hay hay (notas superiores a 9).
*/

function ejercicio2() {
    //Declaro variables
    var contadorSuspensos = 0;
    var contadorSufi = 0;
    var contadorNotable = 0;
    var contadorSobresaliente = 0;
    //For para controlar las peticiones
    for (let i = 0; i < 3; i++) {
        var peticion = parseInt(prompt(`Peticion ${i}) Dime tu calificacion: `));
        if (peticion < 5) {
            contadorSuspensos++;
        }else if (peticion >= 5 && peticion <=6 ) {
            contadorSufi++;
        }else if(peticion >= 7 && peticion <=8){
            contadorNotable++;
        }else if(peticion >= 9 && peticion <=10){
            contadorSobresaliente++;
        }else{
            alert("no es una nota valida");
        }
    }

    alert(`Hay ${contadorSuspensos} alumnos suspensos, ${contadorSufi} alumnos con suficiente, ${contadorNotable} alumnos con Notable y ${contadorSobresaliente} alumnos con sobresaliente.`)
}

/*
Desarrolla un script que, al pulsar el botón correspondiente, pida al usuario una serie indeterminada de números positivos. Cada número introducido debe aparecer dentro del párrafo del ejercicio 3, uno al lado de otro y separados por un espacio.Cuando el usuario meta un número negativo, se para de pedir números y se añade a la lista de número del párrafo la suma de todos los números anteriores precedida del signo igual. Es decir, el número negativo solo sirve para parar de pedir. No se suma ni se añade al párrafo.
*/
function ejercicio3() {
    var dedo = document.querySelector("p");
    var numero = 0;
    do {
        numero = parseInt(prompt("Dime un numero que quiera agregar."));
        dedo.textContent += numero;
    } while (numero >= 0);
}

/* 
Ejercicio 4 (2 puntos):
Desarrolla un script  que, al pulsar el botón correspondiente, pida al usuario 5 números.
Esos números deben guardarse en un array.
Crea dos arrays vacíos llamados ‘pares’ e ‘impares’.
Multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10 y ve mostrando por consola la operación.
 Pej:
 2 x 3 = 6 
 7 x 1 = 7 
 8 x 9 = 72
 ...
 También debes guardar cada resultado obtenido en el array correspondientedependiendo de si es par o impar.
 Para acabar, muestra en el párrafo del ejercicio 4 el array de números pares y el de impares en horizontal y separando los números por un espacio. 
 Pej:
 Pares: 2 8 12 4 
 Impares: 13 17 3 9

*/

function ejercicio4() {
    //Pido al usuario 5 numeros
    var arrayNumero = new Array();
    var pares = new Array();
    var impares = new Array();
    var multiplicacion = 0;
    var dedo = document.getElementsByTagName("p");
    var mensaje = "";

    for (let i = 0; i < 5; i++) {
        var numeros = parseInt(prompt("Dime un numero"));
        //Los guardo en un Array
        arrayNumero.push(numeros);
        //Creo el random
        let random = Math.floor(Math.random() * 10) + 1;
        //multiplico
        multiplicacion =  numeros * random;
        //Si es el resto es igual a 0 lo guardo en par
        if (multiplicacion % 2 == 0) {
            pares.push(multiplicacion);
        } else {
            impares.push(multiplicacion);  
        }
        mensaje = "pares: " + pares.join(',');
        mensaje += "<br> impares: " + impares.join(',');
        dedo[1].innerHTML = mensaje; 
    }
        
}


/*  
Al pulsar el botón ¡¡ Genera !!, en el interior de cada uno de los divssuperiores aparece un valor numérico entre 1 y 50, obtenido de forma aleatoria.
*/

function generar() {
    //llamo a los id de izq y derecha y a los input del botón
    var dedoIzq = document.getElementById("ladoIzq");
    var dedoDer = document.getElementById("ladoDer");
    var dedoBoton = document.getElementsByTagName("input")
    //Creo los randoms
    var randomIzq = Math.floor(Math.random() * 50) + 1;
    var randomDer = Math.floor(Math.random() * 50) + 1;
    //genero el texto en el html
    dedoIzq.innerHTML = randomIzq;
    dedoDer.innerHTML = randomDer;
    //habilito y deshabilito los botones
    dedoBoton[0].disabled = true;
    dedoBoton[1].disabled = false;
}

function comparar() {
    //llamo a los id de izq y derecha y a los input del botón
    var dedoIzq = document.getElementById("ladoIzq");
    var dedoDer = document.getElementById("ladoDer");
    var dedoBoton = document.getElementsByTagName("input")
    var dedoSalida = document.getElementById("salida");

    //Comparo cual es mayor y lo muestro por pantalla.
    if (parseInt(dedoIzq.innerHTML) > parseInt(dedoDer.innerHTML)) {
        dedoSalida.innerHTML = dedoIzq.innerHTML;     
    }else{
        dedoSalida.innerHTML = dedoDer.innerHTML;
    }

    //Desactivo compara y activo genera
    dedoBoton[1].disabled = true;
    dedoBoton[0].disabled = false;
}