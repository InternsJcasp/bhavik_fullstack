// This function creates and returns a new node.
function createNode(value) {
  // Store the given data in the "value" property.
  // The "next" property stores the reference
  // of the next node.
  // Initially, the node is not connected to any other node.
  return {
    value,
    next: null,
  };
}

// This factory function creates and manages
// a singly linked list.
function createLinkedList() {
  // "head" stores the reference of the first node.
  // Initially, the list is empty.
  let head = null;

  // "tail" stores the reference of the last node.
  // Initially, the list is empty.
  let tail = null;

  // This function adds a new node at the end
  // so that we can create a list for testing.
  function append(value) {
    // Create a new node with the given value.
    const newNode = createNode(value);

    // Check whether the list is empty.
    if (head === null) {
      // If the list is empty, the new node becomes
      // both the first node and the last node.
      head = newNode;
      tail = newNode;
    } else {
      // Connect the current last node to the new node.
      tail.next = newNode;

      // Make the new node the last node.
      tail = newNode;
    }
  }

  // This function finds and returns
  // the middle node's value.
  function findMiddle() {
    // If the list is empty, there is no middle node.
    if (head === null) {
      return null;
    }

    // "slow" moves one node at a time.
    let slow = head;

    // "fast" moves two nodes at a time.
    let fast = head;

    // Continue while fast can move at least one step
    // and fast can safely move two steps.
    while (fast !== null && fast.next !== null) {
      // Move slow by one node.
      slow = slow.next;

      // Move fast by two nodes.
      fast = fast.next.next;
    }

    // When fast reaches the end,
    // slow is pointing to the middle node.
    return slow.value;
  }

  // Return the functions that can be used outside.
  return {
    append,
    findMiddle,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Add five nodes to the list.
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

// Find and print the middle node's value.
console.log(list.findMiddle());
// Output: 30
