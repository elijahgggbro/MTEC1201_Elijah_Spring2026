 
 /* Comments at the top of your sketch, including:
Elijah B
Test of trust, patience, maybe bravery

Rules are simple, do not click the button. Or do, it's up to you. 


*/
 
 
 
 let buttonX 
  let buttonY  
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


function setup() {
	createCanvas(600, 600);
	


	

	// button sensor dimensions
   buttonX = width/2;
   buttonY = 300;
   buttonR = 200
}


// load image
function preload() {
	
	youActuallyDidIt = loadImage('cat.jpg')

}





function draw() {
	background(255);

	fill(0);
	textSize(40);
	textAlign(CENTER);
	text("do NOT press the button!",width/2,50);





  if(!showYouActuallyDidIt){     // only shows button if it isnt the last scene




	let buttonHover = dist(mouseX, mouseY, buttonX, buttonY) < buttonR; 

	// button sensor logic

	

	if (mouseIsPressed && buttonHover) {
		
		fill (220,0,0);  // clicked
		
	} else if (buttonHover){

	
		fill(255,100,0);  // hovered
		
	} else{
		
		fill (255,0,0);  // start
		
}



	// draw button
	

	circle(buttonX, buttonY, buttonR * 2);


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
      text("are you sure?", buttonX, buttonY)
		
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
      text("are you REALLY sure???", buttonX, buttonY)

		
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




// mouse pressed

function mousePressed() {

	// button radius logic
	let buttonHover = dist(mouseX, mouseY, buttonX, buttonY) < buttonR;  
								
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



