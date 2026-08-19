// Concept: It is a divide and Conquer sorting Algorithm

// Basic Approach to implement Merge Sort.

const merge = (left, right) => {
  // Time Complexity: O(n) for this
  let result = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
};

const mergeSort = (arr) => {
  // Time Complexity: O(log n)
  if (arr.length <= 1) {
    return arr;
  } // Base Condition

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));

// Time Complexity: O(n log n)
// Space Complexity: O(n)
