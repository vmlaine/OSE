// Define a function (1.)
function maximumKelaReimbursement(visitLength) {
    visitLength = parseInt(visitLength);

    if (visitLength <= 10) {
        return 8.00;
    } else if (visitLength <= 20) {
        return 11.00;
    } else if (visitLength <= 30) {
        return 13.50;
    } else if (visitLength <= 45) {
        return 16.50;
    } else {
        return 21.00;
    }
}

// Define a function (2.)
function calculateCustomerPayment(doctorsFee, kelaReimbursement) {
    doctorsFee = parseFloat(doctorsFee);
    kelaReimbursement = parseFloat(kelaReimbursement);
    return doctorsFee - kelaReimbursement + 15.90;
}

// Define a function (3.)
function calculate() {
    // Read values from the input fields
    let visitLength = document.getElementById("length").value;
    let fee = parseFloat(document.getElementById("doctorsFee").value); // Use a different variable name here
    // Call the function (1.) which calculates Kela reimbursement
    let kelaReimbursement = maximumKelaReimbursement(visitLength);
    // Call the function (2.) which calculates the amount left for the customer to pay
    let customerPay = calculateCustomerPayment(fee, kelaReimbursement); // Use the new variable name here
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("answer").innerHTML = `Doctor's Fee is ` + fee.toFixed(2) + ` euros.<br>Kela reimbursement is ` + kelaReimbursement.toFixed(2) + ` euros.<br>Office Fee is 15.90 euros.<br>Customer needs to pay ` + customerPay.toFixed(2) + ` euros.`;
}