// InsertNode.js

function createNode(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

// Insert node in BST
// Time: O(h), Space: O(1)
function insertNode(root, value) {
  const newNode = createNode(value);
  if (root === null) {
    return newNode;
  }

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

function inOrderTraversal(node, result = []) {
  if (node === null) return result;
  inOrderTraversal(node.left, result);
  result.push(node.value);
  inOrderTraversal(node.right, result);
  return result;
}

let root = null;

const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];
for (const v of values) {
  root = insertNode(root, v);
}

console.log("In-order after inserts:", inOrderTraversal(root));

// Insert 5
root = insertNode(root, 5);
console.log("In-order after inserting 5:", inOrderTraversal(root));

// Insert duplicate 6
root = insertNode(root, 6);
console.log("In-order after inserting duplicate 6:", inOrderTraversal(root));
