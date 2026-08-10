// Basic Version:
// function getPowerOfX(number, power) {
//   if (power === 0) {
//     return 1;
//   }
//   // smaller Problem
//   let result = number * getPowerOfX(number, power - 1);

//   return result;
// }

// console.log(getPowerOfX(4, 5));

// Optimized Solution: We are doing half power everytime and passing it to the function.

function getPowerOfX(number, power) {
  if (power === 0) {
    return 1;
  }

  const halfPower = getPowerOfX(number, Math.floor(power / 2));

  if (power % 2 === 0) {
    return halfPower * halfPower;
  }

  return number * halfPower * halfPower;
}

console.log(getPowerOfX(4, 5));
