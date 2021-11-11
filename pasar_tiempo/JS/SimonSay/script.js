window.onload = function () {
    const boton = document.getElementsByTagName("button")[0];
    const finger = document.getElementsByTagName("div"); 
    const jugadaMaquina = new Array();
    let numeroJugada;
    let randomColor;

    finger[1].style.backgroundColor = "green"; 
    finger[2].style.backgroundColor = "red";
    finger[3].style.backgroundColor = "yellow"; 
    finger[4].style.backgroundColor = "blue"; 

    boton.onclick = function () {
        //guardo el intervalo en una variable
        interval = setInterval(intervalPlay, 2000);
        //utilizo esa variable para cortarlo
        setTimeout(function () {
        clearInterval(interval);
        }, 6000);
    };

    function intervalPlay() {
        for (let i = 0; i < 1; i++) {
          randomColor = Math.floor(Math.random() * 4) + 1;
          console.log({randomColor});
          jugadaMaquina.push(randomColor);
          console.log({jugadaMaquina});
          switch (randomColor) {
            case 1:
              setTimeout(function () {
                finger[1].style.setProperty("opacity", "0.4");
              }, 2000);
              setTimeout(function () {
                finger[1].style.setProperty("opacity", "1");
              }, 3000);
              break;
            case 2:
              setTimeout(function () {
                finger[2].style.setProperty("opacity", "0.4");
              }, 2200);
              setTimeout(function () {
                finger[2].style.setProperty("opacity", "1");
              }, 3200);
              break;
            case 3:
              setTimeout(function () {
                finger[3].style.setProperty("opacity", "0.4");
              }, 2400);
              setTimeout(function () {
                finger[3].style.setProperty("opacity", "1");
              }, 3400);
              break;
            case 4:
              setTimeout(function () {
                finger[4].style.setProperty("opacity", "0.4");
              }, 3600);
              setTimeout(function () {
                finger[4].style.setProperty("opacity", "1");
              }, 4600);
              break;
          }
        }
      }
};


