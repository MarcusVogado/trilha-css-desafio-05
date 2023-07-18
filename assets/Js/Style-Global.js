var nav = document.getElementById('nav_header'); 
var numPx = '250'; 

window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	nav.classList.add('nav__header-transparent');
    } else {
      nav.classList.remove('nav__header-transparent');
    }
});

