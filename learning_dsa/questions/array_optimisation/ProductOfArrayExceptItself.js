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

// Third Version - v3
// Prefix Product + Suffix Product

// Approach:
// Calculate the product of elements on the left and right of every element.
// Multiply left product with right product.
// This avoids division and correctly handles 0.

function calculateProductV3(inputArray) {
  const productArray = new Array(inputArray.length).fill(1); // Stores the final product for every index.

  let prefixProduct = 1; // Stores the product of elements to the left.

  for (let i = 0; i < inputArray.length; i++) {
    productArray[i] = prefixProduct; // Stores the left-side product.

    prefixProduct *= inputArray[i]; // Adds current element to prefix product.
  }

  let suffixProduct = 1; // Stores the product of elements to the right.

  for (let i = inputArray.length - 1; i >= 0; i--) {
    productArray[i] *= suffixProduct; // Multiplies left product with right product.

    suffixProduct *= inputArray[i]; // Adds current element to suffix product.
  }

  return productArray;
}

console.log(calculateProductV3(arr));

// Time Complexity: O(n)
// Space Complexity: O(n)
