// Calculate Product of Array except current Element:
// Means do not include the current element in product.

let arr = [1, 0, -1, 2000000, 3000, 4, 10000];

// First Version - v1
// Brute Force

// Approach:
// For every element, traverse the complete array and multiply all elements except the current element.
// Simple approach but takes more time because we use a nested loop.

function calculateProductV1(inputArray) {
  const productArray = []; // Stores the product for each element.

  for (let i = 0; i < inputArray.length; i++) {
    let product = 1; // Stores the product of elements except the current element.

    for (let j = 0; j < inputArray.length; j++) {
      if (i !== j) {
        product *= inputArray[j]; // Multiplies elements except the current element.
      }
    }

    productArray.push(product); // Stores the result for the current element.
  }

  return productArray;
}

console.log(calculateProductV1(arr));

// Time Complexity: O(n²)
// Space Complexity: O(n)

// Second Version - v2
// Total Product + Division

// Approach:
// First calculate the product of all elements.
// Then divide the total product by the current element.
// This is faster than brute force but does not handle 0 correctly.

function calculateProductV2(inputArray) {
  let product = 1; // Stores the product of all elements.

  for (let i = 0; i < inputArray.length; i++) {
    product *= inputArray[i]; // Calculates the total product.
  }

  const productArray = []; // Stores the final result.

  for (let i = 0; i < inputArray.length; i++) {
    productArray.push(product / inputArray[i]); // Divides total product by current element.
  }

  return productArray;
}

// console.log(calculateProductV2(arr));

// Time Complexity: O(n)
// Space Complexity: O(n)