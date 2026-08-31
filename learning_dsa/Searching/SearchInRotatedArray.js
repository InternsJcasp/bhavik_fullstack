function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Left half sorted hai ya right?
    if (nums[left] <= nums[mid]) {
      // Left side sorted hai
      if (nums[left] <= target && target < nums[mid]) {
        // Target left me hi hoga
        right = mid - 1;
      } else {
        // Target right me hoga
        left = mid + 1;
      }
    } else {
      // Right side sorted hai
      if (nums[mid] < target && target <= nums[right]) {
        // Target right me hi hoga
        left = mid + 1;
      } else {
        // Target left me hoga
        right = mid - 1;
      }
    }
  }

  return -1;
}

const arr = [4, 5, 6, 7, 0, 1, 2];
console.log(search(arr, 0));
console.log(search(arr, 3));
