// Moving Zeroes to End:

// Approach:
// Use Two Pointers and modify the array in-place.
// i traverses the complete array.
// nonZeroIndex keeps track of the position where the next non-zero element should be placed.
// Whenever a non-zero element is found, swap it with the element at nonZeroIndex.
// This automatically moves zeroes towards the end while maintaining the order of non-zero elements.

let arr = [1, 2, 3, 0, 3, 0, 45, 0, 0, 29];

function moveZeroes(arr) {
  let nonZeroIndex = 0; // Stores the position where the next non-zero element should be placed.

  for (let i = 0; i < arr.length; i++) {
    // Traverses every element of the array.
    if (arr[i] !== 0) {
      // Checks whether the current element is non-zero.
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]]; // Swaps the non-zero element into its correct position.

      nonZeroIndex++; // Moves to the next position for the next non-zero element.
    }
  }

  return arr;
}

console.log(moveZeroes(arr));

// Time Complexity: O(n)
// Space Complexity: O(1)
