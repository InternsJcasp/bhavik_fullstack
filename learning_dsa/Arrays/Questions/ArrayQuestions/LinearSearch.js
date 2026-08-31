// Linear Search: We will take a target and search it linearly and return it when it is founded & linear search will be done using for loop which simply meant to be traverse through each element.

// Approach: We will make a function which takes 2 parameters first one will be your array and second will be the key(target) which we are finding so in this function we will loop through array and compare each element with our key if it is matched then return it and this thing is called as Linear Search.

let array = [10, 20, 40, 50, 23];

function performLinearSearch(inputArray, key) {
  for (let i = 0; i <= inputArray.length - 1; i++) {
    if (key === inputArray[i]) {
      return `Given Key is present at ${i} index`;
    }
  }
}

console.log(performLinearSearch(array, 23));
