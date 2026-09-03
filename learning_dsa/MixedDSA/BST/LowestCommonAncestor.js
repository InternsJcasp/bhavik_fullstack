function lowestCommonAncestor(root, p, q) {
  let current = root;

  while (current) {
    // If both nodes are smaller, ancestor lies in the left subtree
    if (p.val < current.val && q.val < current.val) {
      current = current.left;
    }
    // If both nodes are larger, ancestor lies in the right subtree
    else if (p.val > current.val && q.val > current.val) {
      current = current.right;
    }
    // Split point found: this node is the LCA
    else {
      return current;
    }
  }
  return null;
}
