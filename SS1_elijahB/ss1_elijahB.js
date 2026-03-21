/*

Elijah B
Title: Spinning Planet

Concept: I want to create a spinning globe 
that randomly continouslygenerates various 
buildings/ plants, etc as it spins. 
Think of it as some sort of illusion.
The house I've created here is an example of
a location that would pass by, 
and I want to add multiple other objects.
A day and night cycle would be interesting
too. 

*/




function setup() {
	createCanvas(500, 500);
	
}

function draw() {

//sky
	
background(10,95,200);
	
//sun


	
	fill(214,123,35);
	circle(0,50,150);

//ground

	fill(14,203,50);
	circle(250,550,500);



	
// house

	fill(150,150,150);
	strokeWeight(1);
	stroke(2);
	rect(180,220,
		 150,100);

	// window (left)
   noStroke();
	fill(100,150,150);
	rect(195,240,
		  30,30)
	// window (right)	
	fill(100,150,150);
	rect(285,240,
		  30,30);
	
	// roof
	strokeWeight(2);
	fill(120, 40, 40);
	triangle(180,220,      
	         330,220,      
	         255,170);

	// door 

	fill (100,10,40);
	rect(245,260,20,60);

	


	
	
}