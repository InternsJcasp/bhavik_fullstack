// This function creates and returns a new node.
function createNode(value) {
  // Store the actual data in the "value" property.
  // "next" stores the reference of the next node.
  // Initially, the node is not connected to another node.
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

  // This function adds a new node at the end.
  // It is used to create test data for searching.
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

  // This function searches for a target value
  // inside the linked list.
  function searchElement(target) {
    // Start searching from the first node.
    let current = head;

    // Continue searching until the end of the list.
    while (current !== null) {
      // Compare the current node's value
      // with the target value.
      if (current.value === target) {
        // If the values match, the target was found.
        return true;
      }

      // If the current value does not match,
      // move to the next node.
      current = current.next;
    }

    // If the loop finishes, no node contained
    // the target value.
    return false;
  }

  // Return the functions that can be used outside.
  return {
    append,
    searchElement,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Add values to the linked list.
list.append(10);
list.append(20);
list.append(30);

// Search for 20.
console.log(list.searchElement(20));
// Output: true

// Search for 99.
console.log(list.searchElement(99));
// Output: false
