const nav_menu = document.getElementById("nav-menu");
const menu_close = document.getElementById('menu-close');
const hamburger_icon = document.getElementById("hamburger-icon");

hamburger_icon.onclick = function(event) {
    nav_menu.classList.add('open');
    this.style.visibility = "hidden";
};

menu_close.onclick = function(event) {
    nav_menu.classList.remove('open');
    hamburger_icon.style.visibility = "visible";
}

nav_menu.onclick = function(event) {
    this.classList.remove('open');
    hamburger_icon.style.visibility = "visible";
}