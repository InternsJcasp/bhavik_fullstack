function TreeNode(val, left = null, right = null) {
  return { val, left, right };
}

function levelOrder(root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}

const rootLevel = TreeNode(
  3,
  TreeNode(9),
  TreeNode(20, TreeNode(15), TreeNode(7)),
);

console.log("Level Order:", levelOrder(rootLevel));
