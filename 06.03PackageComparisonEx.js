function comparePackages() {
	
		// assign input field values into a variables
		let textMessages = document.getElementById("textMessages").value;
        let callTime = document.getElementById("callTime").value;
		let answer = "";

		// calculate the costs of the Special Package
		let specialPackage = 19.90;
		let specialTotal = specialPackage + (textMessages * 0.069) + (callTime * 0.069);

		// If the Special package is cheaper than the All-inclusive package 
		if (specialTotal < 29.90) {
			answer = `The Special package (${specialTotal.toFixed(2)}) is cheaper than the All-inclusive package (29.90)`;
		}

			// assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
			// to a variable
					
		// otherwise
			// assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
			// to a variable
		if (specialTotal > 29.90) {
			answer = `The All-inclusive package (29.90) is cheaper than the Special package (${specialTotal.toFixed(2)})`;
		}
		
		// write the answer to the web page DOM, in the answer div, as the content
		document.getElementById("answer").innerHTML = `${answer}`;
}