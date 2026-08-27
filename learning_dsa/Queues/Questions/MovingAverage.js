/**
 * Approach: Moving Average (fixed-size sliding window using queue)
 *
 * Goal:
 * - Maintain a stream of numbers and compute the average of the last `size` numbers.
 *
 * Data structures:
 * - queue: stores the last `size` numbers.
 * - sum: running sum of elements currently in the queue.
 *
 * Core idea:
 * - On next(val):
 *   1. Enqueue val into the queue and add to sum.
 *   2. If queue length exceeds `size`:
 *        - Dequeue the front element and subtract it from sum.
 *   3. Return sum / queue.length as the moving average.
 *
 * Why queue works:
 * - Queue naturally maintains insertion order.
 * - Oldest element is always at the front, easy to remove when window is full.
 *
 * Time complexity:
 * - next(val): O(1)
 *
 * Space complexity:
 * - O(size), at most `size` elements are stored in the queue.
 */

function createMovingAverage(size) {
  const queue = [];
  let sum = 0;

  function next(val) {
    queue.push(val);
    sum += val;

    if (queue.length > size) {
      const removed = queue.shift();
      sum -= removed;
    }

    return sum / queue.length;
  }

  return { next };
}

const movingAverage = createMovingAverage(3);

console.log(movingAverage.next(10));
console.log(movingAverage.next(20));
console.log(movingAverage.next(30));
console.log(movingAverage.next(40));