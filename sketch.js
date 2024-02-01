function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //mountain
  fill(48,69,41);
  beginShape();
    vertex(0, 400);
    vertex(200, 100);
    vertex(250,200);
    vertex(300, 25);
    vertex(350, 200);
    vertex(375, 125);
    vertex(400, 200);
    vertex(400, 400);
  endShape(CLOSE);
  fill(255,255,255);

  //snowcap
  beginShape();
    vertex(290, 60);
    vertex(295, 65,);
    vertex(300, 60);
    vertex(305, 65);
    vertex(310, 60);
    vertex(300, 25);
    vertex(290, 60);
  endShape();

  //snow boulder
  fill(225,225,225);
  beginShape();
  for (let i = 0; i < 82; i++){
    ellipse((i*2) + 10, (i*2) + 1, i+18);
  }
  endShape();

  //snowscape
  fill(255,255,255);
  beginShape();
    vertex(0, 0);
    vertex(400, 400);
    vertex(0, 400);
  endShape(CLOSE);
  fill(165,42,42);

  ///1st tree
  beginShape();
    fill(165,42,42);
    rect(20, 125, 15, 25);
    fill(74,103,65);
    vertex(45, 125);
    vertex(27, 75);
    vertex(10, 125);
  endShape();

  //2nd tree
  beginShape();
    fill(165,42,42);
    rect(135,325, 15, 25);
    fill(74,103,65);
    vertex(160, 325);
    vertex(140, 235);
    vertex(125, 325);
  endShape();

  //3rd tree
  beginShape();
    fill(165,42,42);
    rect(300, 300, 15, 25);
    fill(74,103,65);
    vertex(285, 300);
    vertex(330, 300);
    vertex(305, 225);
  endShape();
}

