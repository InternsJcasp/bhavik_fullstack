// Callback Functions: See When function is passed as an argument in another function to be executed by it then it is called as Callback Function

function calculator(num1, num2, add, sub) {
  const addedValue = add(num1, num2);
  const subtractValue = sub(num1, num2);
  //   return { addedValue, subtractValue };
  return [addedValue, subtractValue];
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

console.log(calculator(10, 5, add, sub));
