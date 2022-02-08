console.clear();

const persona1 = {
  nombre: "Santi",
  apellido: "Zambrino",
  edad: "33",
  5: 10,
};

const salarios = {
  enero: 2000,
  febrero: 500,
  marzo: 700,
};
//Object.Keys: Nos devuelve un array de strings, con cada una de las claves de ese objeto
//Posible uso hayar la longitud de un objeto
console.log(Object.keys(persona1));
console.log(Object.keys(persona1).length);

//Object.value(): devuelve un array con los valores del objeto
//No parsea todo a string respeta su tipado

console.log(Object.values(persona1));

//Usos sumar el contenido de la propiedades de los objetos
console.log(
  Object.values(salarios).reduce((total, actual) => {
    return total + actual;
  }, 0)
);

//Object.entries nos devuelve un array bi con clave y valor

console.log(Object.entries(persona1))

//Si quiero modificar por ejemplo

Object.entries(persona1).forEach(par =>{
    const clave = par[0];
    const valor = par[1];

    if(typeof valor === 'string') persona1[clave] = valor.toUpperCase();
})

for (const [clave, valor] of Object.entries(persona1)) {
    console.log(clave, valor)
}

console.log(persona1);

//Object.fromEntries: recibe un array de array y lo convierte en objetos tambien funciona con Mapas
const persona2=[
    ['name', 'Santi'],
    ['apellido', 'Zambrino'],
    ['edad', 33],
];

console.log(Object.fromEntries(persona2));


//Onject.assign: Clona un objeto recibe dos parametros la fuente y donde vamos a copiar.
//Cuidado con la referencia y los valores. Permite clonar objetos simples, si tiene otro objeto anidado ya no se copia, copia el primer nivel.
const personaCLonada = {}

Object.assign(personaCLonada, persona1);

console.log({persona1})
console.log({personaCLonada})