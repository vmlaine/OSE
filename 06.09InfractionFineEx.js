function tellInfractionFine() {
		
		let drivingSpeed = parseFloat(document.getElementById("drivingSpeed").value);
		let speedLimit = parseFloat(document.getElementById("speedLimit").value);
		let excessSpeed = drivingSpeed - speedLimit;
		let answer = "";

		if (excessSpeed <= 0) {
            answer  = "No speeding, no fine.";
		} else if (excessSpeed > 20) {
	        answer = "income-based unit fine.";
		} else if (speedLimit >= 10 && speedLimit <= 60) {
			if (excessSpeed <= 15) {
				answer =  "Infraction fine is 85 euros.";
			} else if (excessSpeed <= 20) {
				answer = "Infraction fine is 115 euros.";
			}
		} else if (speedLimit >= 70 && speedLimit <= 120) {
			if (excessSpeed <= 15) {
				answer = "Infraction fine is 70 euros.";
			} else if (excessSpeed <= 20) {
				answer = "Infraction fine is 100 euros.";
			}
		} 

		document.getElementById("answer").innerHTML = `${answer}`;
}
