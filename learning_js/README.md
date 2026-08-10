# ES6+ JavaScript & Recursion

This module focuses on **modern ES6+ JavaScript features** and the fundamentals of **Recursion** through practical problem-solving.

The goal is to understand how these concepts work and apply them independently through coding practice.

---

# 📚 Learning Objectives

By completing this module, you will learn:

- Modern ES6+ JavaScript features
- Variable declaration and scope
- Arrow functions
- Template literals
- Default parameters
- Rest and Spread operators
- Destructuring
- Optional chaining
- Nullish coalescing
- Recursion fundamentals
- Base conditions
- Recursive calls
- Call stack
- Recursion vs Iteration
- Problem-solving using recursion
- Time and Space Complexity analysis

---

# Part 1: ES6+ JavaScript Features

## 1. `let` vs `const` vs `var`

Understand the differences between:

- Scope
- Redeclaration
- Reassignment
- Hoisting
- Temporal Dead Zone
- Block scope
- Function scope

### Practice

Create examples using `var`, `let`, and `const` and observe their behavior in different scopes.

---

## 2. Arrow Functions

Learn:

- Arrow function syntax
- Parameters
- Single parameter syntax
- Multiple parameters
- Implicit return
- Explicit return
- Arrow functions with arrays
- Arrow functions with callbacks
- Difference between normal functions and arrow functions

### Practice

Convert traditional functions into arrow functions.

---

## 3. Template Literals

Learn:

- Template literal syntax
- Variable interpolation
- Expressions inside strings
- Multi-line strings
- Dynamic string creation

### Practice

Create dynamic messages using variables and expressions.

---

## 4. Default Parameters

Learn:

- What default parameters are
- Why default parameters are useful
- Passing arguments
- Missing arguments
- Default values with multiple parameters

### Practice

Create functions that use default values when arguments are not provided.

---

## 5. Rest Operator

Learn:

- Rest parameter syntax
- Collecting multiple function arguments
- Rest parameters with other parameters
- Rest parameters with arrays
- Rest parameters with objects

### Practice

Create functions that accept a variable number of arguments.

---

## 6. Spread Operator

Learn:

- Spreading arrays
- Copying arrays
- Combining arrays
- Spreading objects
- Copying objects
- Updating objects using spread
- Difference between Rest and Spread

### Practice

Create new arrays and objects using the Spread operator without modifying the original data.

---

## 7. Destructuring

### Array Destructuring

Learn:

- Extracting values from arrays
- Skipping values
- Default values
- Nested array destructuring

### Object Destructuring

Learn:

- Extracting object properties
- Renaming variables
- Default values
- Nested object destructuring

### Practice

Use destructuring to extract data from different arrays and objects.

---

## 8. Optional Chaining

Learn:

- Optional chaining syntax
- Accessing nested properties safely
- Optional chaining with objects
- Optional chaining with arrays
- Optional chaining with functions
- Handling `null` and `undefined`

### Practice

Work with nested objects where some properties may not exist.

---

## 9. Nullish Coalescing

Learn:

- Nullish coalescing operator
- `null`
- `undefined`
- Default/fallback values
- Difference between `??` and `||`

### Practice

Create examples where fallback values should only be used when the original value is `null` or `undefined`.

---

# Part 2: Recursion Fundamentals

## 1. What is Recursion?

Understand:

- What recursion means
- Why recursion is useful
- How a function can call itself
- Breaking a large problem into smaller problems
- Recursive problem structure

### Practice

Identify recursive patterns in simple problems.

---

## 2. Base Condition

Understand:

- What a base condition is
- Why recursion needs a stopping condition
- How the base condition prevents infinite recursion
- Identifying the simplest case of a problem

### Practice

Write simple recursive functions and identify their base conditions.

---

## 3. Recursive Calls

Understand:

- How recursive calls work
- Passing smaller inputs
- Moving toward the base condition
- Recursive execution flow
- Returning values from recursive calls

### Practice

Trace recursive calls manually using small input values.

---

## 4. Call Stack

Understand:

- What the call stack is
- How function calls are stored
- How recursive calls are added to the stack
- How functions are removed from the stack
- Stack overflow
- Relationship between recursion and memory

### Practice

Draw the call stack for simple recursive functions.

---

## 5. Recursion vs Iteration

Understand the difference between:

- Recursive solutions
- Loop-based solutions
- Readability
- Performance
- Memory usage
- Call stack usage
- When recursion is a better choice
- When iteration is a better choice

### Practice

Solve the same simple problem using both recursion and iteration.

---

# Part 3: Recursion Problems

Solve each problem **using recursion**.

For every problem, document:

- Problem understanding
- Approach
- Base condition
- Recursive call
- Dry run
- Time Complexity
- Space Complexity

---

## Problem 1: Print Numbers 1 to N

Create a recursive function that prints numbers starting from `1` and continuing up to `N`.

### Example Input

```text
N = 5
```

### Requirements

- Use recursion.
- Identify the base condition.
- Ensure numbers are printed in increasing order.

---

## Problem 2: Print Numbers N to 1

Create a recursive function that prints numbers starting from `N` and continuing down to `1`.

### Example Input

```text
N = 5
```

### Requirements

- Use recursion.
- Identify the base condition.
- Ensure numbers are printed in decreasing order.

---

## Problem 3: Factorial

Create a recursive function to calculate the factorial of a given number.

### Example Input

```text
N = 5
```

### Requirements

- Identify the base condition.
- Use a recursive relationship.
- Analyze time complexity.
- Analyze space complexity.

---

## Problem 4: Fibonacci

Create a recursive function to calculate Fibonacci numbers.

### Example Input

```text
N = 7
```

### Requirements

- Identify the required base conditions.
- Use recursive calls.
- Draw the recursive call structure.
- Analyze the time complexity.
- Analyze the space complexity.

---

## Problem 5: Sum of N Numbers

Create a recursive function to calculate the sum of numbers from `1` to `N`.

### Example Input

```text
N = 5
```

### Requirements

- Identify the base condition.
- Reduce the problem size with every recursive call.
- Analyze time and space complexity.

---

## Problem 6: Power of X

Create a recursive function to calculate a number raised to a given power.

### Example Input

```text
X = 2
N = 5
```

### Requirements

- Identify the base condition.
- Use recursive calls.
- Handle the power correctly.
- Analyze time and space complexity.

---

## Problem 7: Reverse String

Create a recursive function that reverses a given string.

### Example Input

```text
"hello"
```

### Requirements

- Use recursion.
- Identify the base condition.
- Process the string recursively.
- Analyze time and space complexity.

---

## Problem 8: Palindrome Check

Create a recursive function to determine whether a string is a palindrome.

### Example Input

```text
"madam"
```

### Requirements

- Compare characters recursively.
- Move toward the center of the string.
- Identify the base condition.
- Return an appropriate result.
- Analyze time and space complexity.

---

## Problem 9: Recursive Binary Search

Implement Binary Search using recursion.

### Example Input

Use a sorted array and search for a target value.

### Requirements

- Work only with a sorted array.
- Identify the middle element.
- Decide whether to search the left or right portion.
- Define appropriate base conditions.
- Return the target position when found.
- Analyze time complexity.
- Analyze recursive space complexity.

---

## Problem 10: Tower of Hanoi

Solve the Tower of Hanoi problem using recursion.

### Requirements

- Understand the three rods.
- Understand the disk movement rules.
- Identify the base condition.
- Move smaller disks recursively.
- Move the largest disk.
- Move the remaining disks recursively.
- Analyze time complexity.
- Analyze space complexity.

---

# 🧠 Problem-Solving Approach

For every recursion problem, follow this process:

```text
Understand the Problem
        ↓
Identify the Base Condition
        ↓
Identify the Smaller Problem
        ↓
Determine the Recursive Call
        ↓
Write the Code
        ↓
Dry Run with Small Input
        ↓
Check the Call Stack
        ↓
Test Edge Cases
        ↓
Analyze Time Complexity
        ↓
Analyze Space Complexity
```

---

# 📊 Complexity Analysis

For every solved problem, record:

### Time Complexity

Analyze how the number of operations changes as the input size increases.

### Space Complexity

Analyze:

- Variables
- Data structures
- Recursive call stack
- Additional memory

### Required Format

```text
Time Complexity:
Space Complexity:
```

---

# 📝 Practice Checklist

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

---

## Recursion Fundamentals

- [ ] Understand Recursion
- [ ] Base Condition
- [ ] Recursive Calls
- [ ] Call Stack
- [ ] Recursion vs Iteration

---

## Recursion Problems

- [ ] Print Numbers 1 to N
- [ ] Print Numbers N to 1
- [ ] Factorial
- [ ] Fibonacci
- [ ] Sum of N Numbers
- [ ] Power of X
- [ ] Reverse String
- [ ] Palindrome Check
- [ ] Recursive Binary Search
- [ ] Tower of Hanoi

---

# 🎯 Completion Goals

By the end of this module, you should be able to:

- Write modern ES6+ JavaScript.
- Explain the differences between `let`, `const`, and `var`.
- Use arrow functions confidently.
- Work with template literals.
- Use default parameters.
- Apply Rest and Spread operators correctly.
- Use array and object destructuring.
- Safely access nested properties.
- Handle `null` and `undefined` values.
- Understand recursion and recursive execution.
- Identify base conditions.
- Trace recursive calls using the call stack.
- Compare recursion with iteration.
- Solve common recursion problems independently.
- Analyze the Time and Space Complexity of recursive solutions.
