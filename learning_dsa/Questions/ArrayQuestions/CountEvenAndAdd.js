// Count Even Numbers and Add them:

// Approach: I will use a loop to iterate over an array and in that create one variable sum=0 in that and then I will find that the element is even or odd and if it is even then it will be added with sum and at the end of loop the function will return the sum value.

let array = [10, 11, 12, 13, 14, -5];

function countEvenNumbersAndAdd(inputArray) {
  let sum = 0;
  for (let i = 0; i <= inputArray.length - 1; i++) {
    if (inputArray[i] % 2 === 0) {
      sum += inputArray[i];
    }
  }
  return sum;
}

console.log(countEvenNumbersAndAdd(array));
