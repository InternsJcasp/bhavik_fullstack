// Pattern 2 — Increasing Numbers 🔢 (Easy)
// Input: n = 5

// Output
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// Nested Loop
for (let i = 0; i < 5; i++) {
  let line = "";
  for (let j = 1; j <= i + 1; j++) {
    line += j;
  }
  console.log(line);
}
