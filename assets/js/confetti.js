/* ============================================
   CONFETTI EFFECT - LIGHTWEIGHT VERSION
   ============================================ */

class Confetti {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.confetti = [];
    
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  create(particleCount = 150) {
    const colors = ['#ff69b4', '#ffc0cb', '#ffb6c1', '#ffd1dc', '#ffe4e1', '#fff0f5'];
    
    for (let i = 0; i < particleCount; i++) {
      this.confetti.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height - this.canvas.height,
        v: Math.random() * 2 + 1,
        vx: Math.random() * 4 - 2,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        friction: 0.99,
        gravity: 0.08,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5
      });
    }

    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.confetti = this.confetti.filter(particle => {
      particle.y += particle.v;
      particle.v += particle.gravity;
      particle.x += particle.vx;
      particle.vx *= particle.friction;
      particle.rotation += particle.rotationSpeed;

      if (particle.y > this.canvas.height) {
        return false;
      }

      this.ctx.save();
      this.ctx.translate(particle.x, particle.y);
      this.ctx.rotate((particle.rotation * Math.PI) / 180);
      this.ctx.fillStyle = particle.color;
      this.ctx.globalAlpha = Math.max(0, 1 - particle.y / this.canvas.height);
      this.ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
      this.ctx.restore();

      return true;
    });

    if (this.confetti.length > 0) {
      requestAnimationFrame(() => this.animate());
    }
  }

  stop() {
    this.confetti = [];
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
