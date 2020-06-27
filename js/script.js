window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.list__item'),
    hamburger = document.querySelector('.toper__burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('toper__burger_active');
        menu.classList.toggle('menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('toper__burger_active');
            menu.classList.toggle('menu__list_active');
        })
    })
})