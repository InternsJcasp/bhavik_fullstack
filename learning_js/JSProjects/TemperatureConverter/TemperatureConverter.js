// Select DOM Elements
const tempInput = document.getElementById("temp-input");
const unitSelect = document.getElementById("unit-select");
const result = document.querySelector(".result");

const convertBtn = document.querySelector(".calculate-btn");
const clearBtn = document.querySelector(".clear-btn");

convertBtn.addEventListener("click", () => {
  const tempValue = parseFloat(tempInput.value);
  const selectedUnit = unitSelect.value;

  // Validate empty/invalid numeric input
  if (isNaN(tempValue)) {
    alert("Please enter a valid temperature value");
    return;
  }

  let convertedValue = 0;

  if (selectedUnit === "cToF") {
    // Celsius to Fahrenheit formula: (C * 9/5) + 32
    convertedValue = (tempValue * 9) / 5 + 32;
    result.innerHTML = `${tempValue}°C = <strong>${convertedValue.toFixed(2)}°F</strong>`;
  } else if (selectedUnit === "fToC") {
    // Fahrenheit to Celsius formula: (F - 32) * 5/9
    convertedValue = ((tempValue - 32) * 5) / 9;
    result.innerHTML = `${tempValue}°F = <strong>${convertedValue.toFixed(2)}°C</strong>`;
  }
});

clearBtn.addEventListener("click", () => {
  tempInput.value = "";
  unitSelect.selectedIndex = 0;
  result.innerHTML = "";
});
