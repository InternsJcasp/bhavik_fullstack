function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // Recursive call for nested arrays
    } else {
      result.push(item);
    }
  }

  return result;
}

// Example usage:
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
