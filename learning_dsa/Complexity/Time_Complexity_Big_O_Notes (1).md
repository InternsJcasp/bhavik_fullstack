# Time Complexity (Big O) Notes

## What is Time Complexity?

Time Complexity measures **how the number of operations grows as the
input size grows**.

> It does **not** measure seconds. It measures the **growth of work**.

------------------------------------------------------------------------

## Why Do We Need Time Complexity?

Two programs may give the same output, but one may take far fewer
operations.

Example:

-   Algorithm A searches 1,000,000 items one by one.
-   Algorithm B uses Binary Search and needs only about 20 comparisons.

Both are correct, but Algorithm B is much more efficient.

------------------------------------------------------------------------

# Common Time Complexities

## 1. O(1) --- Constant Time

The number of operations does not depend on input size.

``` javascript
let arr = [10, 20, 30, 40];
console.log(arr[0]);
```

**Answer**

-   Operations: 1
-   Time Complexity: **O(1)**

------------------------------------------------------------------------

## 2. O(n) --- Linear Time

The algorithm processes every element once.

``` javascript
let arr = [5, 10, 15, 20];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

**Answer**

-   Loop runs `n` times.
-   Time Complexity: **O(n)**

### Linear Search Example

``` javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
```

**Answer**

-   Best Case: **O(1)** (first element)
-   Worst Case: **O(n)** (last element or not found)

------------------------------------------------------------------------

## 3. O(log n) --- Logarithmic Time

The problem size is cut in half at every step.

Binary Search:

``` text
1024
↓
512
↓
256
↓
128
↓
64
↓
32
↓
16
↓
8
↓
4
↓
2
↓
1
```

About **10 halvings** are needed.

``` javascript
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}
```

**Answer**

-   Array must be sorted.
-   Each step removes half the search space.
-   Time Complexity: **O(log n)**

------------------------------------------------------------------------

## 4. O(n²) --- Quadratic Time

Usually happens with nested loops.

``` javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

**Answer**

-   Outer loop = `n`
-   Inner loop = `n`
-   Total operations = `n × n`
-   Time Complexity: **O(n²)**

------------------------------------------------------------------------

# Big O Comparison

    Input Size   O(1)   O(log n)    O(n)       O(n²)
  ------------ ------ ---------- ------- -----------
            10      1        \~4      10         100
           100      1        \~7     100      10,000
         1,000      1       \~10   1,000   1,000,000

------------------------------------------------------------------------

# Interview Examples

### Example 1

``` javascript
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
```

**Answer**

-   Time Complexity: **O(n)**

------------------------------------------------------------------------

### Example 2

``` javascript
console.log(arr[5]);
```

**Answer**

-   Time Complexity: **O(1)**

------------------------------------------------------------------------

### Example 3

``` javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

**Answer**

-   Time Complexity: **O(n²)**

------------------------------------------------------------------------

### Example 4

``` javascript
let i = 1;

while (i < n) {
    i *= 2;
}
```

**Answer**

-   `i` doubles every iteration.
-   Time Complexity: **O(log n)**

------------------------------------------------------------------------

# Quick Revision

  ------------------------------------------------------------------------
  Complexity              Meaning           Common Example
  ----------------------- ----------------- ------------------------------
  O(1)                    Constant          Array indexing

  O(log n)                Halves the        Binary Search
                          problem           

  O(n)                    One full          Linear Search
                          traversal         

  O(n²)                   Nested loops      Compare every element with
                                            every other element
  ------------------------------------------------------------------------

------------------------------------------------------------------------

# Key Takeaways

-   Big O measures **growth**, not seconds.
-   Always think: **"As input increases, how do operations increase?"**
-   O(1) is the fastest.
-   O(log n) is very efficient.
-   O(n) is acceptable for many problems.
-   O(n²) becomes expensive for large inputs.
