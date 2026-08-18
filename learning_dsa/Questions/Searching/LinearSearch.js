// Linear Search: It means that you search for Target Element by iterating on Each and Every element and compare it with the target element and if it matches then the result is returned.

// Time Complexity: O(n) - In worst case if the target Element is at last index.
// Time Complexity: O(1) - In Best Case if the target Element is at first index.

// Space Complexity: O(1) - Because we are just iterating and returning a result if in case we have to make a copy of the given array then the space complexity will be O(n)

// Example Code:
let array = [10, 20, 30, 40, 50, 60];
let targetElement = 30;

const applyLinearSearch = (inputArray, target) => {
  for (let i = 0; i <= inputArray.length - 1; i++) {
    if (inputArray[i] === targetElement) {
      return `${targetElement} is found at ${i} index`;
    }
  }
};

console.log(applyLinearSearch(array, targetElement));
