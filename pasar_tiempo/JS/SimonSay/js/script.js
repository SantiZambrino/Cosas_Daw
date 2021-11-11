window.onload = function(){
  let order = [];//lleva el orden de como se van a encender las luces
  let playerOrder = [];//el orden que el usuario toca las luces
  let flash;//el numero de flashes que va a aparecer
  let turn;//lleva el conteo de los turnos
  let good;// si tocamos el color correcto o no
  let compTurn;// turno de la maquina
  let intervalID;
  let strict = false;// si el boton stric esta check o no.
  let noise = true;// ruido. 
  let on = false;// si el boton power esta encendido
  let win;// si ganamos o no.

  const turnCounter = document.getElementById('#turn');
  const topLeft = document.getElementById('#topleft');
  const topRight = document.getElementById('#topright');
  const bottomLeft = document.getElementById('#bottomleft');
  const bottomRight = document.getElementById('#bottomright');
  const bottomStrict = document.getElementById('#strict');
  const bottomOn = document.getElementById('#on');
  const bottomStart = document.getElementById('#start');

  // Strict
  // bottomStrict.onclick = function() {
    
  // }
}