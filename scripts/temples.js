const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
});

// Nigerian format: DD/MM/YYYY HH:MM:SS (24-hour clock)
function updateFooterTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('lastModified').textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

updateFooterTime();
setInterval(updateFooterTime, 1000);
