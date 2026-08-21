// Blocking: The thread stops and waits for an operation to finish. In browsers, long blocking operations freeze the UI.
// Bad: blocking the main thread (don’t do this in real UI code)

// function blockThread() {
//   const start = Date.now();
//   while (Date.now() - start < 3000) {
//     // busy-wait 3 seconds
//   }
// }

// console.log("Before");
// blockThread(); // UI freezes here for 3s
// console.log("After");

// Non Blocking Behavior:
// Good: non-blocking

console.log("Before");

setTimeout(() => {
  console.log("Async work done");
}, 3000);

console.log("After");

// Output:
// Before
// After
// Async work done
