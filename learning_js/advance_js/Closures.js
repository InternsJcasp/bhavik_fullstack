// Closures means when Inner function remembers the value of outer function's variable even the outer function is finised its execution

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
