# ES6+ JavaScript & Recursion

This module focuses on modern **ES6+ JavaScript features** and the fundamentals of **Recursion**.
The goal is to understand each concept through practical examples and problem-solving rather than memorizing definitions.

---

## 📚 Learning Objectives

By completing this module, you will understand:

- Modern JavaScript syntax introduced in ES6+
- Difference between `let`, `const`, and `var`
- Arrow functions and their syntax
- Template literals
- Default parameters
- Rest and Spread operators
- Object and array destructuring
- Optional chaining
- Nullish coalescing
- Fundamentals of recursion
- Base conditions and recursive calls
- How the call stack works
- Recursion vs iteration
- Solving common recursion problems

---

# Part 1: ES6+ JavaScript Features

## 1. `let` vs `const` vs `var`

Understand the differences between:

- Scope
- Redeclaration
- Reassignment
- Hoisting
- Temporal Dead Zone

### Example

```javascript
var name = "Pratham";
let age = 22;
const country = "India";

age = 23; // Allowed

// country = "USA"; // Error
```

---

## 2. Arrow Functions

Learn the shorter syntax for writing functions.

### Traditional Function

```javascript
function add(a, b) {
  return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => {
  return a + b;
};
```

### Short Form

```javascript
const add = (a, b) => a + b;

console.log(add(10, 20));
```

---

## 3. Template Literals

Template literals make it easier to create strings containing variables and expressions.

### Example

```javascript
const name = "Pratham";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
```

### Benefits

- Variable interpolation
- Multi-line strings
- Easier string formatting

---

## 4. Default Parameters

Default parameters allow a function to use a default value when an argument is not provided.

### Example

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet("Pratham");
greet();
```

Output:

```text
Hello, Pratham
Hello, Guest
```

---

## 5. Rest & Spread Operators

Both use the `...` syntax, but they have different purposes.

### Rest Operator

Rest collects multiple values into an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));
```

### Spread Operator

Spread expands an array or object.

```javascript
const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log(newNumbers);
```

### Object Spread

```javascript
const user = {
  name: "Pratham",
  age: 22,
};

const updatedUser = {
  ...user,
  city: "Ahmedabad",
};
```

---

## 6. Destructuring

Destructuring allows values to be extracted directly from arrays and objects.

### Array Destructuring

```javascript
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
```

### Object Destructuring

```javascript
const user = {
  name: "Pratham",
  age: 22,
};

const { name, age } = user;

console.log(name);
console.log(age);
```

---

## 7. Optional Chaining

Optional chaining `?.` allows safe access to nested properties without causing an error when a value is `null` or `undefined`.

### Without Optional Chaining

```javascript
const user = {};

console.log(user.address.city);
```

This causes an error.

### With Optional Chaining

```javascript
const user = {};

console.log(user.address?.city);
```

Output:

```text
undefined
```

---

## 8. Nullish Coalescing

The nullish coalescing operator `??` provides a fallback value only when the left side is `null` or `undefined`.

### Example

```javascript
const username = null;

const displayName = username ?? "Guest";

console.log(displayName);
```

Output:

```text
Guest
```

### Important Difference

`??` only checks for:

```text
null
undefined
```

Unlike `||`, it does not treat valid falsy values such as:

```text
0
false
""
```

as missing.

---

# Part 2: Recursion Fundamentals

## What is Recursion?

Recursion is a technique where a function **calls itself** to solve a smaller version of the same problem.

A recursive function normally contains two important parts:

1. Base Condition
2. Recursive Call

---

## 1. Base Condition

The base condition tells the function when to stop.

Without a base condition, the function keeps calling itself indefinitely.

### Example

```javascript
function countDown(n) {
  if (n === 0) {
    return;
  }

  console.log(n);

  countDown(n - 1);
}

countDown(5);
```

Output:

```text
5
4
3
2
1
```

Here:

```javascript
if (n === 0) {
  return;
}
```

is the **base condition**.

---

## 2. Recursive Call

The recursive call is where the function calls itself with a smaller or simpler input.

```javascript
countDown(n - 1);
```

The important idea is:

```text
Problem
   ↓
Smaller Problem
   ↓
Smaller Problem
   ↓
Base Condition
```

---

# 3. Call Stack

JavaScript uses the **call stack** to keep track of function calls.

Consider:

```javascript
function count(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  count(n - 1);
}

count(3);
```

The calls are added to the stack:

```text
count(3)
count(2)
count(1)
count(0)
```

When the base condition is reached, functions start returning:

```text
count(0) → return
count(1) → return
count(2) → return
count(3) → return
```

This is why understanding the **call stack** is important when learning recursion.

---

# 4. Recursion vs Iteration

### Recursion

```javascript
function count(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  count(n - 1);
}
```

### Iteration

```javascript
function count(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}
```

### Comparison

| Feature                      | Recursion    | Iteration    |
| ---------------------------- | ------------ | ------------ |
| Uses function calls          | Yes          | No           |
| Uses call stack              | Yes          | Usually no   |
| Code can be shorter          | Often        | Sometimes    |
| Extra memory                 | Usually more | Usually less |
| Risk of stack overflow       | Yes          | No           |
| Good for tree/graph problems | Yes          | Sometimes    |

---

# Part 3: Recursion Problems

The following problems will be solved using recursion.

---

## 1. Print Numbers 1 to N

### Example

```text
Input: 5

Output:
1
2
3
4
5
```

### Goal

Practice:

- Base condition
- Recursive call
- Order of execution

---

## 2. Print Numbers N to 1

### Example

```text
Input: 5

Output:
5
4
3
2
1
```

### Goal

Understand how changing the position of the recursive call affects the output.

---

## 3. Factorial

Calculate:

```text
5! = 5 × 4 × 3 × 2 × 1
```

Expected result:

```text
120
```

### Recursive Formula

```text
factorial(n) = n × factorial(n - 1)
```

Base condition:

```text
factorial(0) = 1
```

---

## 4. Fibonacci

Generate Fibonacci numbers using recursion.

Sequence:

```text
0 1 1 2 3 5 8 13 ...
```

### Recursive Formula

```text
fib(n) = fib(n - 1) + fib(n - 2)
```

Base conditions:

```text
fib(0) = 0
fib(1) = 1
```

---

## 5. Sum of N Numbers

Calculate:

```text
1 + 2 + 3 + ... + N
```

### Example

```text
Input: 5

Output:
15
```

Because:

```text
1 + 2 + 3 + 4 + 5 = 15
```

---

## 6. Power of X

Calculate:

```text
x^n
```

### Example

```text
Input:
x = 2
n = 5

Output:
32
```

Because:

```text
2 × 2 × 2 × 2 × 2 = 32
```

### Recursive Formula

```text
power(x, n) = x × power(x, n - 1)
```

---

## 7. Reverse String

Reverse a string using recursion.

### Example

```text
Input:
"hello"

Output:
"olleh"
```

### Goal

Practice:

- String manipulation
- Recursive calls
- Combining results during return

---

## 8. Palindrome Check

Check whether a string reads the same forward and backward.

### Example

```text
Input:
"madam"

Output:
true
```

Another example:

```text
Input:
"hello"

Output:
false
```

### Goal

Practice recursion with:

- Two indexes
- Comparing characters
- Moving toward the center

---

## 9. Recursive Binary Search

Search for an element in a **sorted array** using recursion.

### Example

```javascript
const numbers = [10, 20, 30, 40, 50, 60, 70];
```

Search:

```text
50
```

Expected result:

```text
Index: 4
```

### Approach

```text
Find middle
    ↓
Is middle the target?
    ↓
       Yes → Return
       No
        ↓
Search left or right half
```

### Important Concept

Binary search reduces the search space by half on every recursive call.

Time Complexity:

```text
O(log n)
```

---

# 10. Tower of Hanoi

Tower of Hanoi is a classic recursion problem.

There are three rods:

```text
Source
Auxiliary
Destination
```

### Rules

1. Move only one disk at a time.
2. A larger disk cannot be placed on a smaller disk.
3. Move all disks from the source rod to the destination rod.

### Example

For `3` disks:

```text
Move disk 1 from A → C
Move disk 2 from A → B
Move disk 1 from C → B
Move disk 3 from A → C
Move disk 1 from B → A
Move disk 2 from B → C
Move disk 1 from A → C
```

### Recursive Idea

```text
Move n - 1 disks
        ↓
Move largest disk
        ↓
Move n - 1 disks
```

Time Complexity:

```text
O(2^n)
```

---

# 🧠 Problem-Solving Approach

For every recursion problem, follow this process:

```text
1. Understand the Problem
        ↓
2. Identify the Base Condition
        ↓
3. Identify the Smaller Problem
        ↓
4. Write the Recursive Call
        ↓
5. Dry Run the Function
        ↓
6. Check the Call Stack
        ↓
7. Analyze Time & Space Complexity
        ↓
8. Optimize if Possible
```

---

# 📊 Practice Checklist

## ES6+ JavaScript

- [ ] `let` vs `const` vs `var`
- [ ] Arrow Functions
- [ ] Template Literals
- [ ] Default Parameters
- [ ] Rest Operator
- [ ] Spread Operator
- [ ] Array Destructuring
- [ ] Object Destructuring
- [ ] Optional Chaining
- [ ] Nullish Coalescing

## Recursion Fundamentals

- [ ] Understand Recursion
- [ ] Base Condition
- [ ] Recursive Calls
- [ ] Call Stack
- [ ] Recursion vs Iteration

## Recursion Problems

- [ ] Print Numbers `1 to N`
- [ ] Print Numbers `N to 1`
- [ ] Factorial
- [ ] Fibonacci
- [ ] Sum of N Numbers
- [ ] Power of X
- [ ] Reverse String
- [ ] Palindrome Check
- [ ] Recursive Binary Search
- [ ] Tower of Hanoi

---

# 📈 Complexity Analysis

For every solved problem, document:

### Time Complexity

How many operations does the algorithm perform?

Example:

```text
O(n)
O(log n)
O(2^n)
```

### Space Complexity

How much additional memory does the algorithm use?

For recursive solutions, remember that the **call stack contributes to space complexity**.

Example:

```text
Recursive factorial → O(n) space
Binary search → O(log n) space
Tower of Hanoi → O(n) call stack space
```

---

# 🎯 Learning Outcome

After completing this module, you should be able to:

- Write modern ES6+ JavaScript code.
- Understand when to use `let`, `const`, and `var`.
- Use arrow functions effectively.
- Work confidently with destructuring and spread/rest syntax.
- Safely access nested data using optional chaining.
- Use nullish coalescing for fallback values.
- Understand how recursion works internally.
- Identify base conditions and recursive calls.
- Visualize recursive execution using the call stack.
- Convert simple iterative solutions into recursive solutions.
- Analyze time and space complexity.
- Solve common recursion problems independently.

---

## 🚀 Next Step

After completing these problems, move toward more advanced recursion and DSA topics:

- Recursive Array Problems
- Recursive String Problems
- Backtracking
- Tree Traversal
- DFS
- Divide and Conquer
- Merge Sort
- Quick Sort
- Advanced Binary Search
