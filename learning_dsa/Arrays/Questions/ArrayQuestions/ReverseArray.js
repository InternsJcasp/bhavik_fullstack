// Reverse the Array
// Approach: Here I am using Two pointer approach for reversing the array and in this it will be like we will start with 0th index as left pointer and last index as right pointer and swap these elements every time and then increase both pointer by one index.

let array = [10, 20, 30, 40, 5];

function reverseArray(arr) {
  let left = 0; // left pointer starting at index-0
  let right = arr.length - 1; // right pointer starting at last index

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray(array));

// Time Complexity - O(n)
// Space Complexity - O(1)
