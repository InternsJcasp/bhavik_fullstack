// Basic Version:
function insertionSort(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    let key = inputArray[i];
    let j = i - 1;

    while (j >= 0 && inputArray[j] > key) {
      inputArray[j + 1] = inputArray[j];
      j--;
    }

    inputArray[j + 1] = key;
  }

  return inputArray;
}

const inputArray = [20, 14, 53, 3, 22.5, 12, -10];

console.log(insertionSort(inputArray));
