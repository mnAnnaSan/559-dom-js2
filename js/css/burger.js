const burgerIcon = document.querySelector('.navbar .burger-icon');
burgerIcon.addEventListener('click', toggleBurger);
function toggleBurger() {
    const menu = document.querySelector('.navbar .menu');
    menu.classList.toggle('hidden');
}
