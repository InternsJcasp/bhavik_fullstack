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

  function print() {
    let current = head;
    const values = [];

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" → "));
  }

  function size() {
    return length;
  }

  return {
    append,
    print,
    size,
  };
}

const list = createLinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print();
