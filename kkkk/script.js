document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.opt-row');

    rows.forEach(row => {
        // Increases size slightly when mouse enters
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.03)';
        });

        // Returns to normal size when mouse leaves
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'scale(1)';
        });
    });
});