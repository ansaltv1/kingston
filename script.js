const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Fireworks Particle System
let particles = [];
let fireworksActive = false;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 4 + 2;
        this.vx = Math.cos(angle) * velocity;
        this.vy = Math.sin(angle) * velocity;
        this.alpha = 1;
        this.color = `hsl(${Math.random() * 20 + 200}, 80%, 60%)`;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.015;
    }
    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (fireworksActive) {
        for (let i = 0; i < 3; i++) {
            particles.push(new Particle(canvas.width / 2, canvas.height / 2));
        }
    }
    particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
}

// Start Timeline
animate();
setTimeout(() => {
    fireworksActive = true;
    setTimeout(() => {
        fireworksActive = false;
        document.getElementById('portfolioContent').classList.add('show');
    }, 2000);
}, 1000);