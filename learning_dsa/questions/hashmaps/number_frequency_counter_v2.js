// using reduce

let arr = [4, 2, 4, 1, 2, 4, 5];

let result = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(result);
