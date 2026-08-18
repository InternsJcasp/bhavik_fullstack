// Print 1 to N

// Rules:
// 1. Do not use For Loop/ while Loop
// 2. Identify Base condition
// 3. Make sure every Recursive call move towards the base condition

// First Version
// function RecursiveFunction(input) {
//   // Base Condition
//   if (input === 6) {
//     return;
//   }
//   // Work
//   console.log(input);
//   // Smaller Problem
//   RecursiveFunction(input + 1);
// }

// RecursiveFunction(1);

// Second Solution
// function RecursiveFunction(current, input) {
//   // Base Condition
//   if (current > input) {
//     return;
//   }
//   // Work
//   console.log(current);
//   // Smaller Problem
//   RecursiveFunction(current + 1, input);
// }

// RecursiveFunction(1, 50);

// Print Numbers from N to 1:
function PrintNTo1(current, n) {
  // Base Condition
  if (current < n) {
    return;
  }
  // Work
  console.log(current);
  // Smaller work
  PrintNTo1(current - 1, n);
}
PrintNTo1(20, 1);
