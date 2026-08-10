function getFibonacciNumber(input) {
  // Base Condition:
  if (input === 0) {
    return 0;
  } else if (input === 1) {
    return 1;
  }
  let result = getFibonacciNumber(input - 1) + getFibonacciNumber(input - 2);
  return result;
}

console.log(getFibonacciNumber(8));
