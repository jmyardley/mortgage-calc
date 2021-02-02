//The formula is c = ((p * R) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1)
//param p = float principal
//param r = float interest rate
//param n = number of years 
function calculateMortgage(p, r, n) {
    r = convertToDecimal (r);
    n = yearsToMonths(n);
    var c = ((p * r) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
    pmt = c.toFixed(2);
    console.log(pmt);
}

function convertToDecimal(percent) {
    return (percent/12)/100;
}

function yearsToMonths(year) {
    return year * 12;
}

calculateMortgage (200000, 6.5, 30);
