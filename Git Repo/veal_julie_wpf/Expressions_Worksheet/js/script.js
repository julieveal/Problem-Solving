//Julie Veal 7_17_13 Expression Worksheet

//Slice of pie part one. Calculated how many slices each person gets


var people = prompt("Please enter how many people are at your party");
var slices = "8"
var pizzas = prompt("How many pizzas did you order");
var quotient = pizzas / people * slices;//calculates with that info


//console.log(product);//prints it out to console

var result = "Each person will get " + quotient + " slices ";
alert(result);