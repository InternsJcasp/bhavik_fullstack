// Basic Version:
function sortInDescendingOrder(inputArray) {
  for (let i = 0; i < inputArray.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j] > inputArray[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      [inputArray[i], inputArray[maxIndex]] = [
        inputArray[maxIndex],
        inputArray[i],
      ];
    }
  }
  return inputArray;
}

const inputArray = [20, 40, 23, 100, 10, 5];

console.log(sortInDescendingOrder(inputArray));
