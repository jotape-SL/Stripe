export class GradientAnimation {
  constructor() {
    this.cnv = document.querySelector(`canvas`);
    this.ctx = this.cnv.getContext(`2d`);

    this.circlesNum = 15;
    this.minRadius = 400;
    this.maxRadius = 400;
    this.speed = 0.005;

    (window.onresize = () => {
      this.setCanvasSize();
      this.createCircles();
    })();
    this.drawAnimation();
  }
  setCanvasSize() {
    this.w = this.cnv.width = window.innerWidth * devicePixelRatio;
    this.h = this.cnv.height = window.innerHeight * devicePixelRatio;
    this.ctx.scale(devicePixelRatio, devicePixelRatio);
  }
  createCircles() {
    this.circles = [];
    for (let i = 0; i < this.circlesNum; ++i) {
      this.circles.push(
        new Circle(this.w, this.h, this.minRadius, this.maxRadius)
      );
    }
  }
  drawCircles() {
    this.circles.forEach((circle) => circle.draw(this.ctx, this.speed));
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }
  drawAnimation() {
    this.clearCanvas();
    this.drawCircles();
    window.requestAnimationFrame(() => this.drawAnimation());
  }
}

class Circle {
  constructor(w, h, minR, maxR) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = Math.random() * (maxR - minR) + minR;
    // this.fourthColor = `hsla(${Math.random() * 360}, 100%, 50%, 0)`;
    this.firstColor = `hsla(271, 100%, 50%, 1)`;
    this.secondColor = `hsla(357, 100%, 50%, 1)`;
    this.thirdColor = `hsla(197, 100%, 60%, 1)`;
    this.fourthColor = `hsla(41, 100%,67%, 1)`;
    this.shadeOne = `hsla(271, 100%, 50%, 0)`;
    this.shadeTwo = `hsla(357, 100%, 50%, 0)`;
    this.shadeThree = `hsla(197, 100%, 65%, 0)`;
    this.shadeFour = `hsla(41, 100%, 67%, 0)`;
  }
  draw(ctx, speed) {
    this.angle += speed;
    const x = this.x + Math.cos(this.angle) * 200;
    const y = this.y + Math.sin(this.angle) * 200;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
    gradient.addColorStop(0, this.firstColor);
    gradient.addColorStop(0, this.secondColor);
    gradient.addColorStop(0, this.thirdColor);
    gradient.addColorStop(0, this.fourthColor);
    gradient.addColorStop(1, this.shadeOne);
    gradient.addColorStop(1, this.shadeTwo);
    gradient.addColorStop(1, this.shadeThree);
    gradient.addColorStop(1, this.shadeFour);

    ctx.globalCompositeOperation = `overlay`;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.onload = () => {
  new GradientAnimation();
};
