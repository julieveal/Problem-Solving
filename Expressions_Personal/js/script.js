//Julie Veal 7_18_13 personal

//How many pairs of shoes can I buy in a year when my budget is $75 per month? Most shoes cost $50.


var budget = prompt("What is my budget for shoes per month"); //This is the price of the shoes

var months = prompt("How many months in a year?");// asking how many months so I could multiply the budget and the months

var cost = prompt("What is the average price for shoes?");//asking for the price for shoes so I can divide the budget and months

var total = budget * months / cost //budget times the months divided by the average cost of shoes

//console.log(total);//prints it out to console




var result = "I can buy " + total + " pairs of shoes in " + months + " months when the average price is $" + cost + " for each and my budget is $" + budget + " per year.";
alert(result);

