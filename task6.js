
var oCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["st", "nd", "rd"]; 
var citiesLen = oCities.length;
// concranate City name + position
for (var i = 0; i < 3; i++) {
    document.write("<br>" + (i + 1) + o[i] + " Choice is " + oCities[i]);
}