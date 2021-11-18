function changeH1() {
    let fingers = document.getElementsByTagName("h1");
    setInterval(change, 2000);
    function change() {
        fingers[0].innerHTML = "<.He";
        fingers[1].innerHTML = "llo.>";
        setTimeout(function() {
            fingers[0].innerHTML = "<.Ho";
            fingers[1].innerHTML = "la.>";
        }, 1000);
    }
}