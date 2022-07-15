class Ray {
  constructor(viewer, diamondX, diamondY, mirrorY) {
    this.viewer = viewer;
    this.mirrorDiamondX = diamondX;
    this.mirrorDiamondY = diamondY;
    this.mirrorY = mirrorY;
    this.slope = 0;
    this.reflectionPointX = 0;
    this.diamondY = 2 * mirrorY - diamondY;
    this.diamondX = diamondX;
  }
  show() {
    stroke("blue");
    line(
      this.viewer.getX() + this.viewer.getW() / 2,
      this.viewer.getY(),
      this.reflectionPointX,
      this.mirrorY
    );
    //TODO: get diamond radius from constants file
    line(
      this.reflectionPointX,
      this.mirrorY,
      this.diamondX,
      this.diamondY - 20
    );
    stroke("yellow");
    line(
      this.reflectionPointX,
      this.mirrorY,
      this.mirrorDiamondX,
      this.mirrorDiamondY
    );
  }
  update() {
    this.updateSlope();
    this.updateMirrorIntercept();
  }
  updateSlope() {
    //dx/dy
    this.slope =
      (this.mirrorDiamondY - this.viewer.getY()) /
      (this.mirrorDiamondX - (this.viewer.getX() + this.viewer.getW() / 2));
  }
  //TODO: make so it works for the whole mirror line, instead of just y = b
  updateMirrorIntercept() {
    //point slope form: y-y1 = m(x-x1), (y1,x1) = (this.mirrorDiamondX, this.mirrorDiamondY)
    // y-this.mirrorDiamondY = this.slope(x-this.mirrorDiamondX)
    this.reflectionPointX =
      (this.mirrorY - this.mirrorDiamondY) / this.slope + this.mirrorDiamondX;
  }
}
