const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Smartphone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Smart Watch", price: 8000 }
];

const list = document.getElementById("product-list");

products.forEach(p => {
    list.innerHTML += `
        <div class="card">
            <h3>${p.name}</h3>
            <p>Price: ₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `;
});
