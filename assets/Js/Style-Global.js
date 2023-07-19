var nav = document.getElementById('nav-header'); 
var numPx = '50'; 

window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	nav.classList.add('nav__header-transparent');
    } else {
      nav.classList.remove('nav__header-transparent');
      
    }
});

