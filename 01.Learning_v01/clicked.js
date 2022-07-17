let bubbles = [];

function setup() {
  createCanvas(800,800)
    for(let i=0;i<10;i++) {
      let m = random(width);
      let n = random(height);
      let o = random(15,100);
      let b = new Bubble(m,n,o,random(255),random(255),random(255));
      bubbles.push(b);
    }
}
function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    if(bubbles[i].contains(mouseX,mouseY)) {
      bubbles.splice(i,1);
    }
  }
}


function draw() {
    background(0);
  for (let i = 0; i < bubbles.length; i++) {
    if(bubbles[i].contains(mouseX,mouseY)) {
      bubbles[i].changeColor(255);
    }
    else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].look();

  }
}



// Właściwości bańki
class Bubble {
	constructor(x, y, r, c, g, b) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.c = c;
		this.g = g;
 		this.b = b;
    this.bright = 0;
    this.alpha = 255
 	}
	move() {
		this.x += random(-1,1);
		this.y +=	random(-1,1);
	}
	look() {
    // migające kolorki xd
    // this.c = random(0,255);
    // this.g = random(0,255);
    // this.b = random(0,255);

    fill(255,100);
    strokeWeight(8);
    stroke(this.c,this.g,this.b,this.bright);
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
// Do gry xd !!
// let d = dist(x,y,this.x, this.y);
//   if (x >= this.r/2 || y >= this.r/2) {
//       this.alpha = 100
