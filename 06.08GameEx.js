
function play() {
		// Read value from the input field
		let bet =  parseFloat(document.getElementById("bet").value);
		let win = "";

		// Randomize dice pips between 1-6
		let pips = Math.round( (Math.random( ) * 5) + 1 );
        
		// Calculate win base on pips
		if (pips == 1 || pips == 3 || pips == 5) {
            win = `Pips was ${pips} - no pay`;

		} else if (pips == 2 || pips == 4) {
            bet = bet * 1.25;
		    win = `Pips was ${pips} - Paid back: ${bet} euros`;

		} else if (pips == 6) {
			bet = bet * 1.5;
			win = `Pips was ${pips} - Paid back: ${bet} euros`;
		}
		
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = `${win}`;
}
