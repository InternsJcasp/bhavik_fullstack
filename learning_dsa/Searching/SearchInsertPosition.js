// First Version:

// Approach: I will find the element who is bigger than my target Element and then I will simply return that Index which will be the position where new Element should be Inserted.

// const array = [10, 20, 30, 40, 70];
// // const targetElement = 50;
// const targetElement = 80;

// const findSearchInsertPosition = (inputArray, targetElement) => {
//   for (let i = 0; i <= inputArray.length - 1; i++) {
//     if (inputArray[i] > targetElement) {
//       return `Insert ${targetElement} at ${i} index`;
//     }
//   }
//   return `Insert ${targetElement} at ${inputArray.length} index`;
// };

// console.log(findSearchInsertPosition(array, targetElement));

// Time Complexity: O(n)
// Space Complexity: O(1)

// Second Version: Binary Search

const array = [10, 20, 90, 100, 170];
// const targetElement = 50;
const targetElement = 80;

const findSearchInsertPosition = (inputArray, targetElement) => {
  let left = 0;
  let right = inputArray.length - 1;
  let resultIndex = -1;
  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);

    if (inputArray[middleIndex] > targetElement) {
      right = middleIndex - 1;
      resultIndex = middleIndex;
      console.log(resultIndex);
    } else if (inputArray[middleIndex] < targetElement) {
      left = middleIndex + 1;
      resultIndex = middleIndex;
      console.log(resultIndex);
    } else if (targetElement === inputArray[middleIndex]) {
      resultIndex = middleIndex;
      console.log(resultIndex);
      return resultIndex;
    }
  }
  return `Insert ${targetElement} at ${left} index`;
};

console.log(findSearchInsertPosition(array, targetElement));

// Time Complexity: O(log n)
// Space Complexity: O(1)
