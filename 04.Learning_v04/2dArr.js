let cols = 400/20;
let rows = 400/20;
let r = [];
let b = [];
let g = [];


function make2darray(cols,rows) {
  let arr = new Array(cols);
  for(let i=0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
function setup() {
  createCanvas(400,400);
  r = make2darray(cols, rows);
  g = make2darray(cols, rows);
  b = make2darray(cols, rows);
  for(let i=0;i < cols; i++) {
    for(let j=0;j < rows; j++) {
      r[i][j] = random(255);
      b[i][j] = random(255);
      g[i][j] = random(255);
    }
  }
}
function draw() {
  background(0);

  for(let i=0;i < cols; i++) {
    for(let j=0;j < rows; j++) {
      let x = i*20;
      let y = j*20;
      fill(r[i][j],b[i][j],g[i][j])
      noStroke();
      rect(x,y,20);
    }
  }
}
