// Fast & Slow Pointers:
// Definition: The Fast and Slow Pointer technique (also called the tortoise and hare pattern) uses two pointers that move through a sequence at different speeds:
// Slow pointer: moves 1 step at a time.
// Fast pointer: moves 2 steps (or more) at a time.

// Where we use it in Production:

// Cycle detection without extra memory:
// You can detect cycles in O(1) space instead of using a Set/Map to store visited nodes.
// Important in systems where memory is constrained or data structures may be corrupted.

// Finding middle efficiently:
// For linked lists (where you can’t do random access), this is the standard way to find the middle in one pass.

// Single-pass algorithms:
// Many problems that seem to need two passes can be done in one using fast/slow pointers.

// Time & Space Complexity:
// For a sequence of length n:

// Time complexity: O(n)
// Fast pointer moves at most ~2n steps, slow pointer ~n steps → still linear.

// Space complexity: O(1)
// Only a couple of pointer variables.


// Detect Cycle in Linked list.

// Definition for singly-linked list node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Detect if a linked list has a cycle.
 * Time: O(n), Space: O(1)
 */

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // 1 step
    fast = fast.next.next; // 2 steps

    if (slow === fast) {
      // They met → cycle exists
      return true;
    }
  }

  // Fast reached the end → no cycle
  return false;
}

// Example usage:

// List without cycle: 1 -> 2 -> 3 -> null
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

console.log(hasCycle(node1)); // false

// List with cycle: 1 -> 2 -> 3 -> 2 (cycle)
node3.next = node2; // create cycle

console.log(hasCycle(node1)); // true
