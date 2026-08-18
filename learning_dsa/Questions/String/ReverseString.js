// Approach: We will run a for loop in which we will start from last index of an array and goes upto first index and from last index all the characters are added in reverse variable from last index to first index.

let str = "hello";

function getReversedString(inputString) {
  let reverse = "";
  console.log(inputString.length);
  for (let i = inputString.length - 1; i >= 0; i--) {
    reverse += inputString[i];
  }
  return reverse;
}

console.log(getReversedString(str));
