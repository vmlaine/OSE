function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollTheDice() {
    // 1. Call the function getRandomInteger(min, max) with parameter values 1 and 6, and assign the return value of the function to the variable.
 
        // Call getRandomInteger with min=1 and max=6
        let diceValue = getRandomInteger(1, 6);
    // 2. Insert the value of the variable diceValue into the HTML div element whose id is 'dice'.
        document.getElementById("dice").innerHTML = `${diceValue}`;
}