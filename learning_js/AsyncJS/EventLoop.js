console.log("1: start");

setTimeout(() => {
  console.log("2: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("3: promise then");
});

console.log("4: end");

// Output:
// 1: start
// 4: end
// 3: promise then
// 2: setTimeout callback

// Why?
// Sync code runs first (1, 4).
// setTimeout schedules a macrotask.
// Promise.resolve().then schedules a microtask.
// Event loop: after sync code, it drains all microtasks, then runs one macrotask, then repeats.
