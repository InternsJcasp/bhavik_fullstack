// Counting Sort: Counting Sort does not compare values like the previous sorting algorithms we have looked at, and only works on non negative integers.

//How it works:
// Create a new array for counting how many there are of the different values.
// Go through the array that needs to be sorted.
// For each value, count it by increasing the counting array at the corresponding index.
// After counting the values, go through the counting array to create the sorted array.
// For each count in the counting array, create the correct number of elements, with values that correspond to the counting array index.

let arr = [10, 5, 8, 10, 12, 19, 12, 10];

const applyCountingSort = (inputArray) => {
  let freq = {};
  let result = [];

  for (let key of inputArray) {
    if (freq[key]) {
      freq[key]++;
    } else {
      freq[key] = 1;
    }
  }

  for (let key in freq) {
    for (let i = 0; i < freq[key]; i++) {
      result.push(key);
    }
  }

  return result;
};

console.log(applyCountingSort(arr));
