let dia = 100;
function setup() {
  createCanvas(800, 800);
  background(137,255,160);
}

function draw() {
  
}
function mouseDragged(){
  fill(255,2,92);
  noStroke();
  //circle(mouseX, mouseY, mouseX-pmouseX); 
  circle(mouseX, mouseY, dia);
  circle(width-mouseX, mouseY, dia);
  circle(mouseX, height-mouseY, dia);
  circle(width-mouseX, height-mouseY, dia);
  
}
function keyPressed(){
  if(key == ' ') background(137,255,160);
  if(key == 'r') fill(
  random(255),
  random(255),
  random(255),
  );
  if(keyCode == UP_ARROW){
    dia = dia + 5;
  if (dia > 100) dia = 100;
  }
  if (keyCode == DOWN_ARROW) {
    dia = dia - 5;
    if (dia < 10) dia = 10;
  }
  if (keyCode == LEFT_ARROW) spray = min(spray - 5, 100);
  if (keyCode == RIGHT_ARROW) spray = max(spray + 5, 10);
};        


