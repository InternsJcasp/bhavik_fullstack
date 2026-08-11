function RecursiveFunction(input) {
  // Base Condition
  if (input === 0) {
    return;
  }
  // Work
  console.log("Before:", input);
  // Smaller Problem
  RecursiveFunction(input - 1);
  console.log("After:", input);
}

RecursiveFunction(3);

// Explanation properly in RecursionModelExplained.md
