function createCircularNode(value) {
  return {
    value,
    next: null,
  };
}

function createCircularLinkedList() {
  let head = null;
  let tail = null;
  let length = 0;

  function append(value) {
    const newNode = createCircularNode(value);

    if (head === null) {
      head = newNode;
      tail = newNode;
      newNode.next = head;
    } else {
      newNode.next = head;
      tail.next = newNode;
      tail = newNode;
    }

    length += 1;
  }

  function prepend(value) {
    const newNode = createCircularNode(value);

    if (head === null) {
      head = newNode;
      tail = newNode;
      newNode.next = head;
    } else {
      newNode.next = head;
      tail.next = newNode;
      head = newNode;
    }

    length += 1;
  }

  function removeFirst() {
    if (head === null) {
      return null;
    }

    const removedValue = head.value;

    if (head === tail) {
      head = null;
      tail = null;
    } else {
      head = head.next;
      tail.next = head;
    }

    length -= 1;
    return removedValue;
  }

  function removeLast() {
    if (tail === null) {
      return null;
    }

    const removedValue = tail.value;

    if (head === tail) {
      head = null;
      tail = null;
    } else {
      let current = head;

      while (current.next !== tail) {
        current = current.next;
      }

      current.next = head;
      tail = current;
    }

    length -= 1;
    return removedValue;
  }

  function remove(value) {
    if (head === null) {
      return false;
    }

    if (head.value === value) {
      removeFirst();
      return true;
    }

    let previous = head;
    let current = head.next;

    while (current !== head) {
      if (current.value === value) {
        previous.next = current.next;

        if (current === tail) {
          tail = previous;
        }

        length -= 1;
        return true;
      }

      previous = current;
      current = current.next;
    }

    return false;
  }

  function traverse() {
    const values = [];

    if (head === null) {
      return values;
    }

    let current = head;

    do {
      values.push(current.value);
      current = current.next;
    } while (current !== head);

    return values;
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
    removeFirst,
    removeLast,
    remove,
    traverse,
    size,
    isEmpty,
  };
}

const scheduler = createCircularLinkedList();

scheduler.append("Task A");
scheduler.append("Task B");
scheduler.append("Task C");

console.log(scheduler.traverse());
// ["Task A", "Task B", "Task C"]

scheduler.prepend("Task Start");

console.log(scheduler.traverse());
// ["Task Start", "Task A", "Task B", "Task C"]

scheduler.remove("Task B");

console.log(scheduler.traverse());
// ["Task Start", "Task A", "Task C"]

scheduler.removeLast();

console.log(scheduler.traverse());
// ["Task Start", "Task A"]

// Time Complexity
/**
| Operation                  | Complexity   |
| -------------------------- | ------------ |
| Append with tail           | O(1) |
| Prepend with head and tail | O(1) |
| Remove first               | O(1) |
| Remove last                | O(n) |
| Search                     | O(n) |
| Remove by value            | O(n) |
| One complete traversal     | O(n) |
**/
