# Recursion — Recursive Call Execution & Call Stack

## 1. Recursive Call Execution

Recursion means a function **calls itself** to solve a smaller version of the same problem.

The most important thing to understand is:

> When a recursive function calls itself, the current function does **not finish**. It pauses and waits for the recursive call to complete.

Example:

```js
function test(n) {
    if (n === 0) {
        return;
    }

    console.log("Before:", n);

    test(n - 1);

    console.log("After:", n);
}

test(3);
```

---

# 2. What Happens When `test(3)` Runs?

We start with:

```js
test(3);
```

So:

```text
n = 3
```

The base condition:

```js
if (n === 0) {
    return;
}
```

is false because:

```text
3 === 0 → false
```

Then:

```js
console.log("Before:", n);
```

prints:

```text
Before: 3
```

Next:

```js
test(n - 1);
```

Since `n = 3`:

```js
test(3 - 1);
```

which becomes:

```js
test(2);
```

## Important

At this point, `test(3)` is **not finished**.

It is paused here:

```js
test(n - 1);

// After test(2) finishes,
// this line will execute.

console.log("After:", n);
```

So we can visualize it as:

```text
test(3)
   |
   ├── Before: 3
   |
   ├── test(2) ← WAIT
   |
   └── After: 3 ← WAITING
```

---

# 3. Now `test(2)` Starts

The new function call is:

```js
test(2);
```

Now this function has its own value:

```text
n = 2
```

Base condition:

```text
2 === 0 → false
```

So it prints:

```text
Before: 2
```

Then:

```js
test(n - 1);
```

becomes:

```js
test(1);
```

Again, `test(2)` does **not finish**.

It pauses and waits for `test(1)`.

Now we have:

```text
test(3)
   |
   └── test(2)
          |
          ├── Before: 2
          |
          ├── test(1) ← WAIT
          |
          └── After: 2 ← WAITING
```

---

# 4. Now `test(1)` Starts

The function receives:

```text
n = 1
```

Base condition:

```text
1 === 0 → false
```

So:

```text
Before: 1
```

Then:

```js
test(n - 1);
```

becomes:

```js
test(0);
```

Again, `test(1)` pauses.

```text
test(3)
   |
   └── test(2)
          |
          └── test(1)
                 |
                 ├── Before: 1
                 |
                 ├── test(0) ← WAIT
                 |
                 └── After: 1 ← WAITING
```

---

# 5. `test(0)` Reaches the Base Condition

Now:

```js
test(0);
```

Inside the function:

```js
if (n === 0) {
    return;
}
```

Condition:

```text
0 === 0 → true
```

So:

```js
return;
```

executes.

`test(0)` is now completely finished.

---

# 6. What Happens After `test(0)` Returns?

This is the most important part.

Who called `test(0)`?

```text
test(1)
   ↓
test(0)
```

Therefore, after `test(0)` finishes:

> `test(1)` resumes.

It continues from the line **after**:

```js
test(n - 1);
```

So now:

```js
console.log("After:", n);
```

runs.

But remember:

```text
test(1)
```

has:

```text
n = 1
```

Therefore:

```text
After: 1
```

---

# 7. Then `test(2)` Resumes

`test(1)` is now finished.

Who called `test(1)`?

```text
test(2)
   ↓
test(1)
```

Therefore:

> `test(2)` resumes.

It continues from:

```js
console.log("After:", n);
```

And its `n` is:

```text
n = 2
```

So:

```text
After: 2
```

---

# 8. Then `test(3)` Resumes

`test(2)` is now finished.

Who called `test(2)`?

```text
test(3)
   ↓
test(2)
```

Therefore:

> `test(3)` resumes.

Its `n` is still:

```text
n = 3
```

So:

```text
After: 3
```

---

# 9. Final Output

The complete output is:

```text
Before: 3
Before: 2
Before: 1
After: 1
After: 2
After: 3
```

---

# 10. Why Doesn't `After: 2` Come Immediately?

A common confusion is:

```text
Before: 3

test(3 - 1)
↓
test(2)

After: 2  ❌
```

This is incorrect.

Why?

Because the `After` statement belongs to the **current function call**.

When we called:

```js
test(3);
```

that particular function call has:

```text
n = 3
```

So its `After` statement will always use:

```text
n = 3
```

It cannot suddenly become `2`.

---

# 11. Every Function Call Has Its Own `n`

When JavaScript creates these calls:

```js
test(3);
test(2);
test(1);
test(0);
```

each function call has its own value of `n`.

```text
test(3) → n = 3

test(2) → n = 2

test(1) → n = 1

test(0) → n = 0
```

Think of them as separate function instances:

```text
┌─────────────────────┐
│ test(3)             │
│ n = 3               │
│                     │
│ Before: 3           │
│                     │
│ test(2) ← WAIT      │
│                     │
│ After: 3            │
└─────────────────────┘


┌─────────────────────┐
│ test(2)             │
│ n = 2               │
│                     │
│ Before: 2           │
│                     │
│ test(1) ← WAIT      │
│                     │
│ After: 2            │
└─────────────────────┘
```

This is why:

```text
test(3) → After: 3
test(2) → After: 2
test(1) → After: 1
```

---

# 12. Call Stack

JavaScript uses a **Call Stack** to keep track of function calls.

The Call Stack follows:

> **LIFO — Last In, First Out**

Meaning:

> The last function added to the stack is the first function removed.

Think about a stack of plates:

```text
      ┌───────────┐
      │  Plate 3  │ ← Last added
      ├───────────┤
      │  Plate 2  │
      ├───────────┤
      │  Plate 1  │
      └───────────┘
```

You remove the top plate first.

The Call Stack works similarly.

---

# 13. Call Stack During Recursion

When:

```js
test(3);
```

runs:

```text
┌─────────────┐
│   test(3)   │
└─────────────┘
```

Then `test(3)` calls:

```js
test(2);
```

Stack becomes:

```text
┌─────────────┐
│   test(2)   │ ← Current
├─────────────┤
│   test(3)   │
└─────────────┘
```

Then:

```js
test(1);
```

```text
┌─────────────┐
│   test(1)   │ ← Current
├─────────────┤
│   test(2)   │
├─────────────┤
│   test(3)   │
└─────────────┘
```

Then:

```js
test(0);
```

```text
┌─────────────┐
│   test(0)   │ ← Current
├─────────────┤
│   test(1)   │
├─────────────┤
│   test(2)   │
├─────────────┤
│   test(3)   │
└─────────────┘
```

---

# 14. Base Condition Is Reached

`test(0)` reaches:

```js
if (n === 0) {
    return;
}
```

So `test(0)` finishes and is removed from the stack.

Now:

```text
┌─────────────┐
│   test(1)   │ ← Current
├─────────────┤
│   test(2)   │
├─────────────┤
│   test(3)   │
└─────────────┘
```

Then `test(1)` finishes:

```text
┌─────────────┐
│   test(2)   │ ← Current
├─────────────┤
│   test(3)   │
└─────────────┘
```

Then `test(2)` finishes:

```text
┌─────────────┐
│   test(3)   │ ← Current
└─────────────┘
```

Finally `test(3)` finishes and the stack becomes empty.

---

# 15. Going Down and Coming Back Up

Recursion often has two phases.

## Going Down

Recursive calls are continuously created:

```text
test(3)
   ↓
test(2)
   ↓
test(1)
   ↓
test(0)
```

Then the base condition is reached.

## Coming Back Up

Functions start returning:

```text
test(0) → return
   ↑
test(1) → return
   ↑
test(2) → return
   ↑
test(3) → return
```

So the overall process is:

```text
             GOING DOWN
                  ↓
            test(3)
                  ↓
            test(2)
                  ↓
            test(1)
                  ↓
            test(0)
                  ↓
             BASE CASE
                  ↓
             COMING UP
                  ↑
            test(1) finishes
                  ↑
            test(2) finishes
                  ↑
            test(3) finishes
```

---

# 16. Why Does `"Before"` Print First?

Because it is written **before** the recursive call:

```js
console.log("Before:", n);

test(n - 1);
```

So JavaScript executes:

```text
Before 3
↓
Before 2
↓
Before 1
↓
Base Case
```

---

# 17. Why Does `"After"` Print in Reverse?

Because it is written **after** the recursive call:

```js
test(n - 1);

console.log("After:", n);
```

The function must wait for the recursive call to finish.

Therefore:

```text
test(1) → After: 1
test(2) → After: 2
test(3) → After: 3
```

This is happening while the Call Stack is **unwinding**.

---

# 18. The Most Important Rule

Remember this sentence:

> **When a function makes a recursive call, the current function pauses. When the recursive call returns, the current function resumes from the next line.**

For:

```js
test(n - 1);

console.log("After:", n);
```

The flow is:

```text
Call recursive function
        ↓
Current function pauses
        ↓
Recursive function executes
        ↓
Recursive function may call another function
        ↓
Eventually base condition is reached
        ↓
Recursive calls return one by one
        ↓
Paused functions resume
        ↓
"After" statements execute
```

---

# 19. Recursion Mental Model

Whenever you see recursion, think:

```text
                    CALL
                     ↓
              ┌─────────────┐
              │ Base Case?  │
              └──────┬──────┘
                     │
                No   │   Yes
                     │
                     ↓
                Do Work
                     │
                     ↓
              Recursive Call
                     │
                     ↓
              CURRENT FUNCTION
                  PAUSES
                     │
                     ↓
              Recursive Call
                  finishes
                     │
                     ↓
              CURRENT FUNCTION
                  RESUMES
                     │
                     ↓
               Next Statement
```

---

# 20. Three Golden Rules

### Rule 1 — Base Condition

Every recursive solution needs a condition that eventually stops recursion.

```js
if (condition) {
    return;
}
```

### Rule 2 — Move Toward Base Condition

Every recursive call should move closer to the stopping condition.

```js
test(n - 1);
```

or:

```js
test(n + 1);
```

depending on the problem.

### Rule 3 — Recursive Call Must Finish Before Next Line

Given:

```js
test(n - 1);

console.log("After:", n);
```

`"After"` **does not execute immediately**.

The recursive call must completely finish first.

---

# 🧠 One-Line Summary

```text
Recursive Call
      ↓
Current Function PAUSES
      ↓
New Function Call
      ↓
New Function PAUSES
      ↓
...
      ↓
Base Condition
      ↓
Functions RETURN one-by-one
      ↓
PAUSED Functions RESUME
      ↓
Remaining Code Executes
```

This is the core idea behind **Recursive Call Execution + Call Stack**.
