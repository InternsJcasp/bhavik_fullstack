// Finding Maximum Element in an array

// Approach: Will consider the first element as maximum initially and after that compare all elements with that first element and if the current element is greater than assumed maximum element then current element will be considered as Maximum Element.

// Simple Basic Approach:
let array = [105, 230, 5, 25, 34, 100, 1045];

// function findLargestElement(inputArray) {
//   let largestElement = inputArray[0];
//   for (let i = 0; i <= inputArray.length - 1; i++) {
//     for (let j = i + 1; j <= inputArray.length - 1; j++) {
//       if (inputArray[j] > maxElement) {
//         largestElement = inputArray[j];
//       }
//     }
//   }
//   return largestElement;
// }
// console.log(findLargestElement(array));

// Two Pointer Approach: I will assume array's first element as maximum element and take only one Loop and compare the assumed maximum element with each Element and check if it is greater than assumed maximum element if yes then that current element will be my maximum element.

function findMaximumElement(inputArray) {
  let maxElement = inputArray[0];
  for (let i = 0; i <= inputArray.length - 1; i++) {
    if (maxElement < inputArray[i]) {
      maxElement = inputArray[i];
    }
  }
  return maxElement;
}

console.log(findMaximumElement(array));
