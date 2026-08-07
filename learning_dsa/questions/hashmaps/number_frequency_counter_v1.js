// using for loop
let arr = [4, 2, 4, 1, 2, 4, 5];

let freq = {};

for (let char of arr) {
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}

console.log(freq);
