function getPowerOfX(number, power) {
  if (power === 0) {
    return 1;
  }
  // smaller Problem
  let result = number * getPowerOfX(number, power - 1);

  return result;
}

console.log(getPowerOfX(4, 5));
