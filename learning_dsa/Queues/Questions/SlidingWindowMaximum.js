/**
 * Approach: Sliding Window Maximum (monotonic deque)
 *
 * Goal:
 * - Given an array nums and window size k,
 *   return an array of maximums for each sliding window.
 *
 * Data structure:
 * - deque: stores indices, such that corresponding values are in decreasing order.
 *   - Front of deque = index of maximum element in current window.
 *
 * Core idea:
 * - For each index i:
 *   1. Remove indices from the front that are out of the current window:
 *        while deque.front <= i - k: popFront()
 *   2. Maintain decreasing order in deque:
 *        while nums[deque.back] <= nums[i]: popBack()
 *      Then push i to back.
 *   3. If i >= k - 1, the front of deque is the max for this window.
 *
 * Why deque works:
 * - It allows O(1) removal from both ends.
 * - By keeping values decreasing, the front always holds the window maximum.
 * - Each element is added and removed at most once → O(n) total.
 *
 * Time complexity:
 * - O(n), each element is pushed and popped at most once.
 *
 * Space complexity:
 * - O(k) in the worst case for the deque.
 */

// function maxSlidingWindow(nums, k) {
//   const deque = []; // stores indices
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     // Remove indices out of the current window
//     if (deque.length > 0 && deque[0] <= i - k) {
//       deque.shift();
//     }

//     // Maintain decreasing order of values in deque
//     while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
//       deque.pop();
//     }

//     deque.push(i);

//     // Window is fully formed
//     if (i >= k - 1) {
//       result.push(nums[deque[0]]);
//     }
//   }

//   return result;
// }
