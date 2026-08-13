// Checking if given array is sorted or not.

// Approach: I will use one loop only in this but a variable which will be holding current element value and compare it with the adjacent one and for ascending order if the adjacent one is greater than the current element then array is not sorted ascending order, and for descending order i will check if adjacent element is smaller than the current element and if it is greater than I will say that it is not descending and in function I will take 2 parameters first for array, second for ascending/descending order check. In that Loop if the given order is not followed by Array then it will return false and if it followed then returns true.

// let array = [10, 20, 30, 40];
let array = [40, 30, 20, 10];
function checkIsArraySorted(inputArray, order) {
  if (order === "ascending" || order === "Ascending") {
    let value = true;
    for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        value = false;
        return "It is not ascending";
      }
    }
    return value;
  } else if (order === "descending" || order === "Descending") {
    let value = true;
    for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] < inputArray[i + 1]) {
        value = false;
        return "It is not Descending";
      }
    }
    return value;
  }

  return "Please Provide Order for checking is Array Sorted or not";
}

// console.log(checkIsArraySorted(array, "ascending"));
console.log(checkIsArraySorted(array, (order = "descending")));
