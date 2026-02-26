 /* 

 This is in class practice on 2/26/26
 
 */
 
 
 
 let r = 255;
  let g = 255;
  let b = 255;


function setup() {
  createCanvas(600, 600);
  rectMode(center);
}

function draw() 
{
  background(r, g, b);

  if (mouseX > width / 2){   // test 1 
    fill(255,0,0);
    ellipse(width / 2, height / 2, 100, 100);
    print("test 1 is true");
    ellipse(width / 4, height / 2, 50, 50);

  }
  else if (mouseY> height / 2) {   // test 2
  fill (0);
  ellipse(width / 2, height / 2, 100, 100);
  print("test 2 is true");
  ellipse(width / 4, height / 2, 50, 50);


  }
  else
  {
    fill(255);
     rect(width / 2, height / 2, 100, 100);
    print("test 1 and 2 are false");
  }
}

function mousePressed()
{

  
  
}
