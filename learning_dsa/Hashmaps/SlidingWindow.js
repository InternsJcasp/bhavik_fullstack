function maxSum(arr, k) {
  let windowSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i];
    windowSum -= arr[i - k];

    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSum([2, 4, 1, 5, 3], 3));