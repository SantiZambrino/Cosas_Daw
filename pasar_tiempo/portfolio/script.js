function changeH1() {
    let finger = document.getElementsByTagName("h1");
    setInterval(change, 2000);
    function change() {
        finger[0].innerHTML = "<.He";
        finger[1].innerHTML = "llo.>";
        setTimeout(function() {
            finger[0].innerHTML = "<.Ho";
            finger[1].innerHTML = "la.>";
        }, 1000);
    }
}