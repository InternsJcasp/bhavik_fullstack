// Removing Duplicates from a Sorted array:
// Approach: We have a sorted array and here we will make a variable i which will be 0 in starting and a loop with 'j' variable which will go in loop and compare the value with arr[i] if the arr[j] !== arr[i] then you will do 2 things first is: increase the i variable by 1 and swap the value present at that ith index with jth index value and at the last 

function removeDuplicates(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return arr.slice(0, i + 1);
}
