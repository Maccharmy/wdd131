// Footer Dates

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// Wind Chill Calculation

const temperature = 24;
const windSpeed = 6;

function calculateWindChill(t, s) {
    return (13.12 + 0.6215 * t - 11.37 * s ** 0.16 + 0.3965 * t * s ** 0.16).toFixed(1);
}

const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
    windChill.textContent = "N/A";
}