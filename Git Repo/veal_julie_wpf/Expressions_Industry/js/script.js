//Julie Veal 7_18_13 Industry

//How many bottles can i fit in my box?


var a = "BIG"; //first name of my box
var b = "BOX"; //last name of my box
var boxName = a + " " + b; //my box's full name
var xpositions= prompt ("How many positions are there along the x axis?"); //this is to input the number of partitions i have in the x direction of my box
var ypositions= prompt ("How many positions are there along the y axis?"); //this is to input the number of partitions i have in the y direction of my box
var total = xpositions * ypositions; //this line calculates the total number of partitions i have in my box, thus the total number of bottles i can package



//onsole.log(total);//prints it out to console





var result = "There are " + xpositions + " partitions along the width of the box and " + ypositions + " along the length of the box, so I can package " + total + " bottles in my " + boxName + "!";
alert(result);
//tuh dah!
