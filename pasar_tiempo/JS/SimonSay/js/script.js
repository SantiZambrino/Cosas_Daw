window.onload = () => {
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
  const totalTurns = 20;

  const turnCounter = document.querySelector('#turn');
  const topLeft = document.querySelector('#topleft');
  const topRight = document.querySelector('#topright');
  const bottomLeft = document.querySelector('#bottomleft');
  const bottomRight = document.querySelector('#bottomright');
  const strictButton = document.querySelector('#strict');
  const onButton = document.querySelector('#on');
  const startButton = document.querySelector('#start');

  //Cuando cambie el input o le demos click realizara un evento
  strictButton.addEventListener('change'/*puede ser change o click*/, (event) => {

    if (strictButton.checked) strict = true;
    else strict = false;

    console.log({ strict });
  });

  //al darle click genera un evento que cambiara el valor de la variable on
  onButton.addEventListener('click', (event) => {

    if (onButton.checked) on = true, turnCounter.innerHTML = '--';
    else on = false, turnCounter.innerHTML = '';
    clearColor();
    clearInterval(intervalID);

    console.log({ on });
  });

  //Si on o win  es true, ejecuta win.
  startButton.addEventListener('click', (event) => {
    if (on || win) play();
  })

  function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalID = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;

    for (let i = 0; i < totalTurns; i++) {
      order.push(Math.floor(Math.random() * 4) + 1)
    }
    console.log({ order });

    compTurn = true;

    intervalID = setInterval(gameTurn, 800);
  }


  function gameTurn() {
    on = false;// mintras sea el turno de la maquina el jugador no puede tocar los botones

    //Si el flash coincide con el turno corta el turno de la maquina 
    if (flash == turn) {
      clearInterval(intervalID);
      compTurn = false;
      clearColor();
      on = true;
    }
    if (compTurn) 
      clearColor(),
      setTimeout(() => {
        if (order[flash] == 1) one();
        else if (order[flash] == 2) two();
        else if (order[flash] == 3) three();
        else if (order[flash] == 4) four();
      }, 200);
    
    flash++;
  }

  function one() {
    if (noise) {
      let audio = document.getElementById('clip1');
      audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = 'lightgreen';
  }
  function two() {
    if (noise) {
      let audio = document.getElementById('clip2');
      audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = 'tomato';
  }
  function three() {
    if (noise) {
      let audio = document.getElementById('clip3');
      audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = 'yellow';
  }
  function four() {
    if (noise) {
      let audio = document.getElementById('clip4');
      audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = 'lightskyblue';
  }

  function clearColor() {
    topLeft.style.backgroundColor = 'darkgreen';
    topRight.style.backgroundColor = 'darkred';
    bottomLeft.style.backgroundColor = 'goldenrod';
    bottomRight.style.backgroundColor = 'darkblue';
  }

  topLeft.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(1);
      checked();
      one();
      if (!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  topRight.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(2);
      checked();  
      two();
      if (!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  bottomLeft.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(3);
      checked();
      three();
      if (!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  bottomRight.addEventListener('click', (event) => {
    if (on) {
      playerOrder.push(4);
      checked();
      four();
      if (!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })

  function checked() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length -1]) good = false; 

    else if (playerOrder.length == 20 && good == true) winGame();

    else if (good == false)
    flashColor(),
    turnCounter.innerHTML = 'NO!',
    setTimeout(() => {
      turnCounter.innerHTML = 'turn';
      clearColor()

      if (strict) play();
      else
      compTurn = true,
      flash = 0,
      playerOrder = [],
      good = true,
      intervalID = setInterval(gameTurn, 800);
    }, 800),

    noise = false;

    if (turn == playerOrder.length && good && !win)
    turn++,
    playerOrder = [],
    compTurn = true,
    flash = 0,
    turnCounter.innerHTML = turn,
    intervalID = setInterval(gameTurn, 800);
  }

  function flashColor() {
    topLeft.style.backgroundColor = 'lightgreen';
    topRight.style.backgroundColor = 'tomato';
    bottomLeft.style.backgroundColor = 'yellow';
    bottomRight.style.backgroundColor = 'lightskyblue';
  }

  function winGame() {
    flashColor();
    turnCounter.innerHTML = 'Win!';
    on = false;
    win = true;
  }
}