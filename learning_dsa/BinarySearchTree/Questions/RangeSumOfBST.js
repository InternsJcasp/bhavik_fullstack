function createNode(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

function insert(root, value) {
  if (root === null) {
    return createNode(value);
  }

  let current = root;

  while (true) {
    if (value === current.value) {
      return root;
    }

    if (value < current.value) {
      if (current.left === null) {
        current.left = createNode(value);
        return root;
      }
      current = current.left;
    } else {
      if (current.right === null) {
        current.right = createNode(value);
        return root;
      }
      current = current.right;
    }
  }
}

function rangeSumOfBST(root, low, high) {
  if (root === null) {
    return 0;
  }

  if (root.value < low) {
    return rangeSumOfBST(root.right, low, high);
  }

  if (root.value > high) {
    return rangeSumOfBST(root.left, low, high);
  }

  return (
    root.value +
    rangeSumOfBST(root.left, low, high) +
    rangeSumOfBST(root.right, low, high)
  );
}

let root = null;

const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];

for (const value of values) {
  root = insert(root, value);
}

console.log(rangeSumOfBST(root, 6, 13));
