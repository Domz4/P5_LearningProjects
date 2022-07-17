let bubble1, bubble2;

function setup() {
  createCanvas(800,800)
  bubble1 = new Bubble(200,400);
  bubble2 = new Bubble(600,400,200);
 }

function draw() {
  background(0);
  if (bubble1.intersecting(bubble2)) {
    background(150,0,50);
  }

  bubble1.look();
  bubble2.look();
  bubble1.move();
  bubble2.move();
}
// Właściwości bańki
class Bubble {
	constructor(x, y, r = 50, xspeed = 2, yspeed = 1) {
		this.x = x;
		this.y = y;
		this.r = r;
    this.xspeed = xspeed
    this.yspeed = yspeed
 	}
  intersecting(other) {
    let d = dist(this.x,this.y, other.x, other.y);
    return d < this.r/2 + other.r/2;

  }
	move() {
    this.x += this.xspeed
    this.y += this.yspeed
		if (this.x > width - this.r/2 || this.x < this.r/2) {
      this.xspeed = -this.xspeed
    }
    if (this.y > width - this.r/2 || this.y < this.r/2) {
        this.yspeed = -this.yspeed
    }
	}

	look() {
    noFill();
    strokeWeight(4);
    stroke(255);
    ellipse(this.x,this.y,this.r);
  }

  contains(x,y) {
    let d = dist(x,y,this.x, this.y);
      if (d <= this.r/2) {
        return d
    }
  }
}
