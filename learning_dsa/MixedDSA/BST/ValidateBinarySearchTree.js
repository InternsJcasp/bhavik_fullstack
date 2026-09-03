class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root, min = null, max = null) {
  if (!root) return true;

  // Check if current node violates min/max boundaries
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }

  // Left subtree must be < root.val, Right subtree must be > root.val
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(tree)); // Output: true
