// Base Version: Recursive Binary Search
// function recursiveBinarySearch(arr, target, left, right) {
//   if (left > right) {
//     return "Not found Target";
//   }
//   let middle = Math.floor((left + right) / 2);
//   if (target === arr[middle]) {
//     return `Found ${target} at ${middle}th index`;
//   }
//   if (target < arr[middle]) {
//     return binarySearch(arr, target, left, middle - 1);
//   }
//   if (target > arr[middle]) {
//     return binarySearch(arr, target, middle + 1, right);
//   }
// }

// const array = [1, 2, 4, 8, 16, 20, 22, 25, 28];
// console.log(recursiveBinarySearch(array, 25, 0, array.length - 1));

// Time Complexity- O(logn)
// Space Complexity- O(log n)

// Optimized Version: Iterative Binary Search

function iterativeBinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      return `Found ${target} at ${middle}th index`;
    }

    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return "Not Found Target";
}

const array = [1, 2, 4, 8, 16, 20, 22, 25, 28];
console.log(iterativeBinarySearch(array, 22));

// Time Complexity- O(logn)
// Space Complexity- O(1)
