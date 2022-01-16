$(document).ready(function (e) {
    $("#botonMostrar").click(function(e){
        e.preventDefault();
        $(".divFinal").css({
            display: 'block',
        })
    });
    $("#ocultar").click(function(e){
        e.preventDefault();
        $(".divFinal").css({
            display: 'none',
        })
    });
})