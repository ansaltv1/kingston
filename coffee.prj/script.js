const products = [
    { id: 1, name: 'Hot Espresso', price: 120, img: 'coffee.png' },
    { id: 2, name: 'Cappuccino', price: 180, img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=300' },
    { id: 3, name: 'Caramel Latte', price: 195, img: 'https://images.unsplash.com/photo-1570968865863-94660cee104c?w=300' },
    { id: 4, name: 'Iced Americano', price: 210, img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300' },
    { id: 5, name: 'Cold Brew', price: 240, img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300' },
    { id: 6, name: 'Cheese Croissant', price: 150, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300' }
];

let cart = [];

window.onload = () => {
    renderProducts();
    generateInvoice();
};

// Generate a random invoice number
function generateInvoice() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('invoiceNum').value = 'KC-' + randomNum;
}

// Display products in the grid
function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>₹${p.price}</p>
            <input type="number" id="qty-${p.id}" class="qty-input" value="1" min="1">
            <button onclick="addToBill(${p.id})">Add Item</button>
        </div>
    `).join('');
}

// Add item to the billing table
function addToBill(id) {
    const product = products.find(p => p.id === id);
    const qtyField = document.getElementById(`qty-${id}`);
    const quantity = parseInt(qtyField.value);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity");
        return;
    }

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty += quantity;
    } else {
        cart.push({ ...product, qty: quantity });
    }

    // Reset quantity input to 1
    qtyField.value = 1;
    updateBillTable();
}

// Update the table and total
function updateBillTable() {
    const tbody = document.getElementById('billBody');
    let grandTotal = 0;

    tbody.innerHTML = cart.map((item, index) => {
        const rowTotal = item.price * item.qty;
        grandTotal += rowTotal;
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>₹${item.price}</td>
                <td>₹${rowTotal}</td>
            </tr>
        `;
    }).join('');

    document.getElementById('grandTotal').innerText = grandTotal;
}