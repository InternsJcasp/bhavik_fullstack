// Q. let arr = [12, 25, 8, 41, 19];
// Output:
// 12
// 25
// 8
// 41
// 19

// First Way
// Array Traversal

let arr1 = [12, 25, 8, 41, 19];

// without for loop
console.log(arr1);

// with for loop
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// Second Way
// Array traverse using Map

let arr1 = [12, 25, 45, 34, 65];

arr1.map((item) => {
  console.log(item);
});
