// Veal_Julie  July 25, 2013  Personal

//What size tire do I put on my bike?
//I have 4 to choose from. The wheel needs to be the same height as the tire. 


var tireA = 10;		// 10 inches high
	tireB = 15;			//15 inches high
	tireC = 20;			//20 inches high
	tireD = 25;			//25 inches high

var	bikeHeight = prompt("How tall is the wheel?");					//how tall is the tire?
	console.log(bikeHeight);//calculate

if(tireC == bikeHeight){ //they are the same number
							
	console.log("Put the tire on the bike!");//the right size
}else{									//otherwise
										
	console.log("You should use a different tire!");//not the right size
													
}													//close

