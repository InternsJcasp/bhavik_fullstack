// Base Version:
function towerOfHanoi(n, source, helper, destination) {
  // Base condition
  if (n === 1) {
    console.log(`${source} -> ${destination}`);
    return;
  }

  // Step 1:
  // Move n-1 disks from source to helper
  towerOfHanoi(n - 1, source, destination, helper);

  // Step 2:
  // Move largest disk from source to destination
  console.log(`${source} -> ${destination}`);

  // Step 3:
  // Move n-1 disks from helper to destination
  towerOfHanoi(n - 1, helper, source, destination);
}

towerOfHanoi(3, "A", "B", "C");
