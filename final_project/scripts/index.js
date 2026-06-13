// Array of medication objects
const medications = [
    { name: "Amoxicillin", use: "Antibiotic for bacterial infections" },
    { name: "Ibuprofen", use: "Pain relief and anti-inflammatory" },
    { name: "Paracetamol", use: "Fever reducer and pain relief" },
    { name: "Metformin", use: "Blood sugar control in type 2 diabetes" }
];

// Random medication
function getRandomMedication() {
    const index = Math.floor(Math.random() * medications.length);
    return medications[index];
}

// Display medication
function displayMedication(med) {
    const output = document.getElementById("drugOutput");
    if (output) {
        output.innerHTML = `<strong>${med.name}</strong><br><em>${med.use}</em>`;
    }
}

// Save & load medication
function saveMedication(med) {
    localStorage.setItem("featuredMedication", JSON.stringify(med));
}
function loadMedication() {
    const saved = localStorage.getItem("featuredMedication");
    return saved ? JSON.parse(saved) : null;
}

// Resources array
const resources = [
    { title: "Dosage Calculator", description: "Calculate safe dosages for patients." },
    { title: "Drug Interaction Checker", description: "Check if medications interact." },
    { title: "Safety Guidelines", description: "Best practices for medication safety." }
];

// Display resources
function displayResources() {
    const container = document.getElementById("resourceList");
    if (container) {
        container.innerHTML = "";
        resources.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            container.appendChild(card);
        });
    }
}

// Contact form functions
function greetUser(name) {
    return `Welcome, ${name}!`;
}
function saveMessage(message) {
    localStorage.setItem("userMessage", message);
}
function loadMessage() {
    return localStorage.getItem("userMessage");
}

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    // Featured Medication
    let med = loadMedication() || getRandomMedication();
    displayMedication(med);

    const featuredSection = document.getElementById("featuredMedication");
    if (featuredSection) {
        const btn = document.createElement("button");
        btn.textContent = "Show New Medication";
        btn.className = "btn";
        featuredSection.appendChild(btn);

        btn.addEventListener("click", () => {
            const newMed = getRandomMedication();
            if (newMed.name === med.name) {
                alert("Same medication picked, try again!");
            } else {
                med = newMed;
                displayMedication(newMed);
                saveMedication(newMed);
            }
        });
    }

    // Resources
    displayResources();

    // Contact Form
    const form = document.getElementById("contactForm");
    const formOutput = document.getElementById("formOutput");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const message = document.getElementById("message").value.trim();

            if (message.length < 10) {
                alert("Message must contain at least 10 characters.");
            } else {
                saveMessage(message);
                formOutput.textContent = greetUser(name);
            }
        });

        const savedMessage = loadMessage();
        if (savedMessage && formOutput) {
            formOutput.textContent = `Last saved message: ${savedMessage}`;
        }
    }
});
