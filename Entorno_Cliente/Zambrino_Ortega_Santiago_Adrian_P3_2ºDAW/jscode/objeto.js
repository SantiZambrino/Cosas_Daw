window.onload = ()=>{
    const padre = document.querySelector('section');
    const datos = JSON.parse(localStorage.datos);
    console.log(datos);

   //Recorro el objeto
   for (const campo in datos) {
       let nuevo = document.createElement('p')
       let texto = datos[campo];
       let nodoTexto = document.createTextNode(texto);
       nuevo.appendChild(nodoTexto)
       padre.appendChild(nuevo)
        console.log(`${campoUsuario}: ${usuario[campoUsuario]}`);
    }  
  }


