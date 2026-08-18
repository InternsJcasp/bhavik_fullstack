# Recursion — Factorial Dry Run & Call Stack

## 1. Problem

Find the factorial of a number.

For example:

```text
5! = 5 × 4 × 3 × 2 × 1
```

Therefore:

```text
5! = 120
```

Factorial has a natural recursive relationship:

```text
5! = 5 × 4!
4! = 4 × 3!
3! = 3 × 2!
2! = 2 × 1!
1! = 1
```

This makes factorial a perfect recursion problem.

---

# 2. Our Code

```js
function findFactorial(number) {
  // Base Condition
  if (number === 1) {
    return 1;
  }

  // Recursive Call
  let result = number * findFactorial(number - 1);

  // Work / Return Result
  return result;
}

console.log(findFactorial(5));
```

The important line is:

```js
let result = number * findFactorial(number - 1);
```

This line contains both:

```text
Current number
      ×
Smaller factorial problem
```

For example:

```text
5 × findFactorial(4)
```

---

# 3. First Call — `findFactorial(5)`

We start:

```js
findFactorial(5);
```

So:

```text
number = 5
```

Check base condition:

```js
if (number === 1)
```

```text
5 === 1 → false
```

So we continue.

Now:

```js
let result = number * findFactorial(number - 1);
```

Substitute `number = 5`:

```js
let result = 5 * findFactorial(4);
```

## Important

At this point:

> `findFactorial(5)` cannot calculate `result` yet.

Why?

Because JavaScript doesn't know the result of:

```js
findFactorial(4);
```

So `findFactorial(5)` **pauses** and waits.

Think:

```text
findFactorial(5)

result = 5 × findFactorial(4)
                 ↑
               WAIT
```

---

# 4. Second Call — `findFactorial(4)`

Now JavaScript executes:

```js
findFactorial(4);
```

So:

```text
number = 4
```

Base condition:

```text
4 === 1 → false
```

Then:

```js
let result = 4 * findFactorial(3);
```

Again, JavaScript doesn't know `findFactorial(3)` yet.

So:

```text
findFactorial(4)

result = 4 × findFactorial(3)
                 ↑
               WAIT
```

And `findFactorial(4)` pauses.

---

# 5. Third Call — `findFactorial(3)`

Now:

```js
findFactorial(3);
```

Base condition:

```text
3 === 1 → false
```

Then:

```js
let result = 3 * findFactorial(2);
```

Again:

```text
findFactorial(3)

result = 3 × findFactorial(2)
                 ↑
               WAIT
```

So `findFactorial(3)` pauses.

---

# 6. Fourth Call — `findFactorial(2)`

Now:

```js
findFactorial(2);
```

Base condition:

```text
2 === 1 → false
```

Then:

```js
let result = 2 * findFactorial(1);
```

But we don't know `findFactorial(1)` yet.

So:

```text
findFactorial(2)

result = 2 × findFactorial(1)
                 ↑
               WAIT
```

`findFactorial(2)` pauses.

---

# 7. Fifth Call — `findFactorial(1)

Now:

```js
findFactorial(1);
```

Check:

```js
if (number === 1) {
  return 1;
}
```

Condition:

```text
1 === 1 → true
```

So:

```js
return 1;
```

This is our **Base Case**.

The recursion stops here.

---

# 8. Call Stack at the Deepest Point

Before `findFactorial(1)` returned, the Call Stack looked conceptually like this:

```text
┌─────────────────────────┐
│ findFactorial(1)        │ ← Current
├─────────────────────────┤
│ findFactorial(2)        │
├─────────────────────────┤
│ findFactorial(3)        │
├─────────────────────────┤
│ findFactorial(4)        │
├─────────────────────────┤
│ findFactorial(5)        │
└─────────────────────────┘
```

Notice:

```text
findFactorial(5)
findFactorial(4)
findFactorial(3)
findFactorial(2)
findFactorial(1)
```

All previous function calls are still waiting.

None of them has calculated its final `result` yet.

---

# 9. Now the Stack Starts Unwinding

This is where factorial becomes really interesting.

`findFactorial(1)` returns:

```text
1
```

Who was waiting for `findFactorial(1)`?

```text
findFactorial(2)
```

Remember:

```js
let result = 2 * findFactorial(1);
```

Now JavaScript finally knows:

```text
findFactorial(1) = 1
```

Therefore:

```text
2 × 1 = 2
```

So:

```text
findFactorial(2) → 2
```

---

# 10. `findFactorial(3)` Resumes

Who was waiting for `findFactorial(2)`?

```text
findFactorial(3)
```

Its expression was:

```js
let result = 3 * findFactorial(2);
```

Now we know:

```text
findFactorial(2) = 2
```

Therefore:

```text
3 × 2 = 6
```

So:

```text
findFactorial(3) → 6
```

---

# 11. `findFactorial(4)` Resumes

Its expression was:

```js
let result = 4 * findFactorial(3);
```

We now know:

```text
findFactorial(3) = 6
```

Therefore:

```text
4 × 6 = 24
```

So:

```text
findFactorial(4) → 24
```

---

# 12. `findFactorial(5)` Resumes

Finally:

```js
let result = 5 * findFactorial(4);
```

We now know:

```text
findFactorial(4) = 24
```

Therefore:

```text
5 × 24 = 120
```

So:

```text
findFactorial(5) → 120
```

And then:

```js
console.log(findFactorial(5));
```

prints:

```text
120
```

---

# 13. Complete Dry Run

The easiest way to visualize the entire execution:

```text
GOING DOWN
══════════════════════════════════

findFactorial(5)
    ↓
    5 × findFactorial(4)
                ↓
          findFactorial(4)
                ↓
                4 × findFactorial(3)
                            ↓
                      findFactorial(3)
                            ↓
                            3 × findFactorial(2)
                                        ↓
                                  findFactorial(2)
                                        ↓
                                        2 × findFactorial(1)
                                                    ↓
                                              findFactorial(1)
                                                    ↓
                                                  return 1


COMING BACK UP
══════════════════════════════════

findFactorial(1)
        ↓
      return 1
        ↓
findFactorial(2)
        ↓
    2 × 1 = 2
        ↓
      return 2
        ↓
findFactorial(3)
        ↓
    3 × 2 = 6
        ↓
      return 6
        ↓
findFactorial(4)
        ↓
    4 × 6 = 24
        ↓
      return 24
        ↓
findFactorial(5)
        ↓
    5 × 24 = 120
        ↓
      return 120
```

---

# 14. Why Doesn't `5 × 4` Happen Immediately?

This is an important question.

You might think:

```text
5 × findFactorial(4)

5 × 4
= 20
```

But that's not what happens.

Because:

```text
findFactorial(4)
```

does **not mean 4**.

It means:

```text
4 × findFactorial(3)
```

And:

```text
findFactorial(3)
```

means:

```text
3 × findFactorial(2)
```

And so on.

Therefore:

```text
findFactorial(5)

= 5 × findFactorial(4)

= 5 × (4 × findFactorial(3))

= 5 × (4 × (3 × findFactorial(2)))

= 5 × (4 × (3 × (2 × findFactorial(1))))

= 5 × 4 × 3 × 2 × 1

= 120
```

---

# 15. The Most Important Concept

In your code:

```js
let result = number * findFactorial(number - 1);
```

JavaScript must first know:

```text
findFactorial(number - 1)
```

before it can calculate:

```text
number × result
```

Therefore:

```text
Current function
      ↓
Needs recursive result
      ↓
Pauses
      ↓
Recursive function executes
      ↓
Recursive function may call another function
      ↓
Base case
      ↓
Returns a value
      ↓
Previous function resumes
      ↓
Calculation happens
```

---

# 16. Function Values During Execution

Each call has its own `number`.

```text
findFactorial(5)
number = 5

findFactorial(4)
number = 4

findFactorial(3)
number = 3

findFactorial(2)
number = 2

findFactorial(1)
number = 1
```

They are separate function calls.

So:

```text
findFactorial(5)
```

doesn't suddenly change its `number` to `4`.

It remains:

```text
number = 5
```

while waiting.

---

# 17. Call Stack Visualization

At maximum depth:

```text
┌──────────────────────┐
│ findFactorial(1)     │ ← Current
├──────────────────────┤
│ findFactorial(2)     │
├──────────────────────┤
│ findFactorial(3)     │
├──────────────────────┤
│ findFactorial(4)     │
├──────────────────────┤
│ findFactorial(5)     │
└──────────────────────┘
```

Then:

```text
findFactorial(1) → return 1
```

Stack:

```text
┌──────────────────────┐
│ findFactorial(2)     │ ← Current
├──────────────────────┤
│ findFactorial(3)     │
├──────────────────────┤
│ findFactorial(4)     │
├──────────────────────┤
│ findFactorial(5)     │
└──────────────────────┘
```

Then:

```text
findFactorial(2) → return 2
```

Stack:

```text
┌──────────────────────┐
│ findFactorial(3)     │ ← Current
├──────────────────────┤
│ findFactorial(4)     │
├──────────────────────┤
│ findFactorial(5)     │
└──────────────────────┘
```

Then:

```text
findFactorial(3) → return 6
```

Then:

```text
findFactorial(4) → return 24
```

Then:

```text
findFactorial(5) → return 120
```

Finally the stack becomes empty.

---

# 18. Why Is This Different From Print `1 → N`?

In the printing problem:

```js
console.log(current);

recursiveFunction(current + 1);
```

The work happens **before** the recursive call.

So the output happens while going down.

But factorial is:

```js
let result = number * findFactorial(number - 1);
```

The current calculation depends on the **result of the recursive call**.

Therefore, the important calculation happens while coming back up.

```text
PRINT 1 → N

Going Down:
1
2
3
4
5


FACTORIAL

Going Down:
5
4
3
2
1

Coming Up:
1 → 2
2 → 6
3 → 24
4 → 120
```

---

# 19. Time & Space Complexity

For:

```js
findFactorial(n);
```

there are approximately `n` function calls.

Therefore:

```text
Time Complexity = O(n)
```

Because we process each number once.

The Call Stack can contain up to `n` function calls:

```text
findFactorial(n)
findFactorial(n-1)
findFactorial(n-2)
...
findFactorial(1)
```

Therefore:

```text
Space Complexity = O(n)
```

The `O(n)` space comes primarily from the **Call Stack**.

---

# 🧠 Final Mental Model

Remember factorial like this:

```text
                GOING DOWN
                     ↓

              5 × factorial(4)
                     ↓
              4 × factorial(3)
                     ↓
              3 × factorial(2)
                     ↓
              2 × factorial(1)
                     ↓
                   1

                     ↑
                     │
                BASE CASE
                     │
                     │
                COMING UP
                     │
                     ↑

              2 × 1 = 2
                     ↑
              3 × 2 = 6
                     ↑
              4 × 6 = 24
                     ↑
              5 × 24 = 120
```

## ⭐ One Sentence to Remember

> **Factorial recursion goes down to `1` to get the base value, then comes back up and performs the multiplication using the returned value from the recursive call.**
