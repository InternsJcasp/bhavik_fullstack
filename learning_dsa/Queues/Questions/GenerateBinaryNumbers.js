/**
 * Approach: Generate First n Binary Numbers (BFS using queue)
 *
 * Goal:
 * - Generate first n binary numbers in order:
 *   "1", "10", "11", "100", "101", ...
 *
 * Data structure:
 * - queue: stores binary strings that are yet to be expanded.
 *
 * Core idea:
 * - Start with queue = ["1"].
 * - Repeat n times:
 *   1. Dequeue front → current.
 *   2. Add current to result.
 *   3. Enqueue current + "0" and current + "1".
 *
 * Why queue works:
 * - This is a level-order (BFS) traversal of a binary tree:
 *     - Root: "1"
 *     - Left child: node + "0"
 *     - Right child: node + "1"
 * - Queue ensures we generate numbers in correct order.
 *
 * Time complexity:
 * - O(n), since we generate n strings and each operation is O(1) amortized.
 *
 * Space complexity:
 * - O(n), for the queue and result.
 */

function generateBinaryNumbers(n) {
  const queue = [];
  const result = [];

  queue.push("1");

  while (result.length < n) {
    const current = queue.shift();
    result.push(current);

    queue.push(current + "0");
    queue.push(current + "1");
  }

  return result;
}

console.log(generateBinaryNumbers(10));
