// Explanation: Target sum target diya hai, aur humein minimum length ka contiguous subarray chahiye jiska sum ≥ target. Yeh bhi variable-size sliding window hai: window grow karo jab tak sum chhota rahe, aur shrink karo jab sum target se zyada ya equal ho jaye.

// target = 7;
// nums = [2, 3, 1, 2, 4, 3];

// Explanation with Example:
// Possible subarrays with sum ≥ 7:
// [2,3,1,2] → sum = 8, length = 4
// [3,1,2,4] → sum = 10, length = 4
// [4,3] → sum = 7, length = 2 ← minimum
// Answer = 2.

function MinimumSizeSubarraySum(array, target) {
  let left = 0;
  let currentSum = 0;
  let minLen = Infinity;

  if (array.length === 0 || !target) {
    return "Either Array is empty or Target is not provided.";
  }

  for (let right = 0; right < array.length; right++) {
    currentSum += array[right];
    while (currentSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currentSum -= array[left];
      left++;
    }
  }

  return minLen;
}

let arr = [2, 3, 1, 2, 4, 2];
let arru = [];
console.log(MinimumSizeSubarraySum(arr, 7));
console.log(MinimumSizeSubarraySum(arru, 7));
