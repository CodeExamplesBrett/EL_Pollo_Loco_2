class Cloud extends MovableObject {
  x = 500;
  y = 20;
  height = 250;
  width = 500;

  constructor() {
    super().loadImage("img/5.Fondo/Capas/4.nubes/1.png");
    this.x = 200 + Math.random() * 2000;
    this.animate();
  }

  animate() {
    this.moveInt = setInterval(() => {
      this.moveLeft();
      if (this.x + this.width < 0) {
        this.resetPosition();
      }
    }, 1000 / 60);
  }

  resetPosition() {
    this.x = 10 + Math.random() * 1990;
  }

  stopCloud() {
    clearInterval(this.moveInt);
  }
}
