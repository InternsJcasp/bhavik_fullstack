function isValidParentheses(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    // If closing bracket
    if (char in map) {
      if (stack.length > 0 && stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      // Opening bracket
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]")); // Output: false
