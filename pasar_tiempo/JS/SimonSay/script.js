


function play() {
    //guardo el intervalo en una variable
    interval= setInterval(intervalPlay, 2000);
    //utilizo esa variable para cortarlo
    setTimeout(function() {clearInterval(interval)}, 6000);
}

function intervalPlay() {
    //Selecciono los elementos child
    let finger = document.getElementsByClassName("child");
    
    //Objetivo numero 1 mostrar una secuencia
    for (let i = 0; i < 4; i++) {
        let randomColor = Math.floor(Math.random() * 4) + 1;  
        switch (randomColor) {
            case 1:
                setTimeout(function(){
                    finger[0].style.setProperty("background-Color", "green");    
                }, 500);
                setTimeout(function() {
                    finger[0].style.setProperty("background-Color", "white");
                }, 1000);
                break;
            case 2:
                setTimeout(function(){
                    finger[1].style.setProperty("background-Color", "red");    
                }, 700);
                setTimeout(function() {
                    finger[1].style.setProperty("background-Color", "white");
                }, 1000);
                break;
            case 3:
                setTimeout(function(){
                    finger[2].style.setProperty("background-Color", "yellow");    
                }, 800);
                setTimeout(function() {
                    finger[2].style.setProperty("background-Color", "white");
                }, 1000);
                break;
            case 4:
                setTimeout(function(){
                    finger[3].style.setProperty("background-Color", "blue");    
                }, 1200);
                setTimeout(function() {
                    finger[3].style.setProperty("background-Color", "white");
                }, 1300); 
                break;
        }
    }
}  


