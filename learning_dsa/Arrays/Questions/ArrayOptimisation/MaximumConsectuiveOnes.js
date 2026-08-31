// Finding Maximum Consecutive Ones.

// Approach:
// Traverse the array once and maintain the count of consecutive 1s.
// currentCount stores the current streak of 1s.
// maxCount stores the maximum streak found so far.
// Whenever 0 is found, the current streak is broken, so currentCount becomes 0.

let array = [1, 1, 0, 1, 1, 1, 0];

function maxConsecutiveOnes(arr) {
  let currentCount = 0; // Stores the current consecutive count of 1s.
  let maxCount = 0; // Stores the maximum consecutive count found so far.

  for (const num of arr) { // Traverses each element of the array.
    if (num === 1) {
      currentCount++; // Increases the current streak because the current element is 1.

      maxCount = Math.max(maxCount, currentCount); // Updates maxCount if the current streak is larger.
    } else {
      currentCount = 0; // Resets the current streak because 0 breaks the consecutive sequence.
    }
  }

  return maxCount;
}

console.log(maxConsecutiveOnes(array));


// Time Complexity: O(n)
// Space Complexity: O(1)