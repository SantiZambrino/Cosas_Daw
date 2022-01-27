/*
Crea un formulario con dos campos de texto y un boton llamado COMPROBAR. El
botón debe comprobar si el contenido de uno de los campos es anagrama del otro.
Mostrará el resultado haciendo uso de la función alert. Si ambos campos están vacíos,
no se considerará que son anagramas
*/

window.onload = () => {
  const f = document.forms[0]; //Selecciono el formulario
  const btn = f.btn; //Seleciono el boton
  console.log({ btn });

  btn.onclick = () => {
    anagrama(f); //Paso el formulario por la funcion
  };
};

function anagrama(f) {
  //Selecciono las palabras
  const palabra1 = f.palabra1.value.toLowerCase();
  const palabra2 = f.palabra2.value.toLowerCase();
  //Creo array para comprobar
  let arraycheck = [];

  // console.log(palabra1);
  // console.log(palabra2);

  // //Recorro la primera palabra
  // for (const letra of palabra1) {
  //     console.log({letra})
  //     if (palabra2.includes(letra)) {//Si la segunda palabra contiene la letra la guardo en el nuevo array
  //         arraycheck.push(letra)
  //     }
  // }

  // //Si cumple las condiciones es un anagrama
  // if ((arraycheck.length == palabra2.length && palabra1.length)) {
  //    alert("es un anagrama")
  // }else{
  //     alert("no es un anagrama")
  // }
  if (palabra1.length == palabra2.length) {
    for (const letra of palabra1) {
      if (!palabra2.includes(letra)) 
        alert("No es un anagrama")
        return;
    }
    alert("Es un anagrama");
  }
  else alert("no es un anagrama")

//   console.log({ arraycheck });
}
