let snake;
let apple;
let scl = 20
function setup() {
  createCanvas(800,800);
  snake = new Snake(0,0);
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let col = random(0,width/scl);
  let row = random(0,height/scl);
  apple = createVector(floor(col),floor(row));
  apple.mult(scl);
}

function draw() {
  background(0);
  snake.death();
  snake.move();
  snake.show();
  snake.eat();
  noStroke();
  fill(255,10,100);
  rect(apple.x,apple.y,scl);
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.dir(0,-1);
  }
  else if(keyCode === DOWN_ARROW) {
    snake.dir(0,1);
  }
  else if(keyCode === LEFT_ARROW) {
    snake.dir(-1,0);
  }
  else if(keyCode === RIGHT_ARROW) {
    snake.dir(1,0);
  }

}
