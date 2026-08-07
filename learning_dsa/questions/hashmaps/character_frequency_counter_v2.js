// Problem 3 — Character Frequency Counter (String + HashMap)
// Given a string, count the frequency of every character.

// Ignore spaces.

// Input
// let str = "javascript";

// Expected Output
// {
//   j: 1,
//   a: 2,
//   v: 1,
//   s: 1,
//   c: 1,
//   r: 1,
//   i: 1,
//   p: 1,
//   t: 1
// }

let str = "javascript";

function countCharacterFrequency(str) {
  let freqCounter = str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  console.log(freqCounter);
}
countCharacterFrequency(str);

// Time Complexity: O(n)
// Space Complexity: O(n)
