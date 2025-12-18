let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.qty++;
    } else {
        cart.push({ id, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCount();
    alert("Added to cart!");
}

function updateCount() {
    const count = cart.reduce((sum, i) => sum + i.qty, 0);
    document.querySelectorAll("#cart-count").forEach(e => e.textContent = count);
}

function renderCart() {
    const container = document.getElementById("cart-items");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    container.innerHTML = "";
    cart.forEach(item => {
        container.innerHTML += `
            <div class="cart-item">
                <p>Product ID: ${item.id}</p>
                <p>Quantity: ${item.qty}</p>
                <button onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;
    });
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCount();
    renderCart();
}

updateCount();
renderCart();
