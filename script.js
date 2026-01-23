const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let fireworksActive = false;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.destX = (Math.random() - 0.5) * 300;
        this.destY = (Math.random() - 0.5) * 300;
        this.speed = Math.random() * 0.05 + 0.02;
        this.alpha = 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    }
    update() {
        this.x += this.destX * this.speed;
        this.y += this.destY * this.speed;
        this.alpha -= 0.01;
    }
    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createBurst() {
    // Burst around the center of the screen
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(canvas.width / 2, canvas.height * 0.4));
    }
}

function animate() {
    ctx.fillStyle = 'rgba(79, 174, 180, 0.79)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (fireworksActive) createBurst();

    particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
}

// THE TIMELINE
setTimeout(() => {
    // Start fireworks after the 2.5s title animation ends
    fireworksActive = true;
    animate();

    // Stop fireworks after 2 seconds and show content
    setTimeout(() => {
        fireworksActive = false;
        document.getElementById('portfolioContent').classList.add('show');
    }, 2000);

}, 2500);
