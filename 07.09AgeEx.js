function tellAge() {
    // Read value of yearOfBirth from the input field 
    let yearOfBirth = document.getElementById("yearOfBirth").value;

    // Figure out the current date into today variable 
    let today = new Date();

    // Use getFullYear() method to get the current year out from the today variable
    let currentYear = (today.getFullYear());

    // Calculate the (rough estimate of the) age
    let age = currentYear - yearOfBirth;

    // If age is less than zero
    if (age < 0) {
        //  Show an error message
        document.getElementById("answer").innerHTML = `Your age can't be negative!`;
        
    // otherwise tell the age
    }   else {
            document.getElementById("answer").innerHTML = `You are now ` + age + ` years old.<br> (Current year is ` + currentYear + `.)`;
    }
}