function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // 1-based index
    } else if (sum < target) {
      left++; // Need a bigger sum
    } else {
      right--; // Need a smaller sum
    }
  }

  return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]
