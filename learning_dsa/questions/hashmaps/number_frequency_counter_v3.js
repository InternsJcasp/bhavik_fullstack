let arr1 = [10, 20, 30, 23, 34, 34, 34, 54, 54, 56, 56, 10, 20];

let result = arr1.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(result);
