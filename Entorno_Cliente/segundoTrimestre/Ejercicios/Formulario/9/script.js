var numeroDni = {
  t: 0,
  r: 1,
  w: 2,
  a: 3,
  g: 4,
  m: 5,
  y: 6,
  f: 7,
  p: 8,
  d: 9,
  x: 10,
  b: 11,
  n: 12,
  j: 13,
  z: 14,
  s: 15,
  q: 16,
  v: 17,
  h: 18,
  l: 19,
  c: 20,
  k: 21,
  e: 22,
};

window.onload = () => {
  const f = document.forms[0];
  const campoDNI = f.uno;

  campoDNI.onblur = () => {
    let texto = campoDNI.value;
    console.log(texto);
    comprobacion(texto,campoDNI);
  };
  campoDNI.onkeypress = () => {
    if (campoDNI.value.length >= 9) return false;
    else return true;
  };
};

function comprobacion(texto,campoDNI) {
  let correcto = 0;//Cuenta la cantidad de numeros que hay
  let letra = ""; //La letra del dni
  let numeros = ""; //Concatena todos los numeros
  let resto = ""; //Resto de la division

  // console.log(texto.length-)
  for (const caracter of texto) {
    if (!isNaN(caracter)) correcto++, (numeros += caracter);
  }
  numeros = parseInt(numeros);
  // console.log(correcto)
//   console.log(texto[texto.length-1])
  if (correcto == texto.length - 1 && isNaN(texto[texto.length-1])) {
    letra = texto[texto.length - 1].toLowerCase();
    resto = numeros % 23;
  
    //Recorro el objeto si la propiedad del objeto es igual a letra y el valor del objeto es igual al resto de la division el resultado es correcto
    for (let caracter in numeroDni) {
      if (caracter == letra && numeroDni[caracter] == resto) {
      
        campoDNI.style.border = "2px solid lightgreen";//Cambio el borde del input
      
        console.log("La letra es correcta");
        return;
      }
    }
    //Este trozo de codigo solo se ejecuta si no entra en el if del forIn eso sucede por el return
    campoDNI.style.border = "2px solid red";
    console.log("La letra no es correcta")

  } else {
    campoDNI.style.border = "2px solid red";
    console.log("campo incorrecto");
  }
}
