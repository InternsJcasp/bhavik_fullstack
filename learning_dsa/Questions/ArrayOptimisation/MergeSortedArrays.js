// Merging 2 sorted Arrays:

// Approach:
// Use Two Pointers because both arrays are sorted.
// i points to the current element of arr1 and j points to the current element of arr2.
// Compare both elements, add the smaller element to result, and move that pointer.
// When one array is completely traversed, add the remaining elements of the other array.

array1 = [1, 10, 12, 16, 90];
array2 = [1, 23, 45, 23, 90];

function mergeSortedArrays(arr1, arr2) {
  let i = 0; // Points to the current element of arr1.
  let j = 0; // Points to the current element of arr2.

  const result = []; // Stores the final merged sorted array.

  while (i < arr1.length && j < arr2.length) {
    // Runs while both arrays still have elements to compare.
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]); // Adds the smaller element from arr1 to result.
      i++; // Moves to the next element of arr1.
    } else {
      result.push(arr2[j]); // Adds the smaller element from arr2 to result.
      j++; // Moves to the next element of arr2.
    }
  }

  while (i < arr1.length) {
    // Adds remaining elements if arr1 still has elements.
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    // Adds remaining elements if arr2 still has elements.
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSortedArrays(array1, array2));

// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
