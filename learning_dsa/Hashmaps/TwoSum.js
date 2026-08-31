// Let's understand Two Sum Problem.

const TwoSum = (inputArray, target) => {
  const hash = {};
  for (let i = 0; i < inputArray.length; i++) {
    const n = inputArray[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};

console.log(TwoSum([1, 2, 3], 5));
