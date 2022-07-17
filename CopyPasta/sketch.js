let col = 10;
let rows = 10;
let colors = [];

function make2Darray(col,rows) {
  let arr = new Array(col);
    for(let i=0; i<arr.length; i++) {
      arr[i] = new Array(rows);
    }
  return arr;
}


function setup() {
  createCanvas(400,400);
  colors = make2Darray(col,rows);
   for(let i=0; i<0; i++) {
     for(let j=0; j<0; i++) {
       colors[i][j] = random(255);
     }
   }
}

function draw() {
  background(0);
  for(let i=0; i < col; i++) {
    for(let j=0; j < rows; i++) {
    let x = i*30;
    let y = j*30;
    //fill(colors[i][j]);
    rect(x,y,30);

    }
  }
}
