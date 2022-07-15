// Click and Drag an object
// referenced from Daniel Shiffman <http://www.shiffman.net>

class Viewer {
  constructor(x, y, roomX, roomY, roomWidth, roomHeight) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.offsetX = 0;
    this.offsetY = 0;
    this.roomWidth = roomWidth;
    this.roomHeight = roomHeight;
    this.roomX = roomX;
    this.roomY = roomY;
  }

  over() {
    // Is mouse over object
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = Math.min(
        this.roomX + this.roomWidth - this.w,
        Math.max(this.roomX, mouseX + this.offsetX)
      );
      this.y = Math.min(
        this.roomY + this.roomHeight - this.h,
        Math.max(this.roomY, mouseY + this.offsetY)
      );
    }
  }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  pressed() {
    // Did I click on the rectangle?
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.dragging = true;
      //TODO: use room as bounding box
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getW() {
    return this.w;
  }
  getH() {
    return this.h;
  }
}
