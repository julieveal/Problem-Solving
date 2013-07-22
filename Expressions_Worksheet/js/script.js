//Julie Veal 7_17_13 Expression Worksheet discounts

//discounted price with and without sales tax


var original = 10; //this is the price of the purse

var discount = 20
var withoutTax = original - original * discount/100
var tax = .07
var total = withoutTax + withoutTax * tax

console.log(total);//prints it out to console



//console.log(product);//prints it out to console

var result = "Your purse was originally $" + original + " but after a " + discount + "% discount it is now $" + withoutTax + " without tax and $" + total + " with tax. ";
alert(result);

