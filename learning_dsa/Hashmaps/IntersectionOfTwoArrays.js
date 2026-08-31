// Find the common Elements in two arrays. Remove Duplicates in an array.

let array1 = [2, 4, 2, 5, 6, 7, 7];
let array2 = [2, 5, 2, 8, 7];

const findCommonElementsInTwoArrays = (firstArray, secondArray) => {
  let storedElements = new Set();
  let commonElements = new Set();
  for (let key of array2) {
    storedElements.add(key);
  }
  for (let key of array1) {
    if (storedElements.has(key)) {
      commonElements.add(key);
    }
  }
  return { commonElement: commonElements, storedElement: storedElements };
};

console.log(findCommonElementsInTwoArrays(array1, array2));
