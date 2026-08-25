// Solution to Next Greater Element:

// This function finds the next greater element
// for every number in the given array.
function findNextGreaterElements(numbers) {
  // Create an array with the same length as numbers.
  // Initially, fill every answer with -1.
  const result = new Array(numbers.length).fill(-1);

  // This stack stores possible next greater elements.
  // The top of the stack is at the end of the array.
  const stack = [];

  // Traverse from right to left.
  // We go right to left because we need to find
  // the first greater element on the right side.
  for (let index = numbers.length - 1; index >= 0; index -= 1) {
    // Get the current number.
    const currentNumber = numbers[index];

    // Remove all smaller or equal values from the stack.
    // They cannot be the next greater element
    // for the current number.
    while (stack.length > 0 && stack[stack.length - 1] <= currentNumber) {
      stack.pop();
    }

    // If the stack still has a value,
    // its top is the next greater element.
    if (stack.length > 0) {
      result[index] = stack[stack.length - 1];
    }

    // Push the current number into the stack.
    // It may become the next greater element
    // for numbers on its left.
    stack.push(currentNumber);
  }

  // Return the next greater element for every position.
  return result;
}

// First Input.
console.log(findNextGreaterElements([4, 5, 2, 25]));
// Output: [5, 25, 25, -1]

// Second Input.
console.log(findNextGreaterElements([13, 7, 6, 12]));
// Output: [-1, 12, 12, -1]

// Third Input
console.log(findNextGreaterElements([5, 4, 3, 2, 1]));
// Output: [-1, -1, -1, -1, -1]
