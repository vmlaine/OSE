function calculateCosts() {

		//TODO
		let drivenKilometers = document.getElementById("kilometers").value;
		let consumption = document.getElementById("consumption").value;
		let fuelPrice = document.getElementById("price").value;
		let participants = document.getElementById("participants").value;

		let costPerParticipant = consumption / 100 * fuelPrice * drivenKilometers / participants;
		let roundedCostPerPart = costPerParticipant.toFixed(2);

		let answerId = document.getElementById("answerId");
		answerId.textContent = `Fuel costs per participant is ${roundedCostPerPart} euros.`;
}