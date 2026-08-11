// Q. What is Bubble Sort: It's a sorting algorithm that repeatedly compares two adjacent elements and swaps them if they are in the wrong order.

// For ascending order: If left > right → swap them.

// Base Version:

// function bubbleSort(inputArray) {
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     let temp;
//     for (let j = 0; j < inputArray.length - i - 1; j++) {
//       if (inputArray[j] > inputArray[j + 1]) {
//         temp = inputArray[j];
//         inputArray[j] = inputArray[j + 1];
//         inputArray[j + 1] = temp;
//       }
//     }
//   }
//   return inputArray;
// }

// const inputArray = [20, 14, 53, 3, 22.5, 12, -10];
// console.log(bubbleSort(inputArray));

// Second Version:
// function bubbleSort(inputArray) {
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     let swapped = false;

//     for (let j = 0; j < inputArray.length - i - 1; j++) {
//       if (inputArray[j] > inputArray[j + 1]) {
//         let temp = inputArray[j];
//         inputArray[j] = inputArray[j + 1];
//         inputArray[j + 1] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//   }
//   return inputArray;
// }

// const inputArray = [20, 14, 53, 3, 22.5, 12, -10];
// console.log(bubbleSort(inputArray));

// Third Version: Without using third Variable-temp

// function bubbleSort(inputArray) {
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     let swapped = false;

//     for (let j = 0; j < inputArray.length - i - 1; j++) {
//       if (inputArray[j] > inputArray[j + 1]) {
//         [inputArray[j], inputArray[j + 1]] = [inputArray[j + 1], inputArray[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//   }
//   return inputArray;
// }

// const inputArray = [100, 34, 56, 23, 110, 39, -2, 0, 2.5, "hello"];
// console.log(bubbleSort(inputArray));

// Fourth Version/Solution: In this First We will validate that all the elements of an array are numbers only

function bubbleSort(inputArray) {
  // Validate input
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] !== "number" || Number.isNaN(inputArray[i])) {
      return "Error: Array must contain only numbers.";
    }
  }

  // Bubble Sort:

  for (let i = 0; i < inputArray.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < inputArray.length - i - 1; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        [inputArray[j], inputArray[j + 1]] = [inputArray[j + 1], inputArray[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return inputArray;
}

const inputArray = [100, 34, 56, 23, 110, 39, -2, 0, 2.5, "hello"];
console.log(bubbleSort(inputArray));
