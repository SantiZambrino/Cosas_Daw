var tutores = [
    {
        nombre: "Jaime",
        edad: 39,
        dni: "12938475J",
        tituloU: "Ingeniero"
    },
    {
        nombre: "Sabatha",
        edad: 37,
        dni: "91827374S",
        tituloU: "Artes"
    }
]


var asignaturas = [
    {
        nombre: "servidores",
        curso: 1,
        horasT: 8
    },
    {
        nombre: "clientes",
        curso: 2,
        horasT: 6
    },
    {
        nombre: "interfaces",
        curso: 3,
        horasT: 9
    },
    {
        nombre: "diseño",
        curso: 4,
        horasT: 5
    }
]

var Santi = {
    nombre: "Santi",
    edad: 33,
    ciclo: "daw",
    curso: 2,
    tutor: tutores[1],
    asignaturas: [asignaturas[0], asignaturas[1], asignaturas[2], asignaturas[3]],
    notaMedia: [7, 8, 9, 10]
}

window.onload = function () {
    var papi = document.getElementsByClassName('central')[0];
    for (let clave in Santi) {//Recorro el objeto Santi
        let nuevoP = document.createElement("p");
        if (clave == 'tutor') {
            nuevoP.textContent = `${clave}: ${Santi[clave].nombre}`; 
            console.log(Santi[clave].nombre)
        }else if (clave == 'asignaturas') {
            nuevoP.textContent += `${clave}: `;
            let texto = "";
            for (const contenido of Santi.asignaturas) {
                texto += `${contenido.nombre}, `
            }
            texto = texto.substring(0, texto.length-2);
            texto += "."
            nuevoP.textContent += texto;
        } else if(clave == 'notaMedia'){
            nuevoP.textContent = `Nota Media: ${media()}`;
        }
        else{
            nuevoP.textContent += `${clave}: ${Santi[clave]}`;
        }
        papi.appendChild(nuevoP);
    }
}


function media() {
    let suma = 0;
    let media = Santi.notaMedia;  
    media.forEach(element => {
        suma += element;
    });
    console.log(suma)
    return suma / media.length;
}

function mostrar() {
   for (let llave of tutores) {
        
   }

}

console.log(mostrar());
