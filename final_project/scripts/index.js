// Object
const drugInfo = {
    name: "Amoxicillin",
    dosage: "500 mg",
    frequency: "8 hourly daily"
};

// Array
const resources = [
    {
        title: "Dosage Calculator",
        description: "Calculate safe dosages for patients."
    },
    {
        title: "Drug Interaction Checker",
        description: "Check if medications interact."
    },
    {
        title: "Safety Guidelines",
        description: "Best practices for medication safety."
    }
];

// Array Method
resources.forEach(item => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;

    document
        .getElementById("resourceList")
        ?.appendChild(card);
});

// Template Literal
const drugOutput = document.getElementById("drugOutput");

if (drugOutput) {
    drugOutput.textContent =
        `${drugInfo.name} should be taken at ${drugInfo.dosage}, ${drugInfo.frequency}.`;
}

// Function 1
function greetUser(name) {
    return `Welcome, ${name}!`;
}

// Function 2
function saveMessage(message) {
    localStorage.setItem("userMessage", message);
}

// Local Storage Retrieval
const savedMessage = localStorage.getItem("userMessage");

if (savedMessage && document.getElementById("formOutput")) {
    document.getElementById("formOutput").textContent =
        `Last saved message: ${savedMessage}`;
}

// Event Listener + Conditional
document.getElementById("contactForm")
    ?.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const message =
            document.getElementById("message").value;

        if (message.length < 10) {
            alert("Message must contain at least 10 characters.");
        } else {
            saveMessage(message);

            document.getElementById("formOutput").textContent =
                greetUser(name);
        }
    });