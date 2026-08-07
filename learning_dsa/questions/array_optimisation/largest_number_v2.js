// finding largest Number

let arr1 = [45, 12, 89, 7, 56, 90, 23];
let largest = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    largest = arr1[i];
  }
}

console.log(largest)
