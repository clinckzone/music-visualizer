function Starfield(number) {

  this.number = number;
  this.stars = [];
  this.zoom = 1.02;
  this.counter = 0;

  for (var i = 0; i < this.number; i++) {
    var x = random(-width / 2, width / 2);
    var y = random(-height / 2, height / 2);
    this.stars.push([x, y, 1, 0]);
  }

  this.display = function () {
    for (var i = 0; i < number; i++) {
      push();
      fill(255);
      stroke(255);
      translate(width / 2, height / 2);
      if ((this.stars[i][0] > width || this.stars[i][0] < -width)) {
        this.stars[i][0] = random(-width / 2, width / 2);
        this.stars[i][1] = random(-height / 2, height / 2);
        this.stars[i][2] = 1;
        this.stars[i][3] = 0;
      }
      else {
        this.stars[i][0] = this.zoom * this.stars[i][0];
        this.stars[i][1] = this.zoom * this.stars[i][1];
        this.stars[i][2] = this.zoom * this.stars[i][2];
        this.stars[i][3] = this.zoom * this.stars[i][3];
      }
      ellipse(this.stars[i][0], this.stars[i][1], this.stars[i][2], this.stars[i][2], this.stars[i][3]);
      pop();
    }
    this.counter += 0.2;
  }
}