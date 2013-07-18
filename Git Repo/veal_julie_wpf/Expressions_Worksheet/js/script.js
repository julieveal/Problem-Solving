//Julie Veal 7_17_13 Expression Worksheet

//Slice of pie part one. Calculated how many slices each person gets


var people = prompt("How many people are at your party");
var slices = "8"
var pizzas = prompt("How many pizzas did you order");
var quotient = pizzas * slices / people;//calculates with that info
var remainder = pizzas * slices % people;

//console.log(product);//prints it out to console

var result = "Sparky will get " + remainder + " slices of pizza ";
alert(result);