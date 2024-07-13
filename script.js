const menuActive = document.querySelector(".menu_active");
const hamburger_menu = document.querySelector(".hamburger_menu");
const menuClose = document.querySelector(".menu_close");

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

hamburger_menu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
