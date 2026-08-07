let arr = [12, 7, 18, 50, 50, 20, 9, 12, 14];

// Making a hashmap in which there will be count of all even numbers

let count_even = {};

function getCountOfEvenNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count_even[arr[i]]
        ? (count_even[arr[i]] = count_even[arr[i]] + 1)
        : (count_even[arr[i]] = 1);
    }
  }
}

getCountOfEvenNumbers(arr);
console.log(count_even);
