// Function-Based Implementation

// Node as plain object
function createNode(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

// Insert into BST (Function-based, iterative)
// Time: O(h), Space: O(1)
function insert(root, value) {
  const newNode = createNode(value);
  if (root === null) {
    return newNode; // new root
  }

  let current = root;
  while (true) {
    if (value === current.value) {
      // ignore duplicates
      break;
    }
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

// Search in BST
// Time: O(h), Space: O(1)
function search(root, value) {
  let current = root;
  while (current !== null) {
    if (value === current.value) {
      return current;
    }
    if (value < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

// Tree Traversals (Function-based)
// Time: O(n), Space: O(h)

function inOrderTraversal(node, result = []) {
  if (node === null) return result;
  inOrderTraversal(node.left, result);
  result.push(node.value);
  inOrderTraversal(node.right, result);
  return result;
}

function preOrderTraversal(node, result = []) {
  if (node === null) return result;
  result.push(node.value);
  preOrderTraversal(node.left, result);
  preOrderTraversal(node.right, result);
  return result;
}

function postOrderTraversal(node, result = []) {
  if (node === null) return result;
  postOrderTraversal(node.left, result);
  postOrderTraversal(node.right, result);
  result.push(node.value);
  return result;
}

// Validate BST (Function-based)
// Problem 3: Validate BST
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

// Optional: helper to build a BST from an array (function-based)
function buildBSTFromArray(values) {
  let root = null;
  for (const v of values) {
    root = insert(root, v);
  }
  return root;
}

// Function-based
const rootFunc = buildBSTFromArray([8, 3, 10, 1, 6, 14, 4, 7, 13]);

console.log("Function-based in-order:", inOrderTraversal(rootFunc));
console.log("Function-based search 14:", search(rootFunc, 14));
console.log("Function-based validate BST:", validateBST(rootFunc));
