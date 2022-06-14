let dia = 100;
let spray = 50;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
}

function mouseDragged() {
  noStroke();
  sprayCan(mouseX, mouseY, dia);
  sprayCan(width-mouseX, mouseY, dia);
  sprayCan(mouseX, height-mouseY, dia);
  sprayCan(width-mouseX, height-mouseY, dia);
}

function sprayCan(x, y, d) {
  circle(x+random(-spray, spray), y+random(-spray, spray), d/2);
}

function keyPressed() {
  if (key == ' ') background(0);
  if (key == '1') fill(255, 0, 0); // red
  if (key == '2') fill("#00ff00"); // green
  if (key == '3') fill("Blue"); // blue
  if (key == 'r') {
    fill(random(255), random(255), random(255));
  }
  if (keyCode == UP_ARROW) {
    dia = dia + 5;
    if (dia > 100) dia = 100;
  }
  if (keyCode == DOWN_ARROW) {
    dia = dia - 5;
    if (dia < 10) dia = 10;
  }
  if (keyCode == LEFT_ARROW) spray = min(spray - 5, 100);
  if (keyCode == RIGHT_ARROW) spray = max(spray + 5, 10);
}