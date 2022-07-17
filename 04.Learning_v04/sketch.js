let bubble = [];

function setup() {
  createCanvas(800,800);
  for (let i=0;i<5;i++) {
    bubble.push(new Bubble())
  }
}
function draw() {
  background(0);
    for (let j=0;j<bubble.length;j++) {
      bubble[j].move();
      bubble[j].show();
    }
}
class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(25,50);
    this.history = [];
    this.xspeed = random(3,5);
    this.yspeed = random(2,6);
    this.rainbow = 0;
  }
  move() {
    // this.x = constrain(this.x, 0, width);
    // this.y = constrain(this.y, 0, height);
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if(this.x>width-this.r/2 || this.x < this.r/2) {
      this.xspeed = -this.xspeed;
    }
    if(this.y>height-this.r/2 || this.y < this.r/2) {
      this.yspeed = -this.yspeed;
    }
    let v = createVector(this.x,this.y);
    constrain(this.rainbow,0,256);
    this.rainbow ++
    if (this.rainbow == 255) {
      this.rainbow = 0
    }


    this.history.push(v);
    if (this.history.length>100) {
       this.history.splice(0,1);
    }
  }
  show() {
    push();
    noFill();
    stroke(255,0,255)
    ellipse(this.x,this.y,this.r);
    pop();
    push();
    beginShape();
    stroke(this.rainbow,-this.rainbow,this.rainbow);
    for(let i=0;i<this.history.length;i++){
      let pos = this.history[i];
      noFill();
      vertex(pos.x,pos.y);

    }
    endShape();
    pop();
  }
}
