// Given an Array of integers arr & an integer k, Find the Maximum Sum of any contiguous subarray of size exactly k.

// Approach: Fixed Size Sliding Window:
// 1. Pehle k elements ka sum nikaalo: 1st Window hai yeh
// 2. Ab Window ko ek-ek step right side slide karo.
// 2.1 Naya Element add karo
// 2.2 Purana Element subtract karo
// 3. Har window ke bad maxSum update karo.

export function MaximumSumSubArray(arr, k) {
  let windowSum = 0;
  let left = 0;
  const n = arr.length;

  if (n === 0 || k <= 0 || k > n) {
    return null;
  }

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(MaximumSumSubArray([2, 1, 5, 1, 3, 2], 3));
