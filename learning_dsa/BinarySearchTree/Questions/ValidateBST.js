function createNode(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

function insert(root, value) {
  const newNode = createNode(value);
  if (root === null) return newNode;

  let current = root;
  while (true) {
    if (value === current.value) break;
    if (value < current.value) {
      if (current.left === null) {
        current.left = newNode;
        break;
      }
      current = current.left;
    } else {
      if (current.right === null) {
        current.right = newNode;
        break;
      }
      current = current.right;
    }
  }
  return root;
}

// Validate BST
// Time: O(n), Space: O(h)

function validateBST(node, min = null, max = null) {
  if (node === null) return true;

  if (
    (min !== null && node.value <= min) ||
    (max !== null && node.value >= max)
  ) {
    return false;
  }

  return (
    validateBST(node.left, min, node.value) &&
    validateBST(node.right, node.value, max)
  );
}

function buildInvalidBST() {
  const root = createNode(5);
  root.left = createNode(3);
  root.right = createNode(8);
  root.left.left = createNode(2);
  root.left.right = createNode(6); // invalid
  root.right.left = createNode(4);
  return root;
}

// Valid BST
let root = null;
const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];
for (const v of values) {
  root = insert(root, v);
}

console.log("Valid BST result:", validateBST(root)); // true

// Invalid BST
const invalidRoot = buildInvalidBST();
console.log("Invalid BST result:", validateBST(invalidRoot)); // false
