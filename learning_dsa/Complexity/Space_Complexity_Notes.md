# Space Complexity Notes

## What is Space Complexity?

Space Complexity measures **how much EXTRA memory an algorithm uses** as
the input size grows.

> **Important:** We generally do **not** count the input itself. We
> count only the **extra memory** allocated by the algorithm.

------------------------------------------------------------------------

## Why Do We Need Space Complexity?

Two algorithms may take the same time but use different amounts of
memory.

Example:

-   Algorithm A finds the largest number using one variable.
-   Algorithm B first creates a copy of the entire array and then finds
    the largest number.

Both work, but Algorithm A uses much less memory.

------------------------------------------------------------------------

# Common Space Complexities

## 1. O(1) --- Constant Space

The algorithm uses only a fixed number of variables.

``` javascript
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
```

**Answer**

-   Extra Memory: `largest`, `i`
-   Space Complexity: **O(1)**

------------------------------------------------------------------------

## 2. O(n) --- Linear Space

The algorithm creates a new array of size `n`.

``` javascript
let copy = [];

for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
}
```

**Answer**

-   New array stores all elements.
-   Space Complexity: **O(n)**

------------------------------------------------------------------------

## 3. O(log n) --- Logarithmic Space

Usually seen in **recursive** algorithms.

Recursive Binary Search:

``` javascript
function binarySearch(arr, low, high, target) {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target)
        return binarySearch(arr, mid + 1, high, target);

    return binarySearch(arr, low, mid - 1, target);
}
```

**Answer**

-   Each recursive call is stored in the call stack.
-   Number of calls grows logarithmically.
-   Space Complexity: **O(log n)**

> **Note:** Iterative Binary Search uses only a few variables, so its
> space complexity is **O(1)**.

------------------------------------------------------------------------

## 4. O(n²) --- Quadratic Space

Creating a new matrix of size `n × n`.

``` javascript
let matrix = [];

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
    }
}
```

**Answer**

-   Total extra cells = `n × n`
-   Space Complexity: **O(n²)**

------------------------------------------------------------------------

# Time vs Space

## Example 1

``` javascript
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
```

**Answer**

-   Time Complexity: **O(n)**
-   Space Complexity: **O(1)**

------------------------------------------------------------------------

## Example 2

``` javascript
let even = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i]);
    }
}
```

**Answer**

-   Time Complexity: **O(n)**
-   Space Complexity: **O(n)** (worst case)

------------------------------------------------------------------------

# Interview Examples

### Example 1

``` javascript
console.log(arr[0]);
```

**Answer**

-   Time Complexity: **O(1)**
-   Space Complexity: **O(1)**

------------------------------------------------------------------------

### Example 2

``` javascript
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
```

**Answer**

-   Time Complexity: **O(n)**
-   Space Complexity: **O(n)**

------------------------------------------------------------------------

### Example 3

``` javascript
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
```

**Answer**

-   Time Complexity: **O(n)**
-   Space Complexity: **O(1)**

------------------------------------------------------------------------

# Common Beginner Mistake

``` javascript
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

Many beginners say Space Complexity is **O(n)** because the array has
`n` elements.

❌ Incorrect.

The array is the **input**, not extra memory.

Extra memory:

-   `i`

Therefore:

-   Time Complexity: **O(n)**
-   Space Complexity: **O(1)**

------------------------------------------------------------------------

# Quick Revision

  Space Complexity   Meaning                Example
  ------------------ ---------------------- ---------------------------
  O(1)               Fixed extra memory     Largest element, Sum
  O(log n)           Recursive call stack   Recursive Binary Search
  O(n)               New array or list      Copy array, Reverse array
  O(n²)              New matrix             Create n × n grid

------------------------------------------------------------------------

# Key Takeaways

-   Space Complexity measures **extra memory**, not execution time.
-   Do **not** count the input unless explicitly asked.
-   Count variables, new arrays, new objects, new matrices, and
    recursion stack.
-   O(1) is the most memory-efficient.
-   O(n) means memory grows with input size.
-   O(log n) usually appears with recursive divide-and-conquer
    algorithms.
