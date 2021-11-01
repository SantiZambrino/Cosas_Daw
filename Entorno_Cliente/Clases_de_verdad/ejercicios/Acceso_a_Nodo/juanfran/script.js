var divs = document.querySelectorAll('div');
divs[1].style.visibility = 'hidden';

divs[0].onmouseover = function() {
    divs[1].style.visibility = 'visible';
}
divs[0].onmouseleave = function() {
    divs[1].style.visibility = 'hidden';
}


