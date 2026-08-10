// let result = 1;
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
