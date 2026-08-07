let arr = [12, 7, 18, 50, 50, 20, 9, 12, 14];

// Making a hashmap in which there will be count of all even numbers

let count_even = {};

function getCountOfEvenNumbers(arr) {
  count_even = arr
    .filter((number) => {
      if (number % 2 === 0) {
        return number;
      }
    })
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
}

getCountOfEvenNumbers(arr);
console.log(count_even);
