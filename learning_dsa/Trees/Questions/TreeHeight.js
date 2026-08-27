/**
 * Approach: Tree Height (recursive DFS)
 *
 * Goal:
 * - Compute the height of a binary tree.
 * - Height = number of edges on the longest path from the node to a leaf.
 * - For an empty tree (null), height = -1.
 *
 * Core idea:
 * - height(null) = -1
 * - height(node) = 1 + max(height(node.left), height(node.right))
 *
 * Why recursion works:
 * - Height of a tree depends on heights of its left and right subtrees.
 * - DFS naturally computes subtree heights first.
 *
 * Time complexity:
 * - O(n), where n is the number of nodes (each node visited once).
 *
 * Space complexity:
 * - O(h) for recursion stack, where h is the height of the tree.
 */

function treeHeight(root) {
  // Base case: empty tree
  if (root === null) {
    return -1;
  }

  const leftHeight = treeHeight(root.left);
  const rightHeight = treeHeight(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}


const node4 = { val: 4, left: null, right: null };
const node5 = { val: 5, left: null, right: null };
const node6 = { val: 6, left: null, right: null };

const node2 = { val: 2, left: node4, right: node5 };
const node3 = { val: 3, left: null, right: node6 };

const root = { val: 1, left: node2, right: node3 };

console.log(treeHeight(root));