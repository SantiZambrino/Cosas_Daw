  var counter = 0;
function play() {
        console.log(counter)
        var interval= setInterval(intervalPlay, 1000);
        setTimeout(clearInterval(interval), 3000);   
}

function intervalPlay() {
    //Selecciono los elementos child
    let finger = document.getElementsByClassName("child");
  
    
    //Objetivo numero 1 mostrar una secuencia
    for (let i = 0; i < 4; i++) {
        let randomColor = Math.floor(Math.random() * 4) + 1;
        // finger[].style.setProperty("background-Color", "green");       
        switch (randomColor) {
            case 1:
                finger[0].style.setProperty("background-Color", "green");
                setTimeout(function() {
                    finger[0].style.setProperty("background-Color", "white");
                }, 1000);
                break;
            case 2:
                finger[1].style.setProperty("background-Color", "red");
                setTimeout(function() {
                    finger[1].style.setProperty("background-Color", "white");
                }, 1000);
                break;
            case 3:
                finger[2].style.setProperty("background-Color", "yellow");
                setTimeout(function() {
                    finger[2].style.setProperty("background-Color", "white");
                }, 1000);
                break;
            case 4:
                finger[3].style.setProperty("background-Color", "blue");
                setTimeout(function() {
                    finger[3].style.setProperty("background-Color", "white");
                }, 1000); 
                break;
        }
        counter++;
    }
}
