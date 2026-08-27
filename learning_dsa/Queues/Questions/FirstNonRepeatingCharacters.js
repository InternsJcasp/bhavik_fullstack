/**
 * Approach: First Non-repeating Character in a Stream
 *
 * Goal:
 * - For each incoming character, return the first non-repeating character so far.
 * - If no such character exists, return '#'.
 *
 * Data structures:
 * - freq: object/map storing count of each character.
 * - queue: stores characters in order of arrival.
 *
 * Core idea:
 * - On receiving character ch:
 *   1. Increment freq[ch].
 *   2. Enqueue ch.
 *   3. While queue is not empty and freq[queue.front] > 1:
 *        - Dequeue front (it's repeating).
 *   4. If queue is empty → return '#'.
 *      Else → return queue.front as the first non-repeating character.
 *
 * Why queue works:
 * - Queue maintains arrival order.
 * - Repeating characters are removed from the front as soon as their count > 1.
 * - The front of the queue is always the earliest character with count == 1.
 *
 * Time complexity:
 * - Each character is enqueued once and dequeued at most once → O(1) amortized per character.
 *
 * Space complexity:
 * - O(k), where k is the number of distinct characters in the stream.
 */

function createFirstNonRepeatingCharStream() {
  const queue = [];
  const freq = {};

  function addChar(ch) {
    // Update frequency
    freq[ch] = (freq[ch] || 0) + 1;

    // Add to queue
    queue.push(ch);

    // Remove repeating characters from front
    while (queue.length > 0 && freq[queue[0]] > 1) {
      queue.shift();
    }

    // Return first non-repeating or '#'
    if (queue.length === 0) {
      return "#";
    }
    return queue[0];
  }

  return { addChar };
}
