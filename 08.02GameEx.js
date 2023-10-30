function calculateProfit() {
    // Read value of rounds from the input field
    let rounds =  parseFloat(document.getElementById("rounds").value);
    let wins = 0;
   
    // Make a loop which is executed as many times as was set through the input field. 
    // Let win counter cumulating during every round of the loop. 
    for (var i = 1; i <= rounds; i++) {
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
        let pips = Math.round( (Math.random( ) * 5) + 1 );

        // If the randomized pips is 1, 3 or 5,  no pay
        if (pips == 1 || pips == 3 || pips == 5) {
        wins = wins + 0;
         // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
        } else if (pips == 2 || pips == 4) {
            wins = wins + 1.25;
        // Otherwise the pips 6 returns the inserted bet 150%	
        } else if (pips == 6) {
			wins = wins + 1.5;
        }
    }
    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
    let profit = rounds - wins;
    

    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = `Bets were altogether ` + rounds.toFixed(2) + ` euros<br>Wins were ` + wins.toFixed(2) + ` euros<br>Profit was ` + profit.toFixed(2) + ` euros`;
   

}