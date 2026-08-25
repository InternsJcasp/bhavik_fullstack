// This function creates and returns a new node.
function createNode(value) {
  // Store the given data in the "value" property.
  // "next" stores the reference of the next node.
  // Initially, this node is not connected to any other node.
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

  // This function adds a new node at the end.
  // It is used to create test data.
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

      // Update tail to the new last node.
      tail = newNode;
    }
  }

  // This function calculates and returns
  // the total number of nodes in the linked list.
  function findLength() {
    // Start the count from zero because
    // no node has been visited yet.
    let count = 0;

    // Start traversing from the first node.
    let current = head;

    // Continue while current points to a valid node.
    while (current !== null) {
      // Count the current node.
      count += 1;

      // Move to the next node.
      current = current.next;
    }

    // Return the total number of visited nodes.
    return count;
  }

  // Return the functions that can be used outside.
  return {
    append,
    findLength,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Add three nodes to the list.
list.append(10);
list.append(20);
list.append(30);

// Calculate and print the total number of nodes.
console.log(list.findLength());
// Output: 3
