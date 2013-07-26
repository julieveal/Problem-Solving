 // Veal_Julie  July 25, 2013  Wacky

//What is the age of my tree?
 //circumference = 36 inches

var circumference = prompt("What is the circumference of my tree?", 50);		// inches around measured with a string
	diameter = circumference / 3.14;
	radius = diameter / 2;	
	age = radius / .125;
							
if (diameter < radius){
	console.log("start over");
}
else {
	console.log("you are done");
}





	//console.log("The age of the tree is " + age + " years.");   //the right size
