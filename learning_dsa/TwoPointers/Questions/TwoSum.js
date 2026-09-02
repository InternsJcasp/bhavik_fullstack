// Problem:
// Input: ((arr = [2, 7, 11, 15]), (target = 9));
// Output: [0, 1];
// Because arr[0] + arr[1] = 2 + 7 = 9

// Approach: Assume arr is sorted.

// Idea:
// Use two pointers:
// left = 0 (start)
// right = arr.length - 1 (end)
// Compute sum = arr[left] + arr[right].

// If:
// sum === target → found the pair → return [left, right].
// sum < target → need a larger sum → move left++.
// sum > target → need a smaller sum → move right--.

// Continue until left >= right.

function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return "No Numbers have sum equals to Target";
}

console.log(twoSum([10, 40, 20, 90], 60));

// Time and Space Complexity:

// Time complexity: O(n)
// We traverse the array at most once with two pointers.
// Each step moves either left or right.

// Space complexity: O(1)
// Only a few variables: left, right, sum
