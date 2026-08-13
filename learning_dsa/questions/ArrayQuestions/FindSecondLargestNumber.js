// Finding Second Largest Element present in an array.

let array = [-105, -230, -5, -25, -34, -100, 0, -1, -1045];

function findSecondLargestElement(inputArray) {
  let secondLargestElement = -Infinity;
  let largestElement = -Infinity;

  for (let i = 0; i <= inputArray.length - 1; i++) {
    if (largestElement < inputArray[i]) {
      secondLargestElement = largestElement;
      largestElement = inputArray[i];
    } else if (
      secondLargestElement < inputArray[i] &&
      inputArray[i] !== largestElement
    ) {
      secondLargestElement = inputArray[i];
    }
  }
  return secondLargestElement;
}

console.log(findSecondLargestElement(array));
