// Approach:
// Create an empty stack. Read the string from left to right. When an opening bracket is found, push it. When a closing bracket is found, check the top of the stack. If the top contains the matching opening bracket, pop it. If the stack is empty or the bracket does not match, return false. After processing the complete string, return true only if the stack is empty.

// My Code:
// This function creates and manages a stack.
function createStack() {
  // Store stack items in an array.
  // The last array element is the top of the stack.
  const items = [];

  // Add a value to the top of the stack.
  function push(value) {
    items.push(value);
  }

  // Remove and return the top value.
  function pop() {
    // Return null if the stack is empty.
    if (isEmpty()) {
      return null;
    }

    return items.pop();
  }

  // Return the top value without removing it.
  function peek() {
    // Return null if the stack is empty.
    if (isEmpty()) {
      return null;
    }

    return items[items.length - 1];
  }

  // Check whether the stack is empty.
  function isEmpty() {
    return items.length === 0;
  }

  // Return the public stack operations.
  return {
    push,
    pop,
    peek,
    isEmpty,
  };
}

// This function checks whether brackets are balanced.
function isBalanced(expression) {
  // Create an empty stack for opening brackets.
  const stack = createStack();

  // Store the matching opening bracket
  // for every closing bracket.
  const matchingOpeningBracket = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Read the expression one character at a time.
  for (const character of expression) {
    // If the character is an opening bracket,
    // push it onto the stack.
    if (character === "(" || character === "{" || character === "[") {
      stack.push(character);
    }

    // Check whether the character is a closing bracket.
    else if (character === ")" || character === "}" || character === "]") {
      // Remove the most recently opened bracket.
      const lastOpeningBracket = stack.pop();

      // If there is no opening bracket,
      // the expression is unbalanced.
      if (lastOpeningBracket === null) {
        return false;
      }

      // Check whether the opening bracket matches
      // the current closing bracket.
      if (lastOpeningBracket !== matchingOpeningBracket[character]) {
        return false;
      }
    }
  }

  // The expression is balanced only when
  // no unmatched opening brackets remain.
  return stack.isEmpty();
}

// Test balanced expressions.
console.log(isBalanced("()"));
// true

console.log(isBalanced("()[]{}"));
// true

console.log(isBalanced("{[()]}"));
// true

// Test unbalanced expressions.
console.log(isBalanced("(]"));
// false

console.log(isBalanced("([)]"));
// false

console.log(isBalanced("((("));
// false
