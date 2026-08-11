function SelectionSort(inputArray) {
  for (let i = 0; i < inputArray.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j] < inputArray[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [inputArray[i], inputArray[minIndex]] = [
        inputArray[minIndex],
        inputArray[i],
      ];
    }
  }
  return inputArray;
}

const inputArray = [45, 23, 46, 24, 10, 26];
console.log(SelectionSort(inputArray));
