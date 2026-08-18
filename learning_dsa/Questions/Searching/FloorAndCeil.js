// Approach: I will Scan each and Every Element of an Array to find floor and Ceil Value.

// let array = [10, 20, 30, 40, 50];
// // let array = [10, 20, 30, 50, 40];
// let targetElement = 35;

// const findFloorAndCeil = (inputArray, targetElement) => {
//   let floorValue = 0;
//   let ceilValue = 0;
//   for (let i = 0; i <= inputArray.length - 1; i++) {
//     if (targetElement >= inputArray[i]) {
//       floorValue = inputArray[i];
//     } else if (targetElement <= inputArray[i]) {
//       ceilValue = inputArray[i];
//       if (ceilValue < inputArray[i]) {
//         ceilValue = inputArray[i];
//       }
//     }
//   }
//   return { Floor: floorValue, Ceil: ceilValue };
// };

// console.log(findFloorAndCeil(array, targetElement)); // should return 40 but it is returning 50 which is wrong.

// Second Version:

// Approach: I will Scan each and Every Element of an Array to find floor and Ceil Value.

let array = [10, 20, 30, 40, 50];
// let array = [10, 20, 30, 50, 40];
let targetElement = 35;

const findFloorAndCeil = (inputArray, targetElement) => {
  let floorValue = -1;
  let ceilValue = Infinity;
  for (let i = 0; i <= inputArray.length - 1; i++) {
    if (targetElement >= inputArray[i] && inputArray[i] >= floorValue) {
      floorValue = inputArray[i];
    } else if (targetElement <= inputArray[i] && inputArray[i] <= ceilValue) {
      ceilValue = inputArray[i];
    }
  }
  return { Floor: floorValue, Ceil: ceilValue };
};

console.log(findFloorAndCeil(array, targetElement));


