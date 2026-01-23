const amountInput = document.getElementById('manualAmount');
const outcomeDisplay = document.getElementById('outcomeDisplay');
const qrContainer = document.getElementById('qrcode');

const UPI_ID = "6282753288@okaxis"; // Updated with your contact number style UPI
const MERCHANT_NAME = "Give Like A King Trust";

const updateUI = () => {
    const amount = amountInput.value || 0;
    const selectedCause = document.querySelector('input[name="cause"]:checked').value;

    // Dynamic Impact Logic
    if (selectedCause === "food") {
        outcomeDisplay.innerText = ` Providing approx. ${Math.floor(amount / 50)} Nutritious Meals`;
    } else if (selectedCause === "dress") {
        outcomeDisplay.innerText = ` Gifting approx. ${Math.floor(amount / 350)} Clothing Sets`;
    } else if (selectedCause === "education") {
        outcomeDisplay.innerText = ` Supporting ${Math.floor(amount / 500)} Students' Studies`;
    }

    // Dynamic QR Generator
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR&tn=${encodeURIComponent('Donation_'+selectedCause)}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(upiLink)}`;
    
    qrContainer.innerHTML = `<img src="${qrUrl}" alt="Scan to Pay">`;
};

// Listeners
amountInput.addEventListener('input', updateUI);
window.onload = updateUI;

// Live Feed Logic
const feed = document.getElementById('liveFeed');
const cities = ['Kochi', 'Delhi', 'Mumbai', 'Chennai', 'Dubai'];
setInterval(() => {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const amt = (Math.floor(Math.random() * 5) + 1) * 1000;
    const li = document.createElement('li');
    li.innerHTML = `● A King from ${city} donated ₹${amt.toLocaleString('en-IN')}`;
    feed.prepend(li);
    if(feed.children.length > 3) feed.lastChild.remove();
}, 6000);

// Confirm Button
document.getElementById('confirmPay').onclick = function() {
    alert("Thank you! For receipts, please WhatsApp your transaction screenshot to 6282753288.");
};