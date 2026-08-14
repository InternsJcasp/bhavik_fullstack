const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");

const addBtn = document.querySelector(".add-button");
const subtractBtn = document.querySelector(".subtract-button");
const multiplyBtn = document.querySelector(".mutiply-button");
const divideBtn = document.querySelector(".divide-button");

const result = document.querySelector(".result");

addBtn.addEventListener("click", () => {
  let resultValue = Number(firstInput.value) + Number(secondInput.value);
  result.textContent = resultValue;
  firstInput.value = "";
  secondInput.value = "";
});

subtractBtn.addEventListener("click", () => {
  result.textContent = "";
  let resultValue = Number(firstInput.value) - Number(secondInput.value);
  result.textContent = resultValue;
  firstInput.value = "";
  secondInput.value = "";
});

multiplyBtn.addEventListener("click", () => {
  result.textContent = "";
  let resultValue = Number(firstInput.value) * Number(secondInput.value);
  result.textContent = resultValue;
  firstInput.value = "";
  secondInput.value = "";
});

divideBtn.addEventListener("click", () => {
  result.textContent = "";
  let resultValue = Number(firstInput.value) / Number(secondInput.value);
  result.textContent = resultValue;
  firstInput.value = "";
  secondInput.value = "";
});
