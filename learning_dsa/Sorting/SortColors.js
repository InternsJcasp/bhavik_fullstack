// Sort Colors: In this Only 0,1,2 elements are there and in that we sort the 0,1,2 in resultArray.

// For Ex: [2,0,1,2,1,0,2]
// After Applying Sort Colors: [0, 0, 1, 1, 2, 2, 2];

// const sortColors = (inputArray) => {
//   for (let i = 0; i < inputArray.length; i++) {
//     for (let j = 1; j < inputArray.length; j++) {
//       if (inputArray[i] > inputArray[j]) {
//         [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
//       }
//     }
//   }
//   return inputArray;
// };

// const inputArray = [2, 0, 1, 2, 1, 0, 2];
// console.log(sortColors(inputArray));

const sortColors = (inputArray) => {
  let freq = {};

  for (let i = 0; i < inputArray.length; i++) {
    if (freq[inputArray[i]]) {
      freq[inputArray[i]]++;
    } else {
      freq[inputArray[i]] = 1;
    }
  }

  let resultArray = [];
  for (let key in freq) {
    for (let i = 0; i < freq[key]; i++) {
      resultArray.push(Number(key));
    }
  }
  return resultArray;
};

const inputArray = [2, 0, 1, 2, 1, 0, 2];
console.log(sortColors(inputArray));
