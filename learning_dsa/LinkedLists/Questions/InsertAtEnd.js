// This function creates and returns a new node.
function createNode(value) {
  // Store the given data in the node.
  // The new node does not point to any other node initially.
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

  // "length" stores the total number of nodes.
  let length = 0;

  // This function inserts a new node
  // at the end of the linked list.
  function insertAtEnd(value) {
    // Create a new node with the provided value.
    const newNode = createNode(value);

    // Check whether the list is empty.
    if (head === null) {
      // If the list is empty, the new node becomes
      // both the first node and the last node.
      head = newNode;
      tail = newNode;
    } else {
      // If the list is not empty, connect the current
      // last node to the new node.
      tail.next = newNode;

      // Now the new node becomes the last node.
      tail = newNode;
    }

    // Increase the total number of nodes by one.
    length += 1;
  }

  // This function traverses the linked list
  // from head to the end.
  function traverse() {
    // This array stores the values of all nodes.
    const values = [];

    // Start traversal from the first node.
    let current = head;

    // Continue until current becomes null.
    while (current !== null) {
      // Add the current node's value to the array.
      values.push(current.value);

      // Move current to the next node.
      current = current.next;
    }

    // Return all values in linked-list order.
    return values;
  }

  // Return the functions that can be used outside.
  return {
    insertAtEnd,
    traverse,

    // Return the current number of nodes.
    size: () => length,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Insert 10 at the end of the list.
list.insertAtEnd(10);

// Insert 20 after 10.
list.insertAtEnd(20);

// Insert 30 after 20.
list.insertAtEnd(30);

// Traverse the list and print all values.
console.log(list.traverse());
// Output: [10, 20, 30]

// Print the total number of nodes.
console.log(list.size());
// Output: 3
