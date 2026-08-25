// This function creates and returns a new node.
function createNode(value) {
  // Store the actual data in the "value" property.
  // "next" stores the reference of the next node.
  // Initially, this node is not connected to any node.
  return {
    value,
    next: null,
  };
}

// This factory function creates and manages
// a singly linked list.
function createLinkedList() {
  // "head" stores the reference of the first node.
  let head = null;

  // "tail" stores the reference of the last node.
  let tail = null;

  // "length" stores the total number of nodes.
  let length = 0;

  // This function adds a new node at the end
  // so that we can create a list for testing deletion.
  function append(value) {
    // Create a new node.
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

      // Update tail because the new node is now last.
      tail = newNode;
    }

    // Increase the total number of nodes.
    length += 1;
  }

  // This function deletes the first node of the list.
  function deleteFirst() {
    // If head is null, the list is empty.
    // There is nothing to delete.
    if (head === null) {
      return null;
    }

    // Store the value of the node that will be deleted.
    const deletedValue = head.value;

    // Move head to the second node.
    // The old first node is now removed from the list.
    head = head.next;

    // Decrease the total number of nodes by one.
    length -= 1;

    // If head becomes null, it means the list became empty.
    // Therefore, tail must also become null.
    if (head === null) {
      tail = null;
    }

    // Return the value of the deleted node.
    return deletedValue;
  }

  // This function traverses the list
  // and returns all node values.
  function traverse() {
    // Store node values in this array.
    const values = [];

    // Start traversal from the first node.
    let current = head;

    // Continue until the end of the list.
    while (current !== null) {
      // Add the current node's value.
      values.push(current.value);

      // Move to the next node.
      current = current.next;
    }

    // Return all values.
    return values;
  }

  // Return the functions that can be used outside.
  return {
    append,
    deleteFirst,
    traverse,

    // Return the current length.
    size: () => length,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Add three nodes to the list.
list.append(10);
list.append(20);
list.append(30);

// Delete and print the first node.
console.log(list.deleteFirst());
// Output: 10

// Print the remaining list.
console.log(list.traverse());
// Output: [20, 30]

// Print the remaining number of nodes.
console.log(list.size());
// Output: 2
