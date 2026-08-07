// Problem 5 — Longest Consecutive Sequence Length (Mixed Logic)
// Given an unsorted array of integers, find the length of the longest consecutive sequence.

// Input let arr = [100, 4, 200, 1, 3, 2];
// Output 4
// Explanation

// The longest consecutive sequence is:
// 1 → 2 → 3 → 4
// Length = 4

let arr = [100, -4, 200, 1, 1, 3, 2];

function findLongestConsecutiveSequenceLength(arr) {
  let uniqueNumbers = new Set(arr);
  let longest = 1;

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNumbers.has(arr[i] - 1)) {
      let current = arr[i];
      let length = 1;

      while (uniqueNumbers.has(current + 1)) {
        current++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}
console.log(findLongestConsecutiveSequenceLength(arr));
