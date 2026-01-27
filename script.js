const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

/**
 * Handle Window Resizing
 */
function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', handleResize);
handleResize();

/**
 * Initialize Portfolio Display
 */
function initPortfolio() {
    // Clear canvas since we removed animation
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Show the main content wrapper
    const portfolioContainer = document.getElementById('portfolioView');
    if (portfolioContainer) {
        portfolioContainer.classList.add('is-visible');
    }
}

// Run the initialization
initPortfolio();