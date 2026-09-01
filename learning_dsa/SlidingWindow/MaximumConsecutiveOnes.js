// Explanation: Binary array diya hai (0s and 1s), aur tumhe at most k zeroes ko flip karke longest consecutive 1s ka subarray find karna hai. Yeh bhi variable-size sliding window hai with condition: “at most k zeroes in window.”

// Example:
// nums = [1,1,1,0,0,0,1,1,1,1,0];
// k = 2;

// Best window: flip two zeroes in middle to get longest run of 1s
// Window: [1,1,1,0,0,0,1,1,1,1] → zeroes = 3 → invalid
// Valid best: [1,1,1,0,0,1,1,1,1] → zeroes = 2 → length = 9 (indices 0 to 8 with two flips)

// Approach:
// left = 0, zeroCount = 0, maxLen = 0
// right move karke:
// Agar nums[right] === 0, zeroCount++
// Jab zeroCount > k:
// left move karke shrink karo
// Agar nums[left] === 0, zeroCount--
// Har valid window par maxLen = max(maxLen, right - left + 1)

function MaxConsecutiveOnesIII(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    const windowLen = right - left + 1;
    if (windowLen > maxLen) {
      maxLen = windowLen;
    }
  }

  return maxLen;
}

console.log(MaxConsecutiveOnesIII([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 9
