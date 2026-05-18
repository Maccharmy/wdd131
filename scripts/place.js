const year = document.querySelector('#year');
const lastModified = document.querySelector('#lastModified');
year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${new Date().toLocaleString()}`;

// Wind chill calculation
const temp = parseFloat(document.querySelector('#temp').textContent);
const speed = parseFloat(document.querySelector('#speed').textContent);
const windchillElement = document.querySelector('#windchill');

function calculateWindChill(t, s) {
    // Celsius formula
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
    windchillElement.textContent = `${calculateWindChill(temp, speed)}°C`;
} else {
    windchillElement.textContent = 'N/A';
}
