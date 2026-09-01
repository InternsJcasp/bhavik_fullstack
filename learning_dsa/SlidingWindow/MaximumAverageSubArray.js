export function MaximumAverageSubArray(arr, k) {
  let windowSum = 0;
  const n = arr.length;

  if (n === 0 || k <= 0 || k > n) {
    return null;
  }

  // First window sum
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide window
  for (let i = k; i < n; i++) {
    windowSum += arr[i] - arr[i - k];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum / k;
}

console.log(MaximumAverageSubArray([1, 12, -5, -6, 50, 3], 4));