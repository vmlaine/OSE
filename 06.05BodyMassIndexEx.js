function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bodyMassIndex = weight / (height/100.0 * height/100.0);
  let answer = "";

  if (bodyMassIndex < 18.5) {
    answer = `Body Mass Index (BMI) is ${bodyMassIndex.toFixed(2)} (Weight less than normal weight)`;
  }

  if (bodyMassIndex >= 18.5 && bodyMassIndex < 25) {
    answer = `Body Mass Index (BMI) is ${bodyMassIndex.toFixed(2)} (Normal weight)`;
  }

  if (bodyMassIndex >= 25.0) {
    answer = `Body Mass Index (BMI) is ${bodyMassIndex.toFixed(2)} (Overweight)`;
  }

  document.getElementById("answer").innerHTML = `${answer}`;
		
}
