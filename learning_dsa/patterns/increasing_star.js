// Pattern 1 — Increasing Stars
// Input: n = 5

// Output
// *
// * *
// * * *
// * * * *
// * * * * *

// Nested Loop
for (i = 0; i < 5; i++) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// Single Loop
let line = "";
for (let i = 0; i < 5; i++) {
  line += "* ";
  console.log(line);
}
