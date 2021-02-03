//The formula is c = ((p * R) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1)
//param p = float principal
//param r = float interest rate
//param n = number of years 
function calculatePayment() {
    var p = document.getElementById("principal").value;
    var n = document.getElementById("period").value * 12;
    var r = document.getElementById("apr").value / 100 / 12;
    
    var c = ((p * r) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
    return parseFloat(c);
}

//calculateMortgage (200000, 6.5, 30);

function createSchedule() {
    var pmt = calculatePayment();
    var n = document.getElementById("period").value * 12;
    var r = document.getElementById("apr").value / 100 / 12;
    var p = document.getElementById("principal").value;

    var thisInterest = 0;
    var thisPrincipal = 0;
    var allInterest = 0;
    var allPrincipal = 0;
    console.log(r);
    $("<tr><th>Payment</th><th>Interest</th><th>Principal</th><th>Balance</th></tr>").appendTo("#table");
    for (var i=0; i<n; i++)  {
        thisInterest = r * p;
        thisPrincipal = pmt - thisInterest;
        p = p - thisPrincipal;
        allInterest = allInterest + thisInterest;
        allPrincipal = allPrincipal + thisPrincipal;
        console.log(thisInterest.toFixed(2), thisPrincipal.toFixed(2), p.toFixed(2));
        $("<tr>" +
        "  <td class='amortization-first-column'>" + (i + 1)                                     + "</td>" +
        "  <td>" + thisInterest.toFixed(2)  + "</td>" +
        "  <td>" + thisPrincipal.toFixed(2) + "</td>" +
        "  <td>" + Math.abs(p).toFixed(2)  + "</td>" +
        "</tr>").appendTo("#table ");
    }
    } 

    



var btn = document.getElementById("calculate");
btn.onclick = function () {
    createSchedule();    
}

 