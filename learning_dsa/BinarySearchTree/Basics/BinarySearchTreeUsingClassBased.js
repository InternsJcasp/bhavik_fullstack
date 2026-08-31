// Class-Based Implementation
class NodeClass {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTClass {
  constructor() {
    this.root = null;
  }

  // Insert Operation
  // Time: O(h), Space: O(h) recursive stack (h = height)
  insert(value) {
    const newNode = new NodeClass(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
        // Decide policy: ignore duplicates or handle specially
        // Here we ignore duplicates.
        break;
      }
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
    return this;
  }

  // Search Operation
  // Time: O(h), Space: O(1)
  search(value) {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) {
        return current;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  // Tree Traversal
  // In-order, Pre-order, Post-order
  // Time: O(n), Space: O(h) recursion stack

  inOrderTraversal(node = this.root, result = []) {
    if (node === null) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }

  preOrderTraversal(node = this.root, result = []) {
    if (node === null) return result;
    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
    return result;
  }

  postOrderTraversal(node = this.root, result = []) {
    if (node === null) return result;
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
    return result;
  }

  // Validate BST (Class-based wrapper)
  // Time: O(n), Space: O(h)
  isValidBST() {
    return validateBSTClass(this.root);
  }
}

function validateBSTClass(node, min = null, max = null) {
  if (node === null) return true;
  if (
    (min !== null && node.value <= min) ||
    (max !== null && node.value >= max)
  ) {
    return false;
  }
  return (
    validateBSTClass(node.left, min, node.value) &&
    validateBSTClass(node.right, node.value, max)
  );
}

// Class-based
const bstClass = new BSTClass();
bstClass
  .insert(8)
  .insert(3)
  .insert(10)
  .insert(1)
  .insert(6)
  .insert(14)
  .insert(4)
  .insert(7)
  .insert(13);

console.log("Class-based in-order:", bstClass.inOrderTraversal());
console.log("Class-based pre-order:", bstClass.preOrderTraversal());
console.log("Class-based search 6:", bstClass.search(6));
console.log("Class-based isValidBST:", bstClass.isValidBST());
