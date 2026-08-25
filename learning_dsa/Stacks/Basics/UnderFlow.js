// Implementing Stack using Functions in JS:
function createStack() {
  const items = [];

  // Add a new Value to the top of Stack.
  function push(value) {
    items.push(value);
  }

  // Remove and return the Top Value.
  function pop() {
    if (isEmpty()) {
      return null;
    }
    return items.pop();
  }

  // Peek: View the Top Element without removing it.
  function peek() {
    if (isEmpty()) {
      return null;
    }
    return items[items.length - 1];
  }

  function isEmpty() {
    return items.length === 0;
  }

  function size() {
    return items.length;
  }

  return {
    push,
    pop,
    peek,
    isEmpty,
    size,
  };
}

// Underflow: Empty stack par pop() ya peek() call karna underflow condition kehlaata hai.
const stack = createStack();

console.log(stack.pop());
// null

console.log(stack.peek());
// null