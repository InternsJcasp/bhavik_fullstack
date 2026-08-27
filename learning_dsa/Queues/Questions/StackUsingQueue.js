/**
 * Approach: Stack using two queues (LIFO via FIFO)
 *
 * Goal:
 * - Implement a stack (Last-In-First-Out) using only two queues.
 *
 * Data structures:
 * - q1 : main queue that always holds stack elements in correct order.
 *        Front of q1 = top of stack.
 * - q2 : temporary helper queue used during push.
 *
 * Core idea:
 * - Push(x):
 *   1. Enqueue x into q2.
 *   2. Move all elements from q1 to q2 (one by one).
 *      - This puts x at the front, followed by all existing elements.
 *   3. Swap q1 and q2.
 *      - Now q1 has x at its front, and q2 becomes empty.
 * - Pop / Peek:
 *   - Pop  -> q1.shift() (remove front element)
 *   - Peek -> q1[0]      (read front element)
 *
 * Why this works:
 * - After each push, the newly pushed element is moved to the front of q1.
 * - Since queues are FIFO, removing from the front gives the last pushed element → LIFO.
 *
 * Time complexity:
 * - push: O(n)  (because we move all existing elements)
 * - pop:  O(1)
 * - peek: O(1)
 *
 * Space complexity:
 * - O(n), where n is the number of elements in the stack.
 */

function createStackWithQueues() {
  const q1 = [];
  const q2 = [];

  function push(value) {
    // Step 1: enqueue new value into q2
    q2.push(value);

    // Step 2: move all elements from q1 to q2
    while (q1.length > 0) {
      q2.push(q1.shift());
    }

    // Step 3: swap q1 and q2
    // Now q1 has the new element at the front (top of stack)
    const temp = q1;
    q1 = q2;
    q2 = temp;
  }

  function pop() {
    if (q1.length === 0) {
      return undefined;
    }
    return q1.shift(); // remove from front → top of stack
  }

  function peek() {
    if (q1.length === 0) {
      return undefined;
    }
    return q1[0]; // front of q1 is top of stack
  }

  function isEmpty() {
    return q1.length === 0;
  }

  return { push, pop, peek, isEmpty };
}
