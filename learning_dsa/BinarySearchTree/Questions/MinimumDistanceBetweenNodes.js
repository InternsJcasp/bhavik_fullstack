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

// Find LCA of two values in BST

function lowestCommonAncestor(root, p, q) {
  let current = root;
  const [minVal, maxVal] = p <= q ? [p, q] : [q, p];

  while (current !== null) {
    if (maxVal < current.value) {
      current = current.left;
    } else if (minVal > current.value) {
      current = current.right;
    } else {
      return current;
    }
  }
  return null;
}

// Distance from a given node to a target value in BST

function distanceFromNodeToTarget(root, target) {
  let current = root;
  let dist = 0;

  while (current !== null) {
    if (target === current.value) {
      return dist;
    } else if (target < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
    dist++;
  }

  return -1; // not found
}

// Minimum distance (number of edges) between two nodes in BST
// Time: O(h), Space: O(1)

function minimumDistanceBetweenNodes(root, p, q) {
  const lca = lowestCommonAncestor(root, p, q);
  if (lca === null) return -1; // one or both nodes not present

  const distP = distanceFromNodeToTarget(lca, p);
  const distQ = distanceFromNodeToTarget(lca, q);

  if (distP === -1 || distQ === -1) return -1;

  return distP + distQ;
}

function runExample() {
  console.log("=== MinimumDistanceBetweenTwoNodes ===");

  let root = null;
  const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];
  for (const v of values) {
    root = insert(root, v);
  }

  const queries = [
    [4, 13], // expected: 6
    [1, 6], // expected: 2 (1->3->6)
    [4, 7], // expected: 2 (4->6->7)
    [3, 10], // expected: 2 (3->8->10)
    [1, 13], // expected: 4 (1->3->8->10->14->13 = 5? check)
  ];

  for (const [p, q] of queries) {
    const dist = minimumDistanceBetweenNodes(root, p, q);
    console.log(`Distance between ${p} and ${q}:`, dist);
  }
}

runExample();
