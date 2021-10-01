<?php
 
    $ent1 = $_GET['entrada1'];
    $ent2 = $_GET['entrada2'];
    $ent3 = $_GET['entrada3'];
 
    /*   TU CÓDIGO   */
    // Ejercicio 1

    if(strtolower($ent1) == 'true'){
        echo "Verdadero";
    } elseif($ent1 == 'false' || 'False'){
        echo "Falso";
    } else{
        echo "No es un numero";
    }

    // Ejercicio 2
    $comparacion = gettype($ent1);
    

    if($comparacion == 'integer'){
        if ($ent1 > 100) {
            echo 'es mayor de 100';
        } elseif($ent1 > 25 && ($ent1 < 50)){
            echo 'Esta entre 25 y 50';
        } elseif ($ent1 < 25) {
            echo 'Es menor de 25';
        }
    } else {
        echo 'No es un numero';
    }

    //Ejercicio 3
     
    // switch (strtolower($ent1)){
 
    //     case 'gato' : 
    //     case 'perro' : 
    //     case 'loro' : 
    //         echo 'Se ha seleccionado el '.$ent1; 
    //         break;
    //     default: echo 'No se ha seleccionado ni perro, ni gato, ni loro'; break;
    // }

    // if (strtolower($ent1) == 'gato') {
    //     echo "Se ha seleccionado gato";
    // } elseif (strtolower($ent1) == 'perro') {
    //     echo 'Se ha seleccionado perro';
    // } elseif (strtolower($ent1)) {
    //     echo 'Se ha seleccionado loro';
    // } else{
    //     echo 'No se ha indicado ni perro, ni gato, ni loro';
    // }
    
    // //Ejercicio 4
    // switch (strtolower($ent1)) {
    //     case 'gato':
    //         echo "Se ha seleccionado gato";
    //         break;
    //     case 'perro':
    //         echo "Se ha seleccionado perro";
    //         break;
    //     case 'loro':
    //         echo "Se ha seleccionado loro";
    //         break;
        
    //     default:
    //         echo 'No se ha indicado ni perro, ni gato, ni loro';
    //         break;
    // }

    // // Ejercicio 5
    // if($ent2 == '+') {
    //     $calculaSuma = $ent1 + $ent3;
    //     echo 'el resultado es'. $calculaSuma;
    // }elseif(($ent2 == '-')){
    //     $calculaResta = $ent1 - $ent3;
    //     echo 'el resultado es'. $calculaResta;
    // }elseif (($ent2 == '*')) {
    //     $calculaMulti = $ent1 * $ent3;
    //     echo 'el resultado es'. $calculaMulti;
    // }elseif ($ent2 == '/') {
    //     $calculaDiv = $ent1 / $ent3;
    //     echo 'el resultado es'. $calculaDiv;
    // } else{
    //     echo 'Introduce numeros';
    // }

    // //Ejercicio 6

    // if (((strtolower($ent1) == true) && (strtolower($ent3) == true))||(strtolower($ent1) == false) && (strtolower($ent3) == false)) {
    //     echo 'true';
    // } elseif (((strtolower($ent1) == true) && (strtolower($ent3) == false))||(strtolower($ent1) == false) && (strtolower($ent3) == true)) {
    //     echo 'false';
    // } 

    //Ejercicio 7
    // Recibe como argumento un string donde poder escribir una frase con más de una palabra separadas por espacios
    // Crea un Array donde cada elemento es una palabra del string de entrada
    // muestra el array por pantalla
    
    //Explode es una funcion que divide un string en fragmentos
    $dividirString = explode(" ", $ent1);
    // el split aqui lo divide por caracteres o se le pone un rango
    // $arrayCadena = str_split($dividirString);

    print_r($dividirString);

    
?>
