var burgerMenu = document.getElementById('menu-button');
var show = document.getElementById('navBar');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})