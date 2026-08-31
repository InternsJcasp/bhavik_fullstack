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

function findFloorAndCeil(root, target) {
  let current = root;
  let floor = null;
  let ceil = null;

  while (current !== null) {
    if (current.value === target) {
      return { floor: current.value, ceil: current.value };
    }

    if (target < current.value) {
      ceil = current.value;
      current = current.left;
    } else {
      floor = current.value;
      current = current.right;
    }
  }

  return { floor, ceil };
}

let root = null;

const values = [8, 3, 10, 1, 6, 14, 4, 7, 13];

for (const value of values) {
  root = insert(root, value);
}

console.log(findFloorAndCeil(root, 5));
console.log(findFloorAndCeil(root, 6));
console.log(findFloorAndCeil(root, 15));
console.log(findFloorAndCeil(root, 0));
