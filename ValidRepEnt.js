let rE;

//Prompt til valid
while (true) {
    rE = prompt("Want to repeat entry? (y/n)").toLowerCase();

//Check input "y"/"n"
    if (rE === "y" || rE === "n") {

//Exit if valid      
        break;
    } else {

//If input not valid display error msg & cont
        alert("Invalid input, enter 'y' or 'n'.");
    }
}