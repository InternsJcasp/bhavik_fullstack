// Square Root using Binary Search.

// Approach: I will take floor of mid of given Number and multiply with its own like this result = mid * mid and if the result is very larger than the given Number then I will again find the mid and do same and if I found result = mid * mid is smaller than the given Number then I will search in right side for the larger valid value and if I found result = mid * mid === given number then this is the exact square root value.

const findSquareRootUsingBinarySearch = (inputNumber) => {
  let midValue = Math.floor(inputNumber / 2);

  while (midValue * midValue > inputNumber) {
    midValue = Math.floor(midValue / 2);
    if (midValue * midValue === inputNumber) {
      return `Square Root of ${inputNumber} is ${midValue}`;
    }
  }
};

console.log(findSquareRootUsingBinarySearch(16));
