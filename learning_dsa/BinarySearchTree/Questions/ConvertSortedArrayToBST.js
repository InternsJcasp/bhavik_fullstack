function createNode(value) {
  return {
    value,
    left: null,
    right: null,
  };
}

function sortedArrayToBST(nums) {
  function build(left, right) {
    if (left > right) {
      return null;
    }

    const middle = Math.floor((left + right) / 2);
    const root = createNode(nums[middle]);

    root.left = build(left, middle - 1);
    root.right = build(middle + 1, right);

    return root;
  }

  return build(0, nums.length - 1);
}

function inOrderTraversal(root, result = []) {
  if (root === null) {
    return result;
  }

  inOrderTraversal(root.left, result);
  result.push(root.value);
  inOrderTraversal(root.right, result);

  return result;
}

const sortedValues = [-10, -3, 0, 5, 9];

const root = sortedArrayToBST(sortedValues);

console.log(root);
console.log(inOrderTraversal(root));
