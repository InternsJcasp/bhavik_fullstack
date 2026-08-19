// Quick Sort:
const quickSort = (inputArray) => {
  if (inputArray.length <= 1) {
    return inputArray;
  }

  // Take Pivot Element:
  let pivot = inputArray[inputArray.length - 1];

  let left = [];
  let right = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] < pivot) {
      left.push(inputArray[i]);
    } else {
      right.push(inputArray[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([8, 4, 10, 5, 20]));
