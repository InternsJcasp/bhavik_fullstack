// Node Structure of a Tree.

const node = {
  val: 1,
  left: null, // left child
  right: null, // right child
};

//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

// Binary Tree creation
const node4 = { val: 4, left: null, right: null };
const node5 = { val: 3, left: null, right: null };
const node6 = { val: 6, left: null, right: null };

const node2 = { val: 2, left: node4, right: node5 };
const node3 = { val: 3, left: 6, right: null };

const root = { val: 1, left: node2, right: node3 };

// Binary Tree Traversal
console.log(root);
