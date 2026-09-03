function moveZeroes(nums) {
  let nonZeroPos = 0;

  // Move all non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroPos] = nums[i];
      nonZeroPos++;
    }
  }

  // Fill remaining positions with zeroes
  for (let i = nonZeroPos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

// Example usage:
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
