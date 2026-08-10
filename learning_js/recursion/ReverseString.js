// Reverse a String using Recursion
let name = "hello";
let counter = name.length - 1;
function getReverseString(str, n) {
  if (counter === -1) {
    return;
  }
  console.log(name[counter]);
  counter = counter - 1;
  getReverseString(str, counter);
}

getReverseString(name, counter);
