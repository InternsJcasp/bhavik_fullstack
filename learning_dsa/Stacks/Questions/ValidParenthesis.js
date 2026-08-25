// This function checks whether all brackets
// in the given string are valid and balanced.
function isValidParentheses(expression) {
  // This array works as a stack.
  // It will store opening brackets.
  const stack = [];

  // This object tells us which opening bracket
  // should match each closing bracket.
  const matchingBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // Read every character from left to right.
  for (const character of expression) {
    // If the character is an opening bracket,
    // push it into the stack.
    if (character === "(" || character === "[" || character === "{") {
      stack.push(character);
    } else {
      // This character is a closing bracket.

      // Remove the most recent opening bracket.
      // This is the top element of the stack.
      const lastOpeningBracket = stack.pop();

      // If the stack was empty, then a closing bracket
      // appeared without a matching opening bracket.
      if (lastOpeningBracket === undefined) {
        return false;
      }

      // Check whether the popped opening bracket
      // correctly matches the current closing bracket.
      if (lastOpeningBracket !== matchingBracket[character]) {
        return false;
      }
    }
  }

  // The expression is valid only if no unmatched
  // opening brackets are left in the stack.
  return stack.length === 0;
}

// Valid cases
console.log(isValidParentheses("()"));
// true

console.log(isValidParentheses("()[]{}"));
// true

console.log(isValidParentheses("{[()]}"));
// true

// Invalid cases
console.log(isValidParentheses("(]"));
// false

console.log(isValidParentheses("([)]"));
// false

console.log(isValidParentheses("((("));
// false

console.log(isValidParentheses("]"));
// false