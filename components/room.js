class Room {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show() {
    fill("white");
    stroke("black");
    rect(this.x, this.y, this.w, this.h);
  }
}
