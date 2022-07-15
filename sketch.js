//mvp: the viewer is the mouse. we calculate the vector from the diamond to the mouse to get the angle shape
//later make it so the angle is controlled by another diamond
//let's get right to the angle stuff as it's the key

let mirror;
let mirrorDiamond;
let viewer;
let ray;
let room;
setup = function () {
  //TODO: use typescript!
  //TODO: use a constants file
  const roomWidth = 600;
  const roomHeight = 250;
  const roomX = window.innerWidth / 2 - roomWidth / 2;
  const roomY = window.innerHeight / 2;

  const diamondX = roomX + (roomWidth * 3) / 4;
  const diamondY = roomY + (roomHeight * 1) / 2;

  const viewerX = roomX + roomWidth / 4;
  const viewerY = roomY + (roomHeight * 1) / 2;

  const diamondRadius = 40;
  const mirrorDiamondX = diamondX;
  const mirrorDiamondY = roomY - (diamondY - roomY) - diamondRadius / 2;

  createCanvas(window.innerWidth, window.innerHeight);

  const buildRoom = () => {
    room = new Room(roomX, roomY, roomWidth, roomHeight);
    mirror = new Mirror(roomX, roomY, roomX + roomWidth, roomY);
    diamond = new Diamond(diamondX, diamondY, diamondRadius);
    mirrorDiamond = new Diamond(mirrorDiamondX, mirrorDiamondY, diamondRadius);
    viewer = new Viewer(viewerX, viewerY, roomX, roomY, roomWidth, roomHeight);
    console.log(mirrorDiamondY, mirrorDiamondX, roomY);
    ray = new Ray(viewer, mirrorDiamondX, mirrorDiamondY, roomY);
  };

  buildRoom();
};

draw = function () {
  background(255);
  room.show();

  //TODO: find intersection of ray and mirror, then create the ray to the diamond

  ray.update();
  ray.show();

  viewer.over();
  viewer.update();
  viewer.show();

  diamond.show();
  mirrorDiamond.show();
  mirror.show();
};

function mousePressed() {
  viewer.pressed();
}

function mouseReleased() {
  viewer.released();
}
