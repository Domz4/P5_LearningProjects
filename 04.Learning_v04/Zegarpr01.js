let timer1, timer2;
let zegary;
function setup() {
  angleMode(DEGREES);
  createCanvas(400,400);
  timer1 = createP('timer1');
  timer2 = createP('timer2');
  zegar(timer1,500);
  zegar(timer2,300);
  zegary = new Zegary();
}
function draw() {
  background(0);
  zegary.strzalka();
  zegary.tarcza();
}
function zegar(jed,czas) {
  let counter = 0;
  setInterval(timer,czas);
  function timer() {
      jed.html(counter);
      counter++;
  }

}
class Zegary {
  constructor(x=width/2,y=height/2,r=100) {
    this.x = x
    this.y = y
    this.r = r
  }
  tarcza() {
   strokeWeight(4);
   stroke(255);
   noFill();
   ellipse(this.x,this.y,this.r);
  }
  strzalka() {
    stroke(255,255,0);
    let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    line(this.x,this.y,this.x+cos(s),this.y+sin(s));
  }

}
