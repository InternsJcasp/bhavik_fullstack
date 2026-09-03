function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let windowSum = 0;

  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window through the array
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // Add new element, remove old element
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example usage:
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9 (from [5, 1, 3])
