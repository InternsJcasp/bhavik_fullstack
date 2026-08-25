// This function creates and returns one new node.
function createNode(value) {
  // Store the given data in the "value" property.
  // "next" will store the reference of the next node.
  // Currently, this node is not connected to any node,
  // so next is null.
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

  // This function adds a new node at the end of the list.
  function append(value) {
    // Create a new node using the given value.
    const newNode = createNode(value);

    // Check whether the linked list is empty.
    if (head === null) {
      // If the list is empty, the new node becomes
      // both the first node and the last node.
      head = newNode;
      tail = newNode;
    } else {
      // If the list is not empty, connect the current
      // last node to the new node.
      tail.next = newNode;

      // Make the new node the new last node.
      tail = newNode;
    }
  }

  // This function traverses the linked list
  // from the first node to the last node.
  function traverse() {
    // This array will store all node values
    // in their linked-list order.
    const values = [];

    // Start traversal from the first node.
    let current = head;

    // Continue traversing while current points
    // to a valid node.
    while (current !== null) {
      // Add the current node's value to the array.
      values.push(current.value);

      // Move current to the next node.
      // This is how we follow the linked-list connection.
      current = current.next;
    }

    // Return all values collected during traversal.
    return values;
  }

  // Return only the functions that should be accessible
  // outside this factory function.
  return {
    append,
    traverse,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Add the first node.
list.append(10);

// Add the second node after 10.
list.append(20);

// Add the third node after 20.
list.append(30);

// Traverse the list and print all node values.
console.log(list.traverse());
// Output: [10, 20, 30]
