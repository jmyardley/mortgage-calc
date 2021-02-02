//The formula is c = ((p * R) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1)
//param p = float principal
//param r = float interest rate
//param n = number of years 
function calculatePayment() {
    var cost = document.getElementById("cost").value;
    var downPayment = document.getElementById("downPayment").value;
    var rateInput = document.getElementById("apr").value;
    var period = document.getElementById("period").value;
    
    var p = cost - downPayment;
    var r = convertToDecimal (rateInput);
    var n = yearsToMonths(period);
    var c = ((p * r) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
    pmt = c.toFixed(2);
    return parseFloat(pmt);
}

function convertToDecimal(percent) {
    return (percent/12)/100;
}

function yearsToMonths(year) {
    return year * 12;
}

//calculateMortgage (200000, 6.5, 30);

function createSchedule() {
    var pmt = calculatePayment();

    var thisInterest = 0;
    var thisPrincipal = 0;
    var allInterest = 0;
    var allPrincipal = 0;
    var 
} 


var btn = document.getElementById("calculate");
btn.onclick = function () {
    console.log(cost, downPayment, apr, period);
    console.log(pmt);
}

 