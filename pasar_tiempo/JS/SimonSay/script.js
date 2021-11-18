window.onload = () => {
  const boton = document.getElementsByTagName("button")[0];
  const fingers = document.getElementsByTagName("div");
  const jugadaMaquina = new Array();
  const colores = ['black', 'green', 'yellow', 'red', 'blue'];
  let jugar = true;
  let numeroJugada;
  let randomColor;

  for (let i = 0; i < fingers.length; i++) {
    fingers[i].style.backgroundColor = colores[i];
  }

  boton.onclick = play;


  function intervalPlay() {
    randomColor = Math.floor(Math.random() * 4) + 1;
    console.log({ randomColor });
    switch (randomColor) {
      case 1:
        setTimeout(()=> {
          fingers[1].style.setProperty("opacity", "0.4");
        }, 200);
        setTimeout(()=> {
          fingers[1].style.setProperty("opacity", "1");
        }, 400);
        break;
      case 2:
        setTimeout(()=> {
          fingers[2].style.setProperty("opacity", "0.4");
        }, 220);
        setTimeout(()=> {
          fingers[2].style.setProperty("opacity", "1");
        }, 420);
        break;
      case 3:
        setTimeout(()=> {
          fingers[3].style.setProperty("opacity", "0.4");
        }, 240);
        setTimeout(()=> {
          fingers[3].style.setProperty("opacity", "1");
        }, 440);
        break;
      case 4:
        setTimeout(()=> {
          fingers[4].style.setProperty("opacity", "0.4");
        }, 460);
        setTimeout(()=> {
          fingers[4].style.setProperty("opacity", "1");
        }, 560);
        break;
    }
  }

  function play() {
    //guardo el intervalo en una variable
    interval = setInterval(intervalPlay, 2000);
    //utilizo esa variable para cortarlo
    setTimeout(()=> {
      clearInterval(interval);
    }, 8500);
  }
};