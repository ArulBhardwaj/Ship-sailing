var seaImg, sea;
var shipImg1, ship;
function preload() {
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png");
}

function setup() {
  createCanvas(400, 400);
  sea = createSprite(200,180);
  sea.addImage(seaImg);
  sea.x = seaImg.width / 2;
  ship = createSprite(100,300);
  ship.addAnimation("sailing",shipImg1);
  ship.scale = .2;
}

function draw() {
  background("blue");
  sea.velocityX = -6;
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
  drawSprites();
}