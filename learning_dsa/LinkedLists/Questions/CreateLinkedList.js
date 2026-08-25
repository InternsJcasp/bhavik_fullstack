// This function creates and returns one new node.
function createNode(value) {
  // The node stores the actual data in the "value" property.
  // Initially, "next" is null because this node is not connected
  // to any other node yet.
  return {
    value,
    next: null,
  };
}

// This factory function creates and manages a singly linked list.
function createLinkedList() {
  // "head" stores the reference of the first node.
  // The list is empty initially, so head is null.
  let head = null;

  // "tail" stores the reference of the last node.
  // The list is empty initially, so tail is null.
  let tail = null;

  // "length" stores the total number of nodes in the list.
  let length = 0;

  // This function adds a new node at the end of the list.
  function append(value) {
    // Create a new node using the provided value.
    const newNode = createNode(value);

    // Check whether the linked list is empty.
    if (head === null) {
      // If the list is empty, this new node becomes
      // both the first node and the last node.
      head = newNode;
      tail = newNode;
    } else {
      // If the list already has nodes, connect the current
      // last node to the new node.
      tail.next = newNode;

      // Now the new node becomes the last node.
      tail = newNode;
    }

    // Increase the total number of nodes by one.
    length += 1;
  }

  // Return only the functions that should be available outside.
  // The variables head, tail, and length remain private
  // inside the createLinkedList function.
  return {
    // Allows us to add a node at the end of the list.
    append,

    // Return the first node of the list.
    // This is an arrow function with an implicit return.
    getHead: () => head,

    // Return the last node of the list.
    getTail: () => tail,

    // Return the total number of nodes.
    size: () => length,

    // Return true if the list is empty,
    // otherwise return false.
    isEmpty: () => head === null,
  };
}

// Create a new empty linked list.
const list = createLinkedList();

// Since the list has no nodes, the result is true.
console.log(list.isEmpty()); // true

// Add the first node with value 10.
list.append(10);

// Now the list contains one node,
// so the result is false.
console.log(list.isEmpty()); // false

// Return the first node.
// Since there is only one node, it is also the last node.
console.log(list.getHead());
// { value: 10, next: null }

// Return the last node.
// It is the same node because the list contains only one node.
console.log(list.getTail());
// { value: 10, next: null }

// Return the total number of nodes.
console.log(list.size()); // 1
