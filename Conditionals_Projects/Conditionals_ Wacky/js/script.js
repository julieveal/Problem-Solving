 // Veal_Julie  July 25, 2013  Wacky

//What is the age of my tree?
 //circumference = 36 inches

var circumference = prompt("What is the circumference of my tree?", 50);		// inches around measured with a string
	diameter = circumference / 3.14; //divide circum by pi which is 3.14
	radius = diameter / 2;	//divide diamter by 2
	age = radius / .125; // divide radius by .125 which is the approximate width of a ring
							
if (diameter < radius){		//if diameter is less than the radius something is wrong and you should remeasure
	console.log("start over");		//calculate
}
else {								//otherwise
	console.log ("you are done");		//you are done
}							//fini





	//console.log("The age of the tree is " + age + " years.");   //the right size
