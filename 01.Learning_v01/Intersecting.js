let bubbles = [];

function setup() {
  createCanvas(1200,800);
  for (let i=0; i<12; i++) {
    let y = random(height);
    let x = random(width);
    let r = random(50,200);
    bubbles[i] = new Bubble(x,y,r);
  }
}

function draw() {
  background(0);

  for (let b of bubbles) {
    b.look();
    b.move();
    let overlaping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersecting(other)) {
          overlaping = true

      }
    }
    if (overlaping) {
       b.changeColor(255);
     } else {
       b.changeColor(0);
     }
  }
}


// Właściwości bańki
class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
    this.bright = 200;
 	}
  intersecting(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r/2 + other.r/2);

  }
	move() {
		this.x += random(-1,1);
		this.y +=	random(-1,1);
	}

	look() {
    fill(this.bright,100);
    strokeWeight(4);
    stroke(200,0,100);
    ellipse(this.x,this.y,this.r);
	}

  changeColor(brightness) {
    this.bright = brightness;
  }

  contains(x,y) {
    let d = dist(x,y,this.x, this.y);
      if (d <= this.r/2) {
        return d
    }
  }
}
