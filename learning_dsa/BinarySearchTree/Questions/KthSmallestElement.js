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

// Kth smallest element in BST (1-based k)
// Time: O(h + k), Space: O(h)
function kthSmallestElement(root, k) {
  const stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    // Go to leftmost
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // Visit node
    current = stack.pop();
    k--;

    if (k === 0) {
      return current.value;
    }

    // Move to right subtree
    current = current.right;
  }

  return null; // k is larger than number of nodes
}

let root = null;
const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];
for (const v of values) {
  root = insert(root, v);
}

// In-order: 1, 3, 4, 6, 7, 8, 10, 13, 14
const queries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const k of queries) {
  const ans = kthSmallestElement(root, k);
  console.log(`${k}-th smallest:`, ans);
}

