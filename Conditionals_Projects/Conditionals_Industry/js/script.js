 // Veal_Julie  July 25, 2013  Industry

//What is the resolution of my photograph?
//I have 4 to choose from. The wheel needs to be the same height as the tire. 


var width = 8;		// 8 inches wide
	height = 10;	//10 inches high
	tireC = 20;		//20 inches high
	tireD = 25;		//25 inches high

var	bikeHeight = prompt("How tall is the wheel?");				//how tall is the tire?
	console.log(bikeHeight); //calculate

if(tireC == bikeHeight){   //they are the same number
							
	console.log("Put the tire on the bike!");  //the right size
}else{							     		//otherwise
										
	console.log("You should use a different tire!");  //not the right size
													
}												//close

