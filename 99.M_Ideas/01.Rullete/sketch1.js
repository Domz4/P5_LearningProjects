let ruletka = []

let cx = 100
function setup() {
  createCanvas(1000,400);
  for (let i=0; i<13;i++) {
    cx += 100
    ruletka[i] = new Ruletka(width+cx,height/2,100);
  }
}
function draw() {
  background(0);
  for (let i=0; i<ruletka.length;i++) {
    ruletka[i].move();
    ruletka[i].show();

  }
  rect(width/2,0,5,300)
}
function keyPressed() {
  for (let i=0; i<ruletka.length;i++) {
    ruletka[i].stop();
  }
}

class Ruletka {
  constructor(x = width/2,y = height/2,r = 100) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xspeed = -10
    this.gravity = 1
    this.velocity = 1
  }
  move() {
    this.x += this.xspeed
    if (this.x < -100) {
      this.x = width+this.r;
    }
  }
  show() {
    rectMode(CENTER);
    rect(this.x,this.y,this.r);
  }
  load() {

  }
  stop() {
    if(keyCode === 32) {
      this.xspeed = 0
    }
  }
}
