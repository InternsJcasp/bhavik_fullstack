function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      longest = Math.max(longest, currentLength);
    }
  }

  return longest;
}

// Example
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
