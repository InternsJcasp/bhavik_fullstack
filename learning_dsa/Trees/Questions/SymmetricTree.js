function TreeNode(val, left = null, right = null) {
  return { val, left, right };
}

function isSymmetric(root) {
  if (root === null) return true;

  function isMirror(a, b) {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (a.val !== b.val) return false;

    return isMirror(a.left, b.right) && isMirror(a.right, b.left);
  }

  return isMirror(root.left, root.right);
}

// Symmetric tree
const rootSym = TreeNode(
  1,
  TreeNode(2, TreeNode(3), TreeNode(4)),
  TreeNode(2, TreeNode(4), TreeNode(3)),
);

// Not Symmetric Tree
const rootNotSym = TreeNode(
  1,
  TreeNode(2, null, TreeNode(3)),
  TreeNode(2, null, TreeNode(3)),
);

console.log("Symmetric Tree 1:", isSymmetric(rootSym));
console.log("Symmetric Tree 2:", isSymmetric(rootNotSym));
