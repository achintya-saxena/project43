var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(40);
  fill("Yellow");
  text("Score:" + score, 450, 35);

  fill("white");
  text("TREASURE HUNT GAME",10,470);
  
  textSize(20);
  fill("lightBlue");
  text("Answer 3 questions correct to unlock the treasure!!",500,460)

  if(score === 3) {
    clear()
    background(bg2)
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}