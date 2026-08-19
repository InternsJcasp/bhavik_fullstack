// Relative Sort:

const relativeSort = (arr1, arr2) => {
  const frequency = new Map();
  const result = [];

  for (const value of arr1) {
    frequency.set(value, (frequency.get(value) || 0) + 1);
  }

  for (const value of arr2) {
    const count = frequency.get(value) || 0;

    for (let i = 0; i < count; i++) {
      result.push(value);
    }

    frequency.delete(value);
  }

  const remaining = [];

  for (const [value, count] of frequency) {
    for (let i = 0; i < count; i++) {
      remaining.push(value);
    }
  }

  remaining.sort((a, b) => a - b);

  return [...result, ...remaining];
};

console.log(
  relativeSort([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
);

// Time Complexity: O(n + k log k):
// Frequency counting: O(n)
// Processing arr2: O(n)
// Sorting remaining values: O(k log k) where k is the number of remaining distinct elements.

// Space Complexity: O(n)
