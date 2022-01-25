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

window.onload = () => {
  const padre = document.getElementsByClassName("info-usu")[0];
  //Recorro el objeto
  for (const campoUsuario in usuario) {
    // console.log(campoUsuario +"tiene"+ usuario[campoUsuario])
    //Compruebo si es objeto
    if (typeof usuario[campoUsuario] === "object")
      if (Array.isArray(usuario[campoUsuario])) {
        //Si lo es compruebo si es array
        //Si lo es lo muestro
        let texto = `${campoUsuario}: ${usuario[campoUsuario]}`;
        console.log({texto})
        crearArray(texto, padre)
      } else {
        //Si no es array recorro el objeto y lo muestro
        for (let campoInterno in usuario[campoUsuario]) {
          let texto = `${campoInterno}: ${usuario[campoUsuario][campoInterno]}`;
          switch (campoInterno) {
            case "user":
              crear(texto, padre);
              break;
            case "name":
              crear(texto, padre);
              break;
            case "lastname":
              crear(texto, padre);
              break;
            case "age":
              crear(texto, padre);
              break;
            case "street":
              crear(texto, padre);
              break;
            case "phone":
              crear(texto, padre);
              break;
            case "email":
              crear(texto, padre);
              break;
          }
        }
      }
    //Si no es objeto lo muestro
    else {
      // console.log(`${campoUsuario}: ${usuario[campoUsuario]}`);
    }
  }
};

function crear(texto, padre) {
  let nuevo = document.createElement("p");
  let textoAcopiar = texto;
  let nodotexto = document.createTextNode(textoAcopiar);
  nuevo.appendChild(nodotexto);
  padre.appendChild(nuevo);
}
function crearArray(texto, padre) {
  let nuevo = document.createElement("p");
  nuevo.id ='softwareSkills';
  let textoAcopiar = texto;
  let nodotexto = document.createTextNode(textoAcopiar);
  nuevo.appendChild(nodotexto);
  padre.appendChild(nuevo);
}