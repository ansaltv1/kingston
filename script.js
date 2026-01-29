document.addEventListener('DOMContentLoaded', () => {
    const portfolio = document.getElementById('portfolioView');
    
    // Trigger entrance visibility
    setTimeout(() => {
        if (portfolio) portfolio.classList.add('is-visible');
    }, 500);

    // Sidebar interactivity
    const rows = document.querySelectorAll('.opt-row');
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(-10px)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0)';
        });
    });
});