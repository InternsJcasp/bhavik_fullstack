// Square Root using Binary Search.

// Approach: I will take floor of mid of given Number and multiply with its own like this result = mid * mid and if the result is very larger than the given Number then I will again find the mid and do same and if I found result = mid * mid is smaller than the given Number then I will search in right side for the larger valid value and if I found result = mid * mid === given number then this is the exact square root value.

// const findSquareRootUsingBinarySearch = (inputNumber) => {
//   let midValue = Math.floor(inputNumber / 2);

//   while (midValue * midValue > inputNumber) {
//     midValue = Math.floor(midValue / 2);
//     if (midValue * midValue === inputNumber) {
//       return `Square Root of ${inputNumber} is ${midValue}`;
//     }
//   }
// };

// console.log(findSquareRootUsingBinarySearch(16));

// Second Version:
// Square Root using Binary Search

// Approach:
// Take two pointers: left = 0 and right = inputNumber.
// Find mid = Math.floor((left + right) / 2).
// Calculate mid * mid.
// If mid * mid === inputNumber, we found the exact square root.
// If mid * mid > inputNumber, mid is too large, so search the left half.
// If mid * mid < inputNumber, mid is too small, so search the right half.
// If there is no exact square root, return right, because it represents the largest value whose square is less than or equal to the input number.

const findSquareRootUsingBinarySearch = (inputNumber) => {
  let left = 0;
  let right = inputNumber;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    // Exact square root found
    if (square === inputNumber) {
      return `Square Root of ${inputNumber} is ${mid}`;
    }

    // mid is too large
    if (square > inputNumber) {
      right = mid - 1;
    }

    // mid is too small
    if (square < inputNumber) {
      left = mid + 1;
    }
  }

  return `Square Root of ${inputNumber} is ${right}`;
};

console.log(findSquareRootUsingBinarySearch(16));
console.log(findSquareRootUsingBinarySearch(25));
console.log(findSquareRootUsingBinarySearch(27));

// Time Complexity: O(log n)
// Space Complexity: O(1)
