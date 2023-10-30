function showComparisonScores() {
		let totalVotes = document.getElementById("votes").value;
		let candidates = document.getElementById("candidates").value;
		let text = "";
		// For each candidates
		for (var i = 1; i <= candidates; i++) { 
			// Calculate comparison score for candidate
			let score = (totalVotes / i).toFixed(0);
			text = text + i + `. candidate: ` + score + `<br>`;
		}	
		// Show scores
		document.getElementById("answer").innerHTML = text;
		
}