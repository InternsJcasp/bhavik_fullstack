// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Lines at index 1 (height 8) and index 8 (height 7)
// Width = 8 - 1 = 7
// Height = min(8, 7) = 7
// Area = 7 * 7 = 49

// Approach (Two-Pointer, Opposite Direction):
// Idea:
// Use two pointers:
// left = 0 (start)
// right = n - 1 (end)

// At any step, the area formed by left and right is:
// area=(right−left) * min(height[left],height[right])
// We want to maximize this area.

// Strategy:
// Start with the widest container (left = 0, right = n - 1).
// Compute area, update maxArea.

// Then move the pointer that points to the shorter line:
// If height[left] < height[right] → left++
// Else → right--

// Why move the shorter line?
// The height of the container is limited by the shorter line.
// By moving the shorter line, we might find a taller line and possibly get a bigger area.
// Moving the taller line can never increase the area, because:
// Width decreases.
// Height is still limited by the shorter line (which we didn’t change).

// Find the maximum area of water a container can store.
// Time: O(n), Space: O(1)

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;

    if (area > maxArea) {
      maxArea = area;
    }

    // Move the pointer at the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Example:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // 49
