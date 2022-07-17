
let rStart = 2
let rinc = 0.0001
function setup() {
  createCanvas(1200,800);
  background(0);
  logisticMap();
}

function logisticMap() {
  for(let r = rStart; r<4; r = r + rinc){
    let x = Math.random();
    for(let i=0;i<300;i++) {
      x = r*x*(1-x);
       if (i > 250){
       point(map(r, rStart, 4, 0, width), height - map(x, 0, 1, 0, height * 0.8));
       }
    }
      stroke(0, map(x, 0, 1, 0, 255), 0);
  }
}

function draw() {

}
