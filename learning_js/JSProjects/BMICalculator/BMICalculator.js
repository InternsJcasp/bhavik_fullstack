// Select DOM Elements
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const result = document.querySelector(".result");

const calculateBtn = document.querySelector(".calculate-btn");
const clearBtn = document.querySelector(".clear-btn");

calculateBtn.addEventListener("click", () => {
  const weightValue = parseFloat(weightInput.value);
  const heightValue = parseFloat(heightInput.value);

  // Validate empty inputs
  if (!weightValue || !heightValue) {
    alert("Please fill both Weight and Height fields");
    return;
  }

  // Validate non-zero/positive inputs
  if (weightValue <= 0 || heightValue <= 0) {
    result.innerHTML =
      "Invalid Input: Height and Weight must be greater than 0";
    return;
  }

  // Calculate BMI (Convert height cm to meters)
  const heightInMeters = heightValue / 100;
  const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(1);

  // Determine category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  result.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
});

clearBtn.addEventListener("click", () => {
  weightInput.value = "";
  heightInput.value = "";
  result.innerHTML = "";
});
