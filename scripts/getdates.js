// Display current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display last modified date and time
const lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
    "Last Modification: " + lastModifiedDate.toLocaleString();
