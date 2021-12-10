
var lista = [2,3,4,8,9,0,1,3,0,2,5,9]

function mayorEdad(e){
  return e >= 18;   
}

var res = lista.some(mayorEdad);

res = lista.some(function(e){
    return e >= 18;
});

console.log({res});