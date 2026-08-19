// Merge 2 Arrays.

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const MergeTwoArrays = (firstArray, secondArray) => {
  let i = 0;
  let j = 0;
  let resultArray = [];

  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] < secondArray[j]) {
      resultArray.push(firstArray[i]);
      i++;
    } else {
      resultArray.push(secondArray[j]);
      j++;
    }
  }
  while (i < firstArray.length) {
    resultArray.push(firstArray[i]);
    i++;
  }
  while (j < secondArray.length) {
    resultArray.push(secondArray[j]);
    j++;
  }
  return resultArray;
};

console.log(MergeTwoArrays(array1, array2));
