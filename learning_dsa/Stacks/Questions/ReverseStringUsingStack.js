// This function creates and manages a stack.
function createStack() {
  // This array stores stack values.
  // The last array element is the top of the stack.
  const items = [];

  // Add a value at the top of the stack.
  function push(value) {
    items.push(value);
  }

  // Remove and return the top value.
  function pop() {
    // Return null when the stack is empty.
    if (items.length === 0) {
      return null;
    }

    return items.pop();
  }

  // Check whether the stack is empty.
  function isEmpty() {
    return items.length === 0;
  }

  // Return public stack methods.
  return {
    push,
    pop,
    isEmpty,
  };
}

// This function reverses a string using a stack.
function reverseString(text) {
  // Create an empty stack.
  const stack = createStack();

  // This variable will store the reversed string.
  let reversedText = "";

  // Push every character of the input string into the stack.
  for (const character of text) {
    stack.push(character);
  }

  // Pop every character from the stack.
  // Last pushed character comes out first.
  while (!stack.isEmpty()) {
    reversedText += stack.pop();
  }

  // Return the reversed string.
  return reversedText;
}

console.log(reverseString("hello"));
// Output: "olleh"

console.log(reverseString("JavaScript"));
// Output: "tpircSavaJ"

console.log(reverseString(""));
// Output: ""
