/**
 * Approach: Maximum Depth of Binary Tree (recursive DFS)
 *
 * Goal:
 * - Compute the maximum depth of a binary tree.
 * - Depth = number of edges from root to the deepest leaf.
 *
 * Core idea:
 * - maxDepth(null) = -1
 * - maxDepth(node) = 1 + max(maxDepth(node.left), maxDepth(node.right))
 *
 * Why recursion works:
 * - Maximum depth of a tree depends on maximum depths of its subtrees.
 * - DFS explores subtrees first, then combines results.
 *
 * Time complexity:
 * - O(n), where n is the number of nodes.
 *
 * Space complexity:
 * - O(h) for recursion stack, where h is the height of the tree.
 */

function maxDepth(root) {
  if (root === null) {
    return -1;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

const node4 = { val: 4, left: null, right: null };
const node5 = { val: 5, left: null, right: null };
const node6 = { val: 6, left: null, right: null };

const node2 = { val: 2, left: node4, right: node5 };
const node3 = { val: 3, left: null, right: node6 };

const root = { val: 1, left: node2, right: node3 };

console.log(maxDepth(root));
