const products = [
    { id: "p1", name: "Laptop" },
    { id: "p2", name: "Smartphone" },
    { id: "p3", name: "Headphones" }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
