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

// Maximum depth of BST
// Time: O(n), Space: O(h) recursion stack

function maximumDepthOfBST(node) {
  if (node === null) return 0;

  const leftDepth = maximumDepthOfBST(node.left);
  const rightDepth = maximumDepthOfBST(node.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

let root = null;
const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];
for (const v of values) {
  root = insert(root, v);
}

const depth = maximumDepthOfBST(root);
console.log("Maximum depth of BST:", depth);
