let x = 0.01
let y = 0
let z = 0
let s = 10
let b = 8/3
let r = 28
let points = new Array();
function setup() {

  createCanvas(1200,1200,WEBGL);
  colorMode(HSB);

}
function draw() {
  background(0);
  let dt = 0.01;
  let dx = (s*(y-x))*dt;
  let dy = (x*(r-z)-y)*dt;
  let dz = (x*y-b*z)*dt;
  x = x+dx;
  y = y+dy;
  z = z+dz;

  points.push(new p5.Vector(x, y, z));

  translate(0,0,-80);

  scale(6);
  stroke(255);
  noFill();
  point(x,y,z);
}
//   let hu = 0;
//   beginShape();
//
//   for (let i of points) {
//     stroke(hu,255,255);
//     vertex(i.x, i.y, i.z);
//
//     hu += 1;
//     if (hu>255) {
//       hu=0;
//     }
//   }
//   endShape();
// }
// function mouseDragged() {
// let camX = map(mouseX, 0, width, -600, 600);
// let camY = map(mouseY, 0, height, -600, 600);
// camera(camX, camY, (height / 2.0) / tan(PI * 60.0 / 180.0), 0, 0, 0, 0, 1, 0);
// }
