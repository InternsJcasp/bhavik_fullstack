// This function creates and returns a new node.
function createNode(value) {
  // Store the actual data inside the node.
  // The next property will store the reference
  // of the next node.
  // Initially, the new node is not connected to any node.
  return {
    value,
    next: null,
  };
}

// This factory function creates and manages
// a singly linked list.
function createLinkedList() {
  // head stores the reference of the first node.
  // Initially, the list is empty.
  let head = null;

  // tail stores the reference of the last node.
  // Initially, the list is empty.
  let tail = null;

  // length stores the total number of nodes.
  let length = 0;

  // This function inserts a new node
  // at the beginning of the linked list.
  function insertAtBeginning(value) {
    // Create a new node with the given value.
    const newNode = createNode(value);

    // Check whether the list is empty.
    if (head === null) {
      // If the list is empty, the new node becomes
      // both the first node and the last node.
      head = newNode;
      tail = newNode;
    } else {
      // The new node should point to the current first node.
      // This connects the new node with the existing list.
      newNode.next = head;

      // Now make the new node the first node.
      head = newNode;
    }

    // Increase the number of nodes by one.
    length += 1;
  }

  // This function traverses the list
  // and returns all values in an array.
  function traverse() {
    // This array will store the values of all nodes.
    const values = [];

    // Start traversing from the first node.
    let current = head;

    // Continue until current becomes null.
    while (current !== null) {
      // Add the current node's value to the array.
      values.push(current.value);

      // Move to the next node.
      current = current.next;
    }

    // Return all values in linked-list order.
    return values;
  }

  // Return the functions that can be used outside.
  return {
    insertAtBeginning,
    traverse,

    // Return the current number of nodes.
    size: () => length,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Insert 30 into the empty list.
list.insertAtBeginning(30);

// Insert 20 before 30.
list.insertAtBeginning(20);

// Insert 10 before 20.
list.insertAtBeginning(10);

// Traverse the list and print its values.
console.log(list.traverse());
// Output: [10, 20, 30]

// Print the total number of nodes.
console.log(list.size());
// Output: 3
