const usuario = {
    genre: "masculino",
    datos: {
      name: "Prueba",
      lastname: "Prueba",
      age: 25,
      dni: "123456789J",
    },
    address: {
      street: "C/ Prueba",
      number: 4,
      city: "málaga",
      country: "españa",
    },
    coordenates: {
      latitud: 36.7196,
      longitud: -4.42002,
    },
    login: {
      id: "6622",
      user: "pruebaPrueba",
      pass: "123456789",
      picture: "img/avatarSmall.png",
    },
    contact: {
      phone: 666666666,
      email: "prueba@gmail.com",
      ssnn: ["linkedin", "github", "twitter"],
    },
    pictures: {
      big: "img/avatarBig.png",
      small: "img/avatarSmall.png",
    },
    softwareSkills: [
      "Databases",
      "Graphic Design",
      "Computer Programming",
      "Presentation Tools",
      "Social Media",
    ],
  };


    //Recorro el objeto
    for (const campoUsuario in usuario) {
        //Compruebo si es objeto
        if (typeof usuario[campoUsuario] === "object")
           //Si lo es compruebo si es array 
          if (Array.isArray(usuario[campoUsuario]))
            //Si lo es lo muestro
            console.log(`${campoUsuario}: ${usuario[campoUsuario]}`);
          else {
              //Si no es array recorro el objeto y lo muestro
            for (let campoInterno in usuario[campoUsuario]) {
              console.log(
                `${campoInterno}: ${usuario[campoUsuario][campoInterno]}`
              );
            }
          }
          //Si no es objeto lo muestro
        else{
            console.log(`${campoUsuario}: ${usuario[campoUsuario]}`);
        }  
      }