var colors = ["Red ", "Green ", "Blue "];

document.write("Colors: " + colors); 
//No A.
colors.unshift(prompt("What color do you want to add At the beginning?"));
//No B.
colors.push(prompt("What color do you want to add at The end?"));
//No C.
colors.unshift("Pink", "Purple");
//D.
colors.shift();
//No E.
colors.pop();

document.write("<br> After adding: " + colors);

    // No F.
var colorIndex = prompt("Which Index Do You Want To Add Your Color Name At?");
var colorName = prompt("Which Color Name Do You Want To Add");

colors.splice(colorIndex, 0, colorName);

document.write("<br> Your Colors Added: " + colors);

    // No G.
var deleteIndex = prompt("At Which Index Do You Want To Delete The Colors From?");
var deleteAmount = prompt("How Many Color Do You Want To Delet?");

colors.splice(deleteIndex, deleteAmount);

document.write("<br> " + colors);


document.write("<br>");