// Binary Search: It means that you search for Target Element by iterating on Each and Every element and compare it with the target element and if it matches then the result is returned. The Prerequisite is that the Array must be sorted to perform Binary Search.

// Time Complexity: O(log n) - In worst case if the target Element is at last index.
// Time Complexity: O(1) - In Best Case if the target Element is at first index.

// Space Complexity: O(1) - Because we are just iterating and returning a result if in case we have to make a copy of the given array then the space complexity will be O(n)

// Example Code:
let array = [10, 20, 30, 40, 50, 60];
let targetElement = 30;

const applyBinarySearch = (inputArray, targetElement) => {
  let left = 0;
  let right = inputArray.length - 1;
  let resultIndex = -1;

  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);
    if (inputArray[middleIndex] === targetElement) {
      return `${targetElement} is found at ${middleIndex} index`;
    } else if (inputArray[middleIndex] > targetElement) {
      left = middleIndex + 1;
    } else if (inputArray[middleIndex] < targetElement) {
      right = middleIndex - 1;
    }
  }
};

console.log(applyBinarySearch(array, targetElement));
