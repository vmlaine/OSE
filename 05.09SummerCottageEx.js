function calculateRent() {
		
		 // TODO
		 let rent = document.getElementById("rent").value;
		 let participants = document.getElementById("participants").value;

         let rentPerParticipant = rent / participants;
		 let roundedRentPerPart = rentPerParticipant.toFixed(2);

		 let answerDiv = document.getElementById("answerDiv");
		answerDiv.textContent = `Rent per participants is ${roundedRentPerPart} euros.`;
		
}