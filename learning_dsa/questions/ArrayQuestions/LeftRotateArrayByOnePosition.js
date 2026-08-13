// Left Rotate Array by One Position.

// Approach: For this I will be using only one loop for keeping pointer on current element and one temporary variable which will be holding value of ith index in loop and goes upto last element index.

let array = [10, 20, 30, 40];

function leftRotateArrayByOnePosition(inputArray) {
  for (let j = 0; j < inputArray.length - 1; j++) {
    let temp = inputArray[j];
    inputArray[j] = inputArray[j + 1];
    inputArray[j + 1] = temp;
  }
  return inputArray;
}

console.log(leftRotateArrayByOnePosition(array));
