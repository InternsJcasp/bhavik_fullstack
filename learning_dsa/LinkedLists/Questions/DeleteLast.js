// This function creates and returns a new node.
function createNode(value) {
  // Store the actual data in the "value" property.
  // "next" stores the reference of the next node.
  return {
    value,
    next: null,
  };
}

// This factory function creates and manages
// a singly linked list.
function createLinkedList() {
  // "head" stores the first node.
  let head = null;

  // "tail" stores the last node.
  let tail = null;

  // "length" stores the total number of nodes.
  let length = 0;

  // This function adds a node at the end.
  // It is used here to prepare test data.
  function append(value) {
    // Create a new node.
    const newNode = createNode(value);

    // If the list is empty,
    // the new node becomes head and tail.
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      // Connect the old last node to the new node.
      tail.next = newNode;

      // Update tail to the new last node.
      tail = newNode;
    }

    // Increase the total node count.
    length += 1;
  }

  // This function deletes the last node of the list.
  function deleteLast() {
    // If head is null, the list is empty.
    if (head === null) {
      return null;
    }

    // Store the value of the current last node.
    const deletedValue = tail.value;

    // Check whether the list contains only one node.
    if (head === tail) {
      // After deleting the only node,
      // both head and tail must become null.
      head = null;
      tail = null;
    } else {
      // Start from the first node.
      let current = head;

      // Move until current becomes
      // the second-last node.
      while (current.next !== tail) {
        current = current.next;
      }

      // Remove the connection to the old last node.
      current.next = null;

      // Make the second-last node the new tail.
      tail = current;
    }

    // Decrease the number of nodes.
    length -= 1;

    // Return the value of the deleted node.
    return deletedValue;
  }

  // This function traverses the list
  // and returns all values.
  function traverse() {
    // Store node values in this array.
    const values = [];

    // Start from the head.
    let current = head;

    // Continue until current becomes null.
    while (current !== null) {
      // Add the current value.
      values.push(current.value);

      // Move to the next node.
      current = current.next;
    }

    // Return all values.
    return values;
  }

  // Return the public functions.
  return {
    append,
    deleteLast,
    traverse,

    // Return the current length.
    size: () => length,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Add three nodes.
list.append(10);
list.append(20);
list.append(30);

// Delete and print the last node.
console.log(list.deleteLast());
// Output: 30

// Print the remaining list.
console.log(list.traverse());
// Output: [10, 20]

// Print the remaining number of nodes.
console.log(list.size());
// Output: 2
