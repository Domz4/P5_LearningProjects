class Cell {
  constructor(i,j) {
    this.i = i
    this.j = j
    this.walls = [true,true,true,true];
    this.visited = false;
  }
  show() {
    let x = this.i * w
    let y = this.j * w
    stroke(255);
      if(this.walls[0]) {
        line(x,y,x+w,y);
      }
      if(this.walls[1]) {
        line(x+w,y,x+w,y+w);
      }
      if(this.walls[2]) {
        line(x+w,y+w,x,y+w);
      }
      if(this.walls[3]) {
        line(x,y+w,x,y);
      }
      if (this.visited) {
        noStroke();
        fill(0, 150, 255, 100);
        rect(x, y, w, w);
   }
  }
  checkNeighbour() {
     let neighbour = [];
     let top = grid[index(this.i,this.j-1)];
     let right = grid[index(this.i+1,this.j)]
     let bottom = grid[index(this.i,this.j+1)]
     let left = grid[index(this.i-1,this.j)]
      if(top && !top.visited) {
        neighbour.push(top);
      }
      if(bottom && !bottom.visited) {
        neighbour.push(bottom);
      }
      if(right && !right.visited) {
        neighbour.push(right);
      }
      if(left && !left.visited) {
        neighbour.push(left);
      }
      if (neighbour.length>0) {
        let r = floor(random(0,neighbour.length))
        return neighbour[r];
      }
      else {
        return undefined;
      }
  }
  highlight() {
      let x = this.i * w;
      let y = this.j * w;
      noStroke();
      fill(255,150,0);
      rect(x,y,w,w);
    }
}
