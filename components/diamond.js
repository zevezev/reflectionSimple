class Diamond {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  show() {
    strokeWeight(3);
    stroke("black");
    fill("lightgreen");
    ellipse(this.x, this.y, this.radius);
  }
}
