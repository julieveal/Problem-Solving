//Julie Veal 7_18_13 personal

//How many pairs of shoes can I buy in a year when my budget is $75 per month? Most shoes cost $50.


var budget = prompt("What is my budget for shoes per month"); //This is the price of the shoes

var months = prompt("How many months in a year?");

var cost = prompt("What is the average price for shoes?");

var total = budget * months / cost

//console.log(total);//prints it out to console




var result = "I can buy " + total + " pairs of shoes in " + months + " months when the average price is $" + cost + " for each and my budget is $" + budget + " per year.";
alert(result);

