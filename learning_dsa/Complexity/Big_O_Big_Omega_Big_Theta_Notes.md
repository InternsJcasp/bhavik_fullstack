# Big O, Big Omega, and Big Theta Notes

## Why Do We Need Complexity Notations?

When we analyze an algorithm, we want to know:

-   What is the **maximum** time it can take?
-   What is the **minimum** time it can take?
-   What is its **typical/exact growth**?

These are represented using **Big O**, **Big Omega**, and **Big Theta**.

------------------------------------------------------------------------

# 1. Big O --- O() (Worst Case / Upper Bound)

## Definition

Big O tells us the **maximum amount of work** an algorithm may perform
as the input size grows.

It represents the **Worst Case**.

### Example: Linear Search

``` javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
```

Searching for the last element:

``` text
[10,20,30,40,50]
                ↑
```

**Answer**

-   Worst Case: Check every element.
-   Time Complexity: **O(n)**

------------------------------------------------------------------------

# 2. Big Omega --- Ω() (Best Case / Lower Bound)

## Definition

Big Omega tells us the **minimum amount of work** an algorithm performs.

It represents the **Best Case**.

### Example: Linear Search

Searching for the first element:

``` text
[10,20,30,40,50]
 ↑
```

**Answer**

-   First comparison finds the answer.
-   Time Complexity: **Ω(1)**

------------------------------------------------------------------------

# 3. Big Theta --- Θ() (Tight Bound)

## Definition

Big Theta represents the **typical or exact asymptotic growth** when the
algorithm consistently grows at the same rate.

### Example

``` javascript
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

**Answer**

-   Loop always runs `n` times.
-   Time Complexity: **Θ(n)**

------------------------------------------------------------------------

# Comparison Using Linear Search

  Case                       Complexity
  -------------------------- ------------
  First element found        Ω(1)
  Last element / Not found   O(n)
  Typical growth             Θ(n)

------------------------------------------------------------------------

# Another Example

``` javascript
console.log(arr[5]);
```

**Answer**

-   Best Case: Ω(1)
-   Worst Case: O(1)
-   Tight Bound: Θ(1)

Reason: Array indexing always takes constant time.

------------------------------------------------------------------------

# Easy Comparison Table

  Notation   Represents    Easy Meaning
  ---------- ------------- ------------------------
  O()        Worst Case    Maximum time
  Ω()        Best Case     Minimum time
  Θ()        Tight Bound   Typical / Exact growth

------------------------------------------------------------------------

# Interview Notes

-   Big **O** is the most commonly used notation.
-   Unless an interviewer specifies otherwise, "Time Complexity" usually
    means **Big O (Worst Case)**.
-   Knowing the basic idea of **Ω** and **Θ** is enough for beginner and
    intermediate DSA interviews.

------------------------------------------------------------------------

# Key Takeaways

-   **O()** → Worst Case (Upper Bound)
-   **Ω()** → Best Case (Lower Bound)
-   **Θ()** → Tight Bound (Typical/Exact Growth)
-   Most interview discussions use **Big O** by default.
