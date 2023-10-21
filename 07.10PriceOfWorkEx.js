function modifyTitle() {
    // Read value of title from the input field
	let title = document.getElementById("title").value;
    // Call allCapsTitleTrimmed() function
	let modifiedTitle = allCapsTitleTrimmed(title);
    document.getElementById("title").value = modifiedTitle;
}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
    text = text.trim();
	// Changes the text given to it to be ALL CAPS
    text = text.toUpperCase();
	// Return the changed text
	return text;
}

function calculate() {
    // Calculate length of the work as minutes.
    let startTime = document.getElementById("startTime").value;
	let endTime = document.getElementById("endTime").value;
	let startParts = startTime.split(":");
    let endParts = endTime.split(":");
    let startHours = parseInt(startParts[0]);
    let startMinutes = parseInt(startParts[1]);
    let endHours = parseInt(endParts[0]);
    let endMinutes = parseInt(endParts[1]);
    let workLength = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
    // If it is not Sunday  (Call isSunday() function)
	let dateText = document.getElementById("date").value;
	let isSundayWork = isSunday(dateText);
	if (isSundayWork == false) { 
        //Calculate and show price of the repair work during the workday
		let hourlyPrice = 48.00.toFixed(2);
		let totalPrice = hourlyPrice / 60 * workLength;
		document.getElementById("answer").innerHTML = `Length of the work was ${workLength} minutes.<br> 
        The hourly price is during the workdays ${hourlyPrice} euros.<br>
        The price of this repair work is ${totalPrice.toFixed(2)} euros.`;
    //otherwise
    }	else if (isSundayWork == true) { 	
        //Calculate and showprice of the repair work on Sundays
        hourlyPrice = 72.00.toFixed(2);
		let totalPrice = hourlyPrice / 60 * workLength;
		document.getElementById("answer").innerHTML = `Length of the work was ${workLength} minutes.<br> 
        The hourly price is during the Sundays ${hourlyPrice} euros.<br>
        The price of this repair work is ${totalPrice.toFixed(2)} euros.`;
	}
}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
	// Split the given date text into day, month and year parts using the subStr() method
	let day = parseInt(dateText.substring(0, 2));
    let month = parseInt(dateText.substring(3, 5)) - 1;
    let year = parseInt(dateText.substring(6, 10));

	// Create a new Date object to a variable asDate
	let asDate = new Date(year, month, day);

	// Get the day of the week with its getDay() method. Sunday is number 0 .

	// If day of the week is Sunday 
	if (asDate.getDay() === 0) {
		// return Boolean value true
		return true;
    }	
	// otherwise	
       // return Boolean value false		
	else  return false;
}


