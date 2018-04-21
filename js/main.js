var ProductOneName = "Flight to London";
var ProductOneCost = 2360;

var ProductTwoName = "Flight to Amsterdam";
var ProductTwoCost = 1189;
var sum = ProductOneCost + ProductTwoCost;
document.write("If you want to buy a " + "<b>" +ProductOneName +  "</b> " + " and a "+ "<b>" + ProductTwoName +"</b> " + " it costs: "+ sum + " EUR" + "<br>");
document.write("<br>" + "If you want to buy a " + "<b>" +ProductOneName +  "</b> " + " and a "+ "<b>" + ProductTwoName +"</b> " + " as a GoldenCard holder, you will get a 10% discount: "+ 90*sum/100 + " EUR" );
