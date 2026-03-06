
/*
Elijah Brown

Claw Machine Practice

Use the left and right buttons to navigate towards the prizes. When ready, push the middle drop button to collect everything. 

Press space to reset


In terms of a theme, I simply thought it would be a fun practice to make a claw machine, as the claw is either stuck, or dropping 
towards the prize. In the future, I would like to add swaying to the crane as it was moving.


*/

let clawX
let clawY
let drop = false
let score= 0

// prizes

let prizeX1, prizeY1, prizeOn1, prizeSize1;
let prizeX2, prizeY2, prizeOn2, prizeSize2;


function setup() {
	createCanvas(700, 700);

	clawX= width /2;
	clawY= 100;





	
	// prize setup

	
   //prize 1 value randomizer
prizeX1 = random(100,600); prizeY1 = (535); prizeOn1 = true, prizeSize1 = random(15,40);

	//prize 2 value randomizer
prizeX2 = random(100,600); prizeY2 = (525); prizeOn2 = true, prizeSize2 = random(20,30);


	
}

function draw() {


	background(100);






// machine border

	// top
	fill(256,0,0);
	rect(0,0,700,90);


	// sides
	fill(200);
	rect(0,0,50,700);

	rect(650,0,50,700);

	// bottom

	fill(256,0,0);
	rect(0,550,700,150);








// prize generation 
	
   // prize 1
if(prizeOn1 === true){
	fill(100,256,256);
	noStroke();
	ellipse(prizeX1,prizeY1,prizeSize1,prizeSize1);
	
}


	//prize 2
if(prizeOn2 === true){
	fill(256,256,100);
	noStroke();
	rect(prizeX2,prizeY2,prizeSize2,prizeSize2);
	
}






	//////////// prize logic
			 //c hecks if claw is within prize


	  // prize 1
	if (drop && prizeOn1 && dist(clawX, clawY + 130, prizeX1, prizeY1)
		< prizeSize1 / 2 + 10) {


		
    prizeOn1 = false;
		
    score = score + 1;
		
    drop = false;
  }
 
  	     // prize 2 
  if (drop && prizeOn2 && dist(clawX, clawY + 130, prizeX2, prizeY2) < prizeSize2 / 2 + 10) {
    prizeOn2 = false;
    score = score + 1;
    drop = false;
  }







	
// Press spacee to restart

	//if both prizes are won, display congradulation text
if (prizeOn1 === false && prizeOn2 === false) {

  fill(255, 220, 0);
  textSize(20);
  textAlign(CENTER);
  text("YOU WIN! Congratulations! Press Space to Play Again", width / 2, 300);
}






	

////// DROP BUTTON LOGIC
	// if button pressed, drop
if (drop === true) {

	
  clawY = clawY + 4;

	
} else {

	
  clawY = 100;
}

	// if hits object/ floor, go back up

	
if (clawY > 430) {

	
  drop = false;

	
}





	

	

// claw  functions


	// claw rope
	stroke(0);
	line (clawX,clawY+100,clawX,90);


	
	//	claw

	line (clawX ,clawY  + 100, clawX - 20, clawY + 120);
	
	line (clawX ,clawY  + 100, clawX + 20, clawY + 120);



	//  hook arms

	
	line (clawX +10 ,clawY  + 130, clawX + 23, clawY + 120);

	line (clawX - 10,clawY  + 130, clawX - 23, clawY + 120);



// left and right buttons//


		 //leeft button

	
	
	 if (mouseX > 150 && mouseX < 200 && mouseY > 625 &&
		 mouseY < 675 && mouseIsPressed) {

		 
	fill(255);  // clicked
		 
		
  } else if (mouseX > 150 && mouseX < 200 &&
			   mouseY > 625 && mouseY < 675) {
		 
    fill(256, 200, 0);  // hovered
		 
  } else {
		 
    fill(255, 220, 0);  // normal
		 
  }
  triangle(200, 625, 200, 675, 150, 650);





	// right 
	
	if (mouseX > 500 && mouseX < 550 && mouseY > 625 && 
		mouseY < 675 && mouseIsPressed) {

		
    fill(255);          // clicked

		
  } else if (mouseX > 500 && mouseX < 550 &&
			 mouseY > 625 && mouseY < 675) {

		
    fill(256, 200, 0);  // hovered

		
  } else {
		
    fill(255, 220, 0);  // normal
		
  }
  triangle(500, 625, 500, 675, 550, 650); 






// Claw drop button

	

	if(dist(mouseX,mouseY,width/2, 650 ) < 30 && mouseIsPressed){
		 
		
		fill(256);  // clicked

		
	} else if(dist(mouseX,mouseY,width/2, 650) < 30){
	
	  
		 fill(256, 200, 0)	// hovered
	
	}  else {
		fill(255,220,0);  // normal
	}

circle(width /2, 650,60); 



	

}







/// button reactions

function mousePressed(){


   // senses where mouse is in relation to button

  if (mouseX > 150 && mouseX < 200 && mouseY > 625 && mouseY < 675) {
    clawX = clawX - 20;
  }
  if (mouseX > 500 && mouseX < 550 && mouseY > 625 && mouseY < 675) {
    clawX = clawX + 20;
  }
  if (dist(mouseX, mouseY, width / 2, 650) < 30) {
    drop = true;
  

  }

	
	// constrains claw within walls of machine 


	clawX = constrain(clawX,70,630)
}







//// pressing space resets game

function keyPressed() {
	
  if (key === ' ') {

	  
    // reset claw

	  
    clawX = width / 2;
    clawY = 100;
    drop = false;
    score = 0;

	  

    // reset prizes 

    // prize 1

  
    prizeX1 = random(100, 600);
    prizeY1 = 535;
    prizeSize1 = random(15, 40);
    prizeOn1 = true;

    // prize 2

	   prizeX2 = random(100, 600);
    prizeY2 = 525;
    prizeSize2 = random(20, 30);
    prizeOn2 = true;



	  
  }
}