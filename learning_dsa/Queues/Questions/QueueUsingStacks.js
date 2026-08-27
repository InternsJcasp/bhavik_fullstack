/**
 * Approach: Queue using two stacks (FIFO via LIFO)
 *
 * Goal:
 * - Implement a queue (First-In-First-Out) using only two stacks.
 *
 * Data structures:
 * - inStack  : used for all enqueue operations.
 * - outStack : used for all dequeue/peek operations.
 *
 * Core idea:
 * - Enqueue(x):
 *   - Always push x into inStack.
 * - Dequeue / Peek:
 *   - If outStack is empty, transfer all elements from inStack to outStack:
 *       while inStack not empty:
 *         outStack.push(inStack.pop())
 *     This reverses the order once, so the oldest element becomes the top of outStack.
 *   - Then:
 *       - Dequeue  -> outStack.pop()
 *       - Peek     -> outStack[top]
 *
 * Why this works:
 * - inStack stores elements in push order: [oldest ... newest] (top = newest).
 * - When moved to outStack, the order becomes: [newest ... oldest] (top = oldest).
 * - So the first enqueued element becomes the first to be dequeued → FIFO behavior.
 *
 * Time complexity (amortized):
 * - enqueue: O(1)
 * - dequeue: O(1) amortized (each element is moved from inStack to outStack at most once)
 * - peek:    O(1) amortized
 *
 * Space complexity:
 * - O(n), where n is the number of elements in the queue.
 */

function createQueueWithStacks() {
  const inStack = [];
  const outStack = [];

  function enqueue(value) {
    // Always push into inStack
    inStack.push(value);
  }

  function moveInToOut() {
    // Only move when outStack is empty
    if (outStack.length === 0) {
      while (inStack.length > 0) {
        outStack.push(inStack.pop());
      }
    }
  }

  function dequeue() {
    // Make sure outStack has elements to pop
    moveInToOut();

    if (outStack.length === 0) {
      // Both stacks are empty to queue bhi empty
      return undefined;
    }

    return outStack.pop();
  }

  function peek() {
    // Same idea as dequeue, but don't remove
    moveInToOut();

    if (outStack.length === 0) {
      return undefined;
    }

    // Top of outStack is the front of the queue
    return outStack[outStack.length - 1];
  }

  function isEmpty() {
    return inStack.length === 0 && outStack.length === 0;
  }

  return { enqueue, dequeue, peek, isEmpty };
}
