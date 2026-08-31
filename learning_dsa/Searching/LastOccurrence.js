// First Version - Linear Search:

// Approach: Search for Target in array from Left to Right and when you got target for first time store its index and go for next if you get that element again then return that index.

// Time Complexity: O(n)
// Space Complexity: O(1)

let array = [1, 43, 3, 4, 4, 5, 3, 2];
let targetElement = 4;

let findTargetElementIndexLastOccurrence = (inputArray, targetElement) => {
  let resultIndex = -1;
  for (i = 0; i <= inputArray.length - 1; i++) {
    if (inputArray[i] === targetElement) {
      resultIndex = i;
    }
  }
  if (resultIndex !== -1) {
    return `${targetElement}'s is last occurring at ${resultIndex} index`;
  } else {
    return `${targetElement} not found`;
  }
};

console.log(findTargetElementIndexLastOccurrence(array, targetElement));

// Second Version:

// Approach: First Find Middle Version and then compare with Middle Value. If Target Element is not middle value and bigger than middle value Search for Target in right side and if it is smaller than middle value then search in left side. If the Middle value is same as Target Element then also search in left to find the first occurrence of that Number

// let array = [1, 2, 3, 4, 4, 5, 5];
// let targetElement = 4;

// const findTargetElementIndexLastOccurrence = (inputArray, targetElement) => {
//   let left = 0;
//   let right = inputArray.length - 1;
//   let resultIndex = -1;

//   while (left <= right) {
//     let middleIndex = Math.floor((left + right) / 2);

//     if (inputArray[middleIndex] === targetElement) {
//       left = middleIndex + 1;
//       resultIndex = middleIndex;
//     } else if (inputArray[middleIndex] > targetElement) {
//       right = middleIndex - 1;
//     } else if (inputArray[middleIndex] < targetElement) {
//       left = middleIndex + 1;
//     }
//   }
//   if (resultIndex !== -1) {
//     return `${targetElement}'s is last occurring at ${resultIndex} index`;
//   } else {
//     return `${targetElement} not found`;
//   }
// };

// console.log(findTargetElementIndexLastOccurrence(array, targetElement));

// Time Complexity: O(log n)
// Space Complexity: O(1)
