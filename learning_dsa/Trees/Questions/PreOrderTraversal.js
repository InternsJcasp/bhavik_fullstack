/**
 * Approach: Preorder Traversal (recursive DFS)
 *
 * Goal:
 * - Visit all nodes of a binary tree in preorder: Root → Left → Right.
 * - Return an array of node values in that order.
 *
 * Core idea:
 * - For a given node:
 *   1. Visit the current node (push its value to result).
 *   2. Recursively traverse its left subtree.
 *   3. Recursively traverse its right subtree.
 * - Base case: if node is null, do nothing and return.
 *
 * Why recursion works:
 * - Preorder definition is naturally recursive:
 *   preorder(node) = [node.val] + preorder(node.left) + preorder(node.right)
 *
 * Time complexity:
 * - O(n), where n is the number of nodes (each node visited once).
 *
 * Space complexity:
 * - O(n) for the result array.
 * - O(h) for recursion stack, where h is the height of the tree.
 */

function preorderTraversal(root) {
  const result = [];

  function dfs(node) {
    // Base case: null node → nothing to do
    if (node === null) {
      return;
    }

    // 1. Visit current node
    result.push(node.val);

    // 2. Traverse left subtree
    dfs(node.left);

    // 3. Traverse right subtree
    dfs(node.right);
  }

  dfs(root);
  return result;
}

const node4 = { val: 4, left: null, right: null };
const node5 = { val: 5, left: null, right: null };
const node6 = { val: 6, left: null, right: null };

const node2 = { val: 2, left: node4, right: node5 };
const node3 = { val: 3, left: null, right: node6 };

const root = { val: 1, left: node2, right: node3 };

const preorderResult = preorderTraversal(root);
console.log(preorderResult);
