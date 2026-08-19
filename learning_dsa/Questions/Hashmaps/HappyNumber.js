const checkIsHappyNumber = (inputNumber) => {
  const seen = new Set();

  while (inputNumber !== 1 && !seen.has(inputNumber)) {
    seen.add(inputNumber);

    let sum = 0;
    let currentNumber = inputNumber;

    while (currentNumber > 0) {
      const digit = currentNumber % 10;
      sum += digit ** 2;
      currentNumber = Math.floor(currentNumber / 10);
    }

    inputNumber = sum;
  }

  return inputNumber === 1
    ? "Given Number is Happy Number"
    : "Given Number is not Happy Number";
};

console.log(checkIsHappyNumber(81));