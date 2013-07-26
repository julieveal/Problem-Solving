 // Veal_Julie  July 25, 2013  Industry

//What is the resolution of my photograph?
//heightP = 1000

var heightP = prompt("What is the height of your photograph in pixels?", 1000);		// pixels wide
	heightI = prompt("What is the height of your photograph in inches?");		// inches wide
	resolution = heightP / heightI;		//divide hP by hI


if(heightP && heightI){   //they are not the same number
							
	console.log("Get a new photo!");   //the right size
}else{							     		//otherwise
										
	console.log("Use photo!");   //not the right size
													
}												//close

