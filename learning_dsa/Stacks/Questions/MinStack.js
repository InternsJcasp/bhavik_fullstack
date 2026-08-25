// This function creates and manages a Min Stack.
function createMinStack() {
  // This stack stores all actual values.
  const mainStack = [];

  // This stack stores the minimum value
  // for every corresponding mainStack level.
  const minStack = [];

  // Add a value to the top of the Min Stack.
  function push(value) {
    // Add the actual value to the main stack.
    mainStack.push(value);

    // If minStack is empty, this value is the minimum.
    if (minStack.length === 0) {
      minStack.push(value);
    } else {
      // Get the current minimum from minStack's top.
      const currentMin = minStack[minStack.length - 1];

      // Store the smaller value at this stack level.
      minStack.push(Math.min(value, currentMin));
    }
  }

  // Remove and return the top value.
  function pop() {
    // If stack is empty, there is nothing to remove.
    if (mainStack.length === 0) {
      return null;
    }

    // Remove the minimum state for the same stack level.
    minStack.pop();

    // Remove and return the actual top value.
    return mainStack.pop();
  }

  // Return the top value without removing it.
  function peek() {
    // Return null if the stack is empty.
    if (mainStack.length === 0) {
      return null;
    }

    // Last array value is the stack's top.
    return mainStack[mainStack.length - 1];
  }

  // Return the current minimum value in O(1) time.
  function getMin() {
    // Return null if the stack is empty.
    if (minStack.length === 0) {
      return null;
    }

    // Top of minStack always stores the current minimum.
    return minStack[minStack.length - 1];
  }

  // Check whether the stack is empty.
  function isEmpty() {
    return mainStack.length === 0;
  }

  // Return the number of actual values in the stack.
  function size() {
    return mainStack.length;
  }

  // Return the public operations.
  return {
    push,
    pop,
    peek,
    getMin,
    isEmpty,
    size,
  };
}

// Create a new empty Min Stack.
const minStack = createMinStack();

// Push values into the stack.
minStack.push(5);
minStack.push(2);
minStack.push(8);
minStack.push(1);

// Print the current top value.
console.log(minStack.peek());
// Output: 1

// Print the smallest value currently present.
console.log(minStack.getMin());
// Output: 1

// Remove the top value, which is 1.
console.log(minStack.pop());
// Output: 1

// The minimum is restored to 2.
console.log(minStack.getMin());
// Output: 2

// Remove the top value, which is 8.
console.log(minStack.pop());
// Output: 8

// Minimum remains 2.
console.log(minStack.getMin());
// Output: 2

// Remove 2.
console.log(minStack.pop());
// Output: 2

// Minimum now becomes 5.
console.log(minStack.getMin());
// Output: 5
