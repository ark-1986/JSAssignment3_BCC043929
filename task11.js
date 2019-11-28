//Q11. Finding barkey item from array

var found = false;

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

for (var i = 0; i < arr.length; i++){
        
        if(arr[i] == input){
            alert(input + " is Available at index " + i + " in our bakery" );
            found = true
            break;
        }

    }
    if (!found){
        alert(" We are sorry. " + input + " is not available in our bakery")
    }


