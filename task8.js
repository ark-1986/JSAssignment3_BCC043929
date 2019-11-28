// Counting
document.write("Counting : ", "<br>")
for (i = 1; i<16; i++){
    document.write(i + ",");
}

document.write("<br>", "Reverse Counting", "<br>")

// Reverse Counting 
for (i = 16; i>0; i--){
    document.write(i + ",");
}

    //c. odd & even series
    for (var i = 0; i < 22; i++) { 
        if ((i % 2) === 0) {
            document.write(i + ",");
        }
    }
    document.write("<br>");
    for (var i = 0; i < 20; i++) { 
        if ((i % 2) !== 0) {
            document.write(i + ",");
        }
    }
    document.write("<br>");
    
        // 2k series
    for (var i = 2; i < 22; i++) { 
        if ((i % 2) === 0) {
            document.write(i + "k, ");
        }
    }
    document.write("<br>");
    document.write("<br>");
    