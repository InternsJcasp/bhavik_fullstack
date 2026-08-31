// Calculating Sum of Elements of an Array.

// Approach: Here I am finding the sum of all elements of an Array for which I have created a variable total in which the sum will be stored intitially it will be 0 and the elements gonna adding each time in this as we are using for loop initially i=0 and gos upto last index of an array and at the end it's value will be the sum of all elements present in an array.

let array = [10, 20, 30, -10, 20.01];

function findSumOfElements(inputArray) {
  let total = 0;
  for (let i = 0; i <= inputArray.length - 1; i++) {
    total += inputArray[i];
  }
  return total;
}

console.log(findSumOfElements(array));

// Time Complexity: O(n)
// Space Complexity: O(1)
