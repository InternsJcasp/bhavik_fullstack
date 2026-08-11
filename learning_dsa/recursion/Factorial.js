// Basic Version:
function findFactorial(number) {
  // Base Condition:
  if (number === 1) {
    return 1;
  }
  // smaller Problem
  let result = number * findFactorial(number - 1);

  // work
  return result;
}

console.log(findFactorial(5));

// Improvized Version:
// Negative Numbers should not become Input

function findFactorial(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error("Numbers should be non negative");
  }
  if (number === 1) {
    // Base Condition:
    return 1;
  }
  // smaller Problem
  return (result = number * findFactorial(number - 1)); // returning result removed extra variable result
}

console.log(findFactorial(5));
