// Intersection of 2 Arrays:

// Approach:
// Use a Frequency Map to store how many times each element appears in arr1.
// Then traverse arr2 and check if the current element is available in the frequency map.
// If available, add it to result and decrease its frequency.

// Variables:
// frequency → stores the frequency of elements from arr1.
// result → stores the common elements found in both arrays.

let arr1 = [1, 2, 3, 4, 5, 6, 6];
let arr2 = [1, 2, 6];

function intersection(arr1, arr2) {
  const frequency = new Map(); // Stores the frequency of each element from arr1.
  const result = []; // Stores the common elements found in both arrays.

  for (const num of arr1) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  for (const num of arr2) {
    if (frequency.get(num) > 0) {
      result.push(num);
      frequency.set(num, frequency.get(num) - 1);
    }
  }

  return result;
}

console.log(intersection(arr1, arr2));

// Time Complexity: O(n + m)
// Space Complexity: O(n)
