// Basic Version:
// function checkPalindrome(input, firstPointer, secondPointer) {
//   if (firstPointer >= secondPointer) {
//     return "It is a Palindrome";
//   }
//   if (input[firstPointer] !== input[secondPointer]) {
//     return "Not a Palindrome";
//   }

//   return checkPalindrome(input, firstPointer + 1, secondPointer - 1);
// }

// let input = 1221;
// input = input.toString().toLowerCase();
// console.log(checkPalindrome(input, 0, input.length - 1));

// Optimized Solution:

function checkPalindrome(input, left, right) {
  // Base Condition
  if (left >= right) {
    return true;
  }

  // Characters don't match
  if (input[left] !== input[right]) {
    return false;
  }

  // Smaller Problem
  return checkPalindrome(input, left + 1, right - 1);
}

const input = String(1221).toLowerCase(); // convert in string first and then check or make lowercase

const result = checkPalindrome(
  input,
  0,
  input.length - 1
);

console.log(
  result ? "It is a Palindrome" : "Not a Palindrome"
);
