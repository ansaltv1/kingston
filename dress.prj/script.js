// Function to handle category navigation
function navigateTo(category) {
    // This builds the path: wwwwwwwwwww/male/, etc.
    const path = `wwwwwwwwwww/${category}/`;
    
    console.log("Opening premium collection: " + category);
    
    // Redirects the user to that folder path
    window.location.href = path;
}

// Ensure the page loads smoothly
window.onload = () => {
    console.log("King of Fashion online store is ready.");
};