document.addEventListener('DOMContentLoaded', () => {
    // Canvas Setup
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');

    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);
    handleResize();


        }    

    // Sidebar Row Interactivity
    const rows = document.querySelectorAll('.opt-row');
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'translateX(10px) scale(1.02)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'translateX(0) scale(1)';
        });
    });

    initView();
});

// Fixed the ID here to match "portfolioView"
window.onload = () => {
    const portfolio = document.getElementById('portfolioView');
    if(portfolio) portfolio.style.opacity = 1;
};