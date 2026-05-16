const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {

    nav.classList.toggle('open');
    menuButton.classList.toggle('open');

    const isOpen = nav.classList.contains('open');

    menuButton.setAttribute('aria-expanded', isOpen);
});

// Dynamic footer year
document.getElementById('year').textContent =
    new Date().getFullYear();

// Last modified date
document.getElementById('lastModified').textContent =
    document.lastModified;