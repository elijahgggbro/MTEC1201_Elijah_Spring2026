let screen = "menu";


// button positions
let buttonX1 = 200;
let buttonX2 = 450;
let buttonX3 = 700;
let buttonY = 500;
let buttonSize = 190;



///////// sketch 1 variables //////////////////

let sunAngle=0;
let sunDirection=1;


// stars
let star1=0;
let star2=200;
let star3=30;
let star4=60;
let star5=70;
let star6=100;
let star7=150;
let star8=60;
let star9=40;
let star10=240;



///////// sketch 2 variables //////////////////

let clawX
let clawY
let drop = false
let score=0

// prizes
let prizeX1, prizeY1, prizeOn1, prizeSize1;
let prizeX2, prizeY2, prizeOn2, prizeSize2;



///////// sketch 3 variables //////////////////


let buttonXS3    //////// these are the button x and y variables of sketch 3 
  let buttonYS3    ///// button reinstated so name changed
  let buttonR 


//  
let buttonTimer1 = 0
let ClickTimer1 = 0



// Are you sure???? variables
	let clicked = false
	let confirmed = false
	let confirmTimer = 0
	let confirmDuration = 3000




// REALLY SURE variables
	let reallyConfirmed = false
	let reallyConfirmTimer = 0
	let reallyConfirmDuration = 3000



// sets up the mistakes you've made
	let youActuallyDidIt 
	let showYouActuallyDidIt = false


  	let didItAngle = 0






// load image // sketch 3 
function preload() {
	
	youActuallyDidIt = loadImage('cat.jpg')

}










function setup() {
	createCanvas(900, 800);
	

	



 


textAlign(CENTER,CENTER);
textSize(30);




//////// sketch 1 setup /////







	
/////// sketch 2 setup //////
  

  clawX= width /2;
	clawY= 100;


	// prize setup

	//
	prizeX1 = random(100,width-100);
	prizeY1 = height-265;
	prizeOn1 = true,
	prizeSize1 = random(15,40);
   prizeX2 = random(100,width-100);
	prizeY2 = height-275; 
	prizeOn2 = true, 
	prizeSize2 = random(20,30);





	
/////// sketch 3 setup  ////////
	


	

	// button sensor dimensions
   buttonXS3 = width/2;
   buttonYS3 = 300;
   buttonR = 200



	




}













function draw(){

  background(246, 243, 228);


 



  noFill();
  stroke(0);
  strokeWeight(1.5);
  ellipse(mouseX, mouseY, 20, 20);


if (screen === "menu"){
	drawMenu();
	
} else if(screen === "sketch1"){
  drawSketch1();

} else if(screen === "sketch2"){
  drawSketch2();

} else if(screen === "sketch3"){
  drawSketch3();
}






}















	
function drawMenu() {

  let hover1 = dist(mouseX, mouseY, buttonX1, buttonY) < buttonSize/2;
  let hover2 = dist(mouseX, mouseY, buttonX2, buttonY) < buttonSize/2;
  let hover3 = dist(mouseX, mouseY, buttonX3, buttonY) < buttonSize/2;
	
  fill(40);
  noStroke(); 
  textSize(90);
  text("Portfolio Journey", width/2, 120);

  fill(140);
  textSize(30);
  text("press R at any time to return here", width/2, 190);


if (hover1){ fill(40); } 
else{ fill(255); }

ellipse(buttonX1, buttonY, buttonSize);
  
if (hover1){ fill(255); } 
else{ fill(26); }

textSize(30);
text("Spinning Planet", buttonX1, buttonY);



if (hover2){ fill(40); } 
else{ fill(255); }

ellipse(buttonX2, buttonY, buttonSize);
  
if (hover2){ fill(255); } 
else{ fill(26); }

text("Claw Machine", buttonX2, buttonY);



if (hover3){ fill(40); } 
else{ fill(255); }

ellipse(buttonX3, buttonY, buttonSize);
  
if (hover3){ fill(255); } 
else{ fill(26); }

text("do Not Press", buttonX3, buttonY);

}


















////////////////////////////////// Sketch 1 ////////////////////////////////////////////

function drawSketch1() {

	background(10,95,200);





noStroke();
fill(0,50);
rect(0,height-50,width,50);

fill(0);
textSize(20);
textAlign(CENTER,CENTER);
text ("press R at any time",width/2,780);






	let starSpeed= mouseY * 0.02

	fill(0,10,0);
	ellipse(mouseX,mouseY,30,10);
	circle(mouseX,mouseY,15)

	stroke(1);
	fill(14,203,50);
	circle(width /2,height /2,350);

	noStroke();
	fill(256,256,256);

	circle(star1+= 3.0 + starSpeed,20,10);
	circle(star2+= 3.02+ starSpeed,70,10);
	circle(star3+= 4.2+ starSpeed,140,10);
	circle(star4+= 4.0+ starSpeed,240,10);
	circle(star5+= 4.0+ starSpeed,300,10);
	circle(star6+= 8.0+ starSpeed,370,10);
	circle(star7+= 5.02+ starSpeed,430,10);
	circle(star8+= 2.02+ starSpeed,540,10);
	circle(star9+= 7.2+ starSpeed,600,10);
	circle(star10+= 2.2+ starSpeed,670,10);

	if(star1 > width) star1=0; 
	if(star2 > width) star2=0;
	if(star3 > width) star3=0;
	if(star4 > width) star4=0;
	if(star5 > width) star5=0;
	if(star6 > width) star6=0;
	if(star7 > width) star7=0;
	if(star8 > width) star8=0;
	if(star9 > width) star9=0;
	if(star10 > width) star10=0;

	translate(width /2, height/2);
	rotate(sunAngle);

	fill(214,123,35);
	circle(300,0,90);

	sunAngle += 0.02 * sunDirection;

}
























////////////////////////////////// Sketch 2 ////////////////////////////////////////////

function drawSketch2() {

	background(100);







	// machine border

	fill(256,0,0);
	rect(0,0,width,90);

	fill(200);
	rect(0,0,50,height); 
	rect(width-50,0,50,height); 

	fill(256,0,0);
	rect(0,height-250,width,250); 



noStroke();
fill(0,50);
rect(0,height-50,width,50);

fill(0);
textSize(20);
textAlign(CENTER,CENTER);
text ("press R at any time",width/2,780);






if(prizeOn1 === true){
	fill(100,256,256);
	noStroke();
	ellipse(prizeX1,prizeY1,prizeSize1,prizeSize1);
}

if(prizeOn2 === true){
	fill(256,256,100);
	noStroke();
	rect(prizeX2,prizeY2,prizeSize2,prizeSize2);
}



if (drop && prizeOn1 && dist(clawX, clawY + 130, prizeX1, prizeY1)
	< prizeSize1 / 2 + 10) {

    prizeOn1 = false;
    score = score + 1;
    drop = false;
}

if (drop && prizeOn2 && dist(clawX, clawY + 130, prizeX2, prizeY2)
	< prizeSize2 / 2 + 10) {

    prizeOn2 = false;
    score = score + 1;
    drop = false;
}



if (prizeOn1 === false && prizeOn2 === false) {

  fill(255, 220, 0);
  textSize(20);
  textAlign(CENTER);
  text("YOU WIN! Congratulations! Press Space to Play Again", width / 2, 300);
}



if (drop === true) {

  clawY = clawY + 4;

} else {

  clawY = 100;
}



if (clawY > height-370) {

  drop = false;

}



// claw rope
stroke(0);
line (clawX,clawY+100,clawX,90);


// claw
line (clawX ,clawY  + 100, clawX - 20, clawY + 120);
line (clawX ,clawY  + 100, clawX + 20, clawY + 120);


// hook arms
line (clawX +10 ,clawY  + 130, clawX + 23, clawY + 120);
line (clawX - 10,clawY  + 130, clawX - 23, clawY + 120);



// left button
if (mouseX > width/2-200 && mouseX < width/2-150 &&
	mouseY > height-175 && mouseY < height-125 && mouseIsPressed) {

	fill(255);

} else if (mouseX > width/2-200 && mouseX < width/2-150 &&
	mouseY > height-175 && mouseY < height-125) {

	fill(256, 200, 0);

} else {

	fill(255, 220, 0);

}


triangle(width/2-150,height-175,width/2-150,height-125,width/2-200,height-150);



// right button
if (mouseX > width/2+150 && mouseX < width/2+200 &&
	mouseY > height-175 && mouseY < height-125 && mouseIsPressed) {

	fill(255);

} else if (mouseX > width/2+150 && mouseX < width/2+200 &&
	mouseY > height-175 && mouseY < height-125) {

	fill(256, 200, 0);

} else {

	fill(255, 220, 0);

}

triangle(width/2+150,height-175,width/2+150,height-125,width/2+200,height-150);



// drop button

if(dist(mouseX,mouseY,width/2,height-150) < 30 && mouseIsPressed){
	fill(256);

} else if(dist(mouseX,mouseY,width/2,height-150) < 30){

	fill(256, 200, 0)

}  else {
	fill(255,220,0);
}


circle(width /2, height-150,60); 

}




















/////////////////////////////////// sketch 3 //////////////////////////////////////////




function drawSketch3() {

	 

 
 
 
 











	background(255);



noStroke();
fill(0,50);
rect(0,height-50,width,50);

fill(0);
textSize(20);
textAlign(CENTER,CENTER);
text ("press R at any time",width/2,780);




	fill(0);
	textSize(40);
	textAlign(CENTER);
	text("do NOT press the button!",width/2,50);





  if(!showYouActuallyDidIt){     // only shows button if it isnt the last scene




	let buttonHover = dist(mouseX, mouseY, buttonXS3, buttonYS3) < buttonR; 

	// button sensor logic

	

	if (mouseIsPressed && buttonHover) {
		
		fill (220,0,0);  // clicked
		
	} else if (buttonHover){

	
		fill(255,100,0);  // hovered
		
	} else{
		
		fill (255,0,0);  // start
		
}



	// draw button
	

	circle(buttonXS3, buttonYS3, buttonR * 2);


	// button is clicked,,,,, do you REALLY want to do this?
	  if (clicked && !confirmed) {
		  

		// milliseconds since first click timer
		  let elapsed = millis() - confirmTimer
	

		  // 3 seconds passed , confirm

	 if (elapsed > 3000) {
		 
	      confirmed = true

		
		// shows are you sure? text after clicked 
    } else {
		
      fill(0);
		textSize(40);
      text("are you sure?", buttonXS3, buttonYS3)
		
    }







		  
  }
// 

        // Really sure? confirmation timer logic
	  if (confirmed && !reallyConfirmed && reallyConfirmTimer >0) {
		  
	    let elapsed = millis() - reallyConfirmTimer

    if (elapsed > reallyConfirmDuration) {
		
	     reallyConfirmed = true
		
    } else {
	
	   // are you REALLY sure text

      fill(0)
      textSize(40)
      text("are you REALLY sure???", buttonXS3, buttonYS3)

		
    }
  }





}else {


	// generates image / translation logic
	didItAngle += 0.05;
	translate(width/2, height/2);
	rotate(didItAngle);

	// image
	imageMode(CENTER);
	image(youActuallyDidIt, width / 2 - 200, height / 2 - 150, 400, 400)
}


// shows image after clicked
if (showYouActuallyDidIt) {
    image(youActuallyDidIt, width / 2 - 200, height / 2 - 150, 400, 400)
  }








}


	


	























function mousePressed(){


	//// menu screen mouse pressed ////
	if(screen==="menu"){

		if (dist(mouseX,mouseY,buttonX1,buttonY)<buttonSize/2){
			screen="sketch1";
		}

		if (dist(mouseX,mouseY,buttonX2,buttonY)<buttonSize/2){
			screen="sketch2";
		}

		if (dist(mouseX,mouseY,buttonX3,buttonY)<buttonSize/2){
			screen="sketch3";
		}

	}



   ///// sketch 1 mouse ////////
	if (screen==="sketch1"){
		sunDirection *= -1;
	}





	/////// sketch 2 mouse //////
	if(screen==="sketch2"){

		if(mouseX>width/2-200 && mouseX<width/2-150 && mouseY>height-175 && mouseY<height-125){
			clawX -=20;
		}

		if(mouseX>width/2+150 && mouseX<width/2+200 && mouseY>height-175 && mouseY<height-125){
			clawX +=20;
		}

		if(dist(mouseX,mouseY,width/2,height-150)<30){
			drop = true;
		}

		clawX = constrain(clawX,70,width-70);
	}




	/////// sketch 3 mouse ///////

	
	// button radius logic
	let buttonHover = dist(mouseX, mouseY, buttonXS3, buttonYS3) < buttonR;  
								
	if (buttonHover && !confirmed) {
		
		clicked = true
		confirmTimer = millis()

  }
  // begins timer for " are you really sure????"
	if (buttonHover && confirmed && !reallyConfirmed) {
		
	    reallyConfirmTimer = millis()
		
}
//   show image after everything else set up
	if (buttonHover && reallyConfirmed && !showYouActuallyDidIt) {
		
	    showYouActuallyDidIt = true
	}


}





	
function keyPressed() {







// Return to menu on R
  if (key === 'r' || key === 'R') {
    screen = "menu";




  // resets sketch 3  
  clicked = false;
  confirmed = false;
  confirmTimer = 0;
  reallyConfirmed = false;
  reallyConfirmTimer = 0;
  showYouActuallyDidIt = false;
  didItAngle = 0;
  }
	





  
//// sketch 2 key pressed //
 if (key === ' ') {

	  
    // reset claw

	  
    clawX = width / 2;
    clawY = 100;
    drop = false;
    score = 0;

	  

    // reset prizes 
    prizeX1 = random(100, 600);
    prizeY1 = 535;
    prizeSize1 = random(15, 40);
    prizeOn1 = true;

	   prizeX2 = random(100, 600);
    prizeY2 = 525;
    prizeSize2 = random(20, 30);
    prizeOn2 = true;
  }
}
