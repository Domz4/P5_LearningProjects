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
    bubbles[i].clicked(mouseX, mouseY);

  }
}
  function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].look();
    bubbles[i].hover(mouseX,mouseY);
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
		this.x += random(0);
		this.y +=	random(0);
	}
	look() {
    // migające kolorki xd
    // this.c = random(0,255);
    // this.g = random(0,255);
    // this.b = random(0,255);

    fill(this.bright,55);
    strokeWeight(4);
    stroke(this.c,this.g,this.b,this.alpha);
    ellipse(this.x,this.y,this.r);
	}
  clicked(x,y) {
    let d = dist(x,y,this.x, this.y);
    if (d <= this.r/2) {
      this.bright = 255

    }
  }
  hover(px,py) {
    let d = dist(px,py,this.x, this.y);
      if (px >= this.r/2 || py >= this.r/2) {
          this.alpha = 0
      }
  }
}




// Do gry xd !!
// let d = dist(x,y,this.x, this.y);
//   if (x >= this.r/2 || y >= this.r/2) {
//       this.alpha = 100
