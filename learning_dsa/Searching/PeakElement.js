// Approach: I will check all the elements with its immediate neighbors the Number which is bigger than its left and its right I will return it as Peak Element.

let array = [20, 10, 40, 30, 50, -10];

const findPeakElement = (inputArray) => {
  let peakElement = [];

  for (i = 1; i <= inputArray.length - 1; i++) {
    if (
      inputArray[i] > inputArray[i - 1] &&
      inputArray[i] > inputArray[i + 1]
    ) {
      peakElement.push(inputArray[i]);
    }
  }
  return peakElement;
};

console.log(findPeakElement(array));

// Time Complexity: O(n)
// Space Complexity: O(1)
