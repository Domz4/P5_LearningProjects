let czapki = [];
let x = -50
let rows = 11
let r = []
let g = []
let b = []

function setup() {
  createCanvas(1000,600);
  background(15);
  button = createButton('losulosulosulosu');
  button.position(width/2, 0);

  for(let i = 0; i < rows; i++) {
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
    x += 100;
    czapki[i] = new rul(x,height/2);

  }
}
function draw() {

  for(let i = 0; i < czapki.length; i++) {
    fill(r[i],g[i],b[i]);
    czapki[i].show();
    czapki[i].move();
  }
}
class rul {
  constructor(x = 0, y = height/2) {
    this.w = 100;
    this.h = 100;
    this.x = x;
    this.y = y;

    this.xspeed = 1
    this.velocity = 0.1
    this.ease = 0.1
  }
  move(){
    this.xspeed += 0.001
    this.x -= this.xspeed;
    if(this.x < -50) {
      this.x = width+50;
    }
  }
  show() {
    stroke(10);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
  }
}
