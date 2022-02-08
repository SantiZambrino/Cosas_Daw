const posts =[{
    id:1,
    title:'Mi primer post',
    image:'https://img.com/1',
    tags:['javascript','webdeveloper'],
},{
    id:2,
    title:'Mi experiencia con React',
    image:'https://img.com/2',
    tags:['javascript','webdevelopment','react'],
},{
    id:3,
    title:'Por que deje Angular',
    image:'https://img.com/3',
    tags:['javascript','webdevelopment','angular'],
}]

//Para acceder a estos datos
//Find nos permite buscar un elemento que contenga lo que estamos buscando
//Le pasamos un parametro y nos devuelve el objeto donde esta
console.log(posts.find(post =>'Por que deje Angular'));

//Devuelve true o false dependiendo si existe o no lo que buscamos

console.log(posts.some(post => post.id === 4))

//Includes nos permite mirar si existe dentro de un array cierta palabra esto se pude sumar al metodo anterior

console.log(posts.some(post => post.tags.includes('vue')))

//EVery comprueba si hay alguno y se cumple en todas

console.log(posts.every(post => post.tags.includes('javascript')))

//Map como un bulce for pero mas declarativa y muy funcional

console.log(posts.map(post=>post.title))
//https://www.youtube.com/watch?v=R8rmfD9Y5-c

//Tambien podemos filtrar elementos
//Con filter se puede filtrar elementos y guardarlos en una variable creando un nuevo array

console.log(posts.filter(post=>post.tags.includes('angular')))


//Reduce  ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

//El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.

//Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.

console.log(posts.reduce((allTags, posts)=>{
    return Array.from(new Set([...allTags, ...posts.tags]))
}, []))

//Otra manera

console.log(posts.reduce((allTags, posts)=>{
    return [...allTags, ...posts.tags]
}, []).filter((post, index, self)=> index === self.indexOf(post)))