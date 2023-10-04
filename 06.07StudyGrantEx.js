function showStudyGrant() {
    
        // Read values from the input fields
		let age = document.getElementById("age").value;
		let withParents = document.getElementById("withParents").value;
		let studyGrant = "";

		// if student is living with parents and his/her age is greater than 20 or equal
		if (age >= 20 && withParents == 'n') {
			studyGrant = "The study grant is 268.23 euros.";
		} 
		      //assign text "The study grant is 335.20 euros." to a variable
		else if (age >= 20 & withParents == 'y') {
				studyGrant = "The study grant is 87.23 - 196.27 euros.";
		} 
		//otherwise if ....
		else {
			studyGrant = "Ask Kela.";
		}
		
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = `${studyGrant}`;
}
	