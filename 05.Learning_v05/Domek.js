class Domek {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.a = random(50, 75);
    this.b = random(20, 50);
    this.a = map(this.a, 0, 100, 0, width);
    this.b = map(this.b, 0, 100, 0, height);
    this.rfill = [random(255), random(255), random(255)];
    // usefull transformations 
    this.TLx = (width - this.a)/2  
    this.TLy = (height - this.b)/2
  

    //dach
    this.tx = this.TLx - random(100,150);
    this.ty = this.TLy; 
    this.tx2 = width - this.tx; 
    this.tsx = this.x + random(-100,100);
    this.tsy = random(0,100);
    //dooor 
    this.doorX = this.tx2 - random(200,250);
    this.doorY = this. 
    
  }
  prostokat() {
    rectMode(CENTER);
    fill(this.rfill[0], this.rfill[1], this.rfill[2]);
    translate(0, 100);
    rect(this.x, this.y, this.a, this.b);
    ellipse(this.doorX,this.ty,20)
    triangle(this.tx,this.ty,this.tx2,this.ty,this.tsx,this.tsy)
  }

}
let domek;

function setup() {
  createCanvas(1200, 1200);
  background(255);
  domek = new Domek();
  domek.prostokat();

}

function draw() {
}
function mousePressed() {
  redraw();
}