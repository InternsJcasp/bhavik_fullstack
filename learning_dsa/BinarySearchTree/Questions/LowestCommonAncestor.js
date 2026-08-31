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

// Lowest Common Ancestor in BST
// Time: O(h), Space: O(1)
function lowestCommonAncestor(root, p, q) {
  let current = root;

  // p <= q for simpler logic
  const [minVal, maxVal] = p <= q ? [p, q] : [q, p];

  while (current !== null) {
    if (maxVal < current.value) {
      // Both in left subtree
      current = current.left;
    } else if (minVal > current.value) {
      // Both in right subtree
      current = current.right;
    } else {
      // Split point or current is p or q
      return current;
    }
  }

  return null; // if tree is empty or something wrong
}

let root = null;
const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];
for (const v of values) {
  root = insert(root, v);
}

const queries = [
  [1, 6], // LCA = 3
  [4, 7], // LCA = 6
  [1, 13], // LCA = 8
  [10, 14], // LCA = 10
  [7, 13], // LCA = 10
];

for (const [p, q] of queries) {
  const lca = lowestCommonAncestor(root, p, q);
  console.log(`LCA of ${p} and ${q}:`, lca ? lca.value : null);
}
