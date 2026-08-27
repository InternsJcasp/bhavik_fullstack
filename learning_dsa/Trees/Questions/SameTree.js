function TreeNode(val, left = null, right = null) {
  return { val, left, right };
}

function isSameTree(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const p1 = TreeNode(1, TreeNode(2), TreeNode(3));
const q1 = TreeNode(1, TreeNode(2), TreeNode(3));

const p2 = TreeNode(1, TreeNode(2), null);
const q2 = TreeNode(1, null, TreeNode(2));

console.log("Same Tree 1:", isSameTree(p1, q1));
console.log("Same Tree 2:", isSameTree(p2, q2));
