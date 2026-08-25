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

const stack = createStack();

// Pushing values into Stack.
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

// using peek to view the Top Element of Stack.
console.log(stack.peek());

// Popping value from stack.
stack.pop();

// using peek to view the Top Element of Stack after Popping.
console.log(stack.peek());


// Underflow: Empty stack par pop() ya peek() call karna underflow condition kehlaata hai.
const stack = createStack();

console.log(stack.pop());
// null

console.log(stack.peek());
// null