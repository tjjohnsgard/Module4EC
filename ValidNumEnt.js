let invest;
let apr;
let yrs;

//Valid invest
while (true) {
    invest = prompt("Enter investment amount:");
    if (!isNaN(invest)) {

 //Exit if input numeric
        break;
    } else {
        alert("Invalid input, enter numeric value for investment.");
    }
}

//Valid rate
while (true) {
    apr = prompt("Enter annual interest rate between 0-6%:");
    if (!isNaN(apr) && apr >= 0 && apr <= 6) {

//Exit if input numeric and in range
        break;
    } else {
        alert("Invalid input, enter numeric value between 0-6 for annual interest rate.");
    }
}

//Valid num yrs
while (true) {
    yrs = prompt("Enter number of years between 1 and 30:");
    if (!isNaN(yrs) && yrs >= 1 && yrs <= 30) {

//Exit if input numeric and in range   
        break;
    } else {
        alert("Invalid input, enter numeric value between 1-30 for number of years.");
    }
}