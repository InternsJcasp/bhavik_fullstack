// Basic Version:
// Reverse a String using Recursion
// let name = "hello";
// let counter = name.length - 1;
// function getReverseString(str, n) {
//   if (counter === -1) {
//     return;
//   }
//   console.log(name[counter]);
//   counter = counter - 1;
//   getReverseString(str, counter);
// }

// getReverseString(name, counter);

// Optimized Version: Removed GLobal Version and calculation of a new index is performed in function parameters only.
function getReverseString(str, index = str.length - 1) {
  if (index < 0) {
    return;
  }

  console.log(str[index]);

  return getReverseString(str, index - 1);
}

getReverseString("hello");
