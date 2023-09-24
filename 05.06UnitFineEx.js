function calculateUnitFine() {
        // Read the value from the input field into a variable
       let netIncomeInput = document.getElementById("txtNetIncome");
	   let netIncome = parseFloat(netIncomeInput.value);

		// Calculate the unit fine and assign the result into another variable
		let fineUnit = (netIncome - 255) / 60;
		let roundedFineUnit = fineUnit.toFixed(2);

		// Write the answer to the web page DOM, in the answer div, as the content
		let answerDiv = document.getElementById("answerDiv");
		answerDiv.textContent = `Unit fine is ${roundedFineUnit} euros.`;
}