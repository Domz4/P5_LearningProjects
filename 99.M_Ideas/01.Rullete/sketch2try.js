let losowanie;
function setup() {
  createCanvas(1000,600);
  losowanie = new ruletka();
}
function draw() {
  background(0);
    losowanie.show();
    losowanie.move();
    losowanie.stop();
}

class ruletka {
  constructor(x = width, y = height/2) {
    this.w = 400;
    this.h = 150;
    this.x = x;
    this.y = y;
    this.spread = 0;

    this.xspeed = 0.001;
    this.velocity = 0.01;
    this.ease = 0.001;
  }
  move(){
    this.velocity += this.ease;
    this.xspeed += this.velocity;
    this.x -= this.xspeed;

    if(this.x < -this.w) {
      this.x = width + this.w;
    }

  }
  show(){
    rectMode(CENTER);
    fill(255);
    rect(this.x ,this.y,this.w,this.h);
    this.spread += 400

    // console.log(this.x)
  }
  stop() {
    if(keyCode === 32) {
      this.x = 400
    }
  }
}
