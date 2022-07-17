let drops = [];
function setup() {
  frameRate(144)
  createCanvas(1280,720);
    for(let i=0; i<300; i++) {
    drops[i] = new Rain();
  }
}
function draw() {
  background(0,9,20);
  for(huj of drops) {
      huj.move();
      huj.show();
  }
}




class Rain {
  constructor() {
    this.x = random(width);
    this.y = random(-50,-500);
    this.z = random(0,20);
    this.yspeed = map(this.z,0,20,3,8);
    this.xspeed = random(0,2)
    this.size = map(this.z,0,20,10,40);
    this.rot = map(this.z,0,20,0,5);
    this.grubosc = map(this.z,0,20,1,4);
    this.grav = 0.1

  }
  move() {
    this.y = this.y + this.yspeed
    this.yspeed += this.grav
      if (this.y>height ) {
        this.y = random(-50,-500);
        this.yspeed = map(this.z,0,20,3,8);
      }
  }
  show() {
    strokeWeight(this.grubosc);
    //niebieski
    //stroke(0,30,200,150);
    stroke(250,30,200,150);
    line(this.x,this.y,this.x,this.y+this.size);
  }
}
