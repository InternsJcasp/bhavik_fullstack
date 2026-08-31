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
    if (value === current.value) break; // ignore duplicates
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

// Time: O(h), Space: O(1)

function searchInBST(root, value) {
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

let root = null;
const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];
for (const v of values) {
  root = insert(root, v);
}

const targets = [6, 14, 5];

for (const t of targets) {
  const node = searchInBST(root, t);
  if (node) {
    console.log(`Found ${t}:`, node);
  } else {
    console.log(`Value ${t} not found in BST`);
  }
}
