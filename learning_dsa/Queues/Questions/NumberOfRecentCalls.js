/**
 * Approach: Number of Recent Calls (sliding window queue)
 *
 * Goal:
 * - Count how many calls happened in the last 3000 ms including the current call.
 *
 * Data structure:
 * - A queue that stores timestamps of all calls.
 *
 * Core idea:
 * - On ping(t):
 *   1. Enqueue t into the queue.
 *   2. Remove timestamps from the front that are older than (t - 3000).
 *      - While queue.front < t - 3000: dequeue()
 *   3. Return queue.length as the count of recent calls.
 *
 * Why queue works:
 * - Timestamps are strictly increasing.
 * - Old calls are always at the front of the queue.
 * - We only need to trim from the front to maintain a sliding window of 3000 ms.
 *
 * Time complexity:
 * - ping(t): O(1) amortized
 *   - Each timestamp is enqueued once and dequeued once.
 *
 * Space complexity:
 * - O(n), where n is the number of calls in the last 3000 ms window.
 */

function createRecentCallCounter() {
  const queue = [];

  function ping(t) {
    // Add current timestamp
    queue.push(t);

    // Remove old timestamps outside the [t - 3000, t] window
    const limit = t - 3000;
    while (queue.length > 0 && queue[0] < limit) {
      queue.shift();
    }

    return queue.length;
  }

  return { ping };
}

const recentCounter = createRecentCallCounter();

// Testing with Multiple Inputs:
console.log(recentCounter.ping(300));
console.log(recentCounter.ping(3000));
console.log(recentCounter.ping(4000));
console.log(recentCounter.ping(5000));
console.log(recentCounter.ping(5500));
