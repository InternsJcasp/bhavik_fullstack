// Linked List using FUnctional JS.
function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createLinkedList() {
  let head = null;
  let tail = null;
  let length = 0;

  function append(value) {
    const newNode = createNode(value);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    length += 1;
  }

  function prepend(value) {
    let newNode = createNode(value);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }

    length += 1;
  }

  function print() {
    let current = head;
    const values = [];

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" → "));
  }

  function getFirst() {
    return head === null ? null : head.value;
  }

  function getLast() {
    return tail === null ? null : tail.value;
  }

  function size() {
    return length;
  }

  function isEmpty() {
    return head === null;
  }

  return {
    append,
    prepend,
    print,
    getFirst,
    getLast,
    size,
    isEmpty,
  };
}

const list = createLinkedList();

console.log(list.isEmpty()); // true

list.append(20);
list.append(30);
list.prepend(10);

list.print(); // 10 → 20 → 30
console.log(list.getFirst()); // 10
console.log(list.getLast()); // 30
console.log(list.size()); // 3
console.log(list.isEmpty()); // false
