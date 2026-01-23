const grid = document.getElementById('product-grid');
const sizes = ['S', 'M', 'L', 'XL'];

// This loop runs 30 times to create your 30 products
for (let i = 1; i <= 30; i++) {
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    
    // The "src" below points to your images (dress1.jpg, dress2.jpg, etc.)
    grid.innerHTML += `
        <div class="product-card">
            <img src="dress${i}.jpg" alt="Dress ${i}" style="width:100%; height:auto; margin-bottom:10px;">
            <h3>Luxury Dress ${i}</h3>
            <p>Size: ${randomSize}</p>
            <button onclick="placeOrder()">Order</button>
        </div>
    `;
}

function placeOrder() {
    const note = document.getElementById('notification');
    note.style.display = 'block';
    setTimeout(() => {
        note.style.display = 'none';
    }, 2000);
}