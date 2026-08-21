// Sync JS code:
const a = 1;
const b = 2;
const sum = a + b; // waits for a and b
console.log(sum); // 3

// Async example (used in web: fetching data)
console.log("Start");

setTimeout(() => {
  console.log("Timeout finished");
}, 1000);

console.log("End");

// Output order:
// Start
// End
// Timeout finished
