// Basic Version
// function getFibonacciNumber(input) {
//   // Base Condition:
//   if (input === 0) {
//     return 0;
//   } else if (input === 1) {
//     return 1;
//   }
//   let result = getFibonacciNumber(input - 1) + getFibonacciNumber(input - 2);
//   return result;
// }

// console.log(getFibonacciNumber(8));

// Improvised Version:

// Validating Positive inputs not allowing negative intergers or inputs in decimal
// Result variable taking more space so direct return the result

// function getFibonacciNumber(input) {
//   // Base Condition:
//   if (!Number.isInteger(input) || input < 0) {
//     throw new Error("Input must be a non-negative integer");
//   } else if (input <= 1) {
//     return 1;
//   }
//   return (result =
//     getFibonacciNumber(input - 1) + getFibonacciNumber(input - 2));
// }

// console.log(getFibonacciNumber(8));

// Optimized Solution: used Memo so we don't have to solve already olved Fibonacci Numbers

function getOptimizedFibonacci(input, memo = new Map()) {
  if (!Number.isInteger(input) || input < 0) {
    throw new Error("Input must be a non-negative integer");
  } else if (input <= 1) {
    return 1;
  }

  if (memo.has(input)) {
    return memo.get(input);
  }

  result =
    getOptimizedFibonacci(input - 1, memo) +
    getOptimizedFibonacci(input - 2, memo);

  memo.set(input, result);

  return result;
}
