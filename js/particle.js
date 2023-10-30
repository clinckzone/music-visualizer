function Particle(angle, netDisplacement, color) {

  this.angle = angle;
  this.netDisplacement = netDisplacement;
  this.color = color;

  this.display = function () {
    push();
    colorMode(HSB, 255);
    fill(this.color, 255, 255);
    noStroke();

    translate(width / 2, height / 2);
    rotate(radians(this.angle));
    ellipse(this.netDisplacement, 0, 5, 5);
    pop();
  }
}