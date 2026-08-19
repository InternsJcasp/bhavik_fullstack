// First Unique character and its first index and if there are no unique characters then return -1
const firstUniqueCharacter = (inputString) => {
  const frequency = new Map();

  for (const char of inputString) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  for (let i = 0; i < inputString.length; i++) {
    if (frequency.get(inputString[i]) === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqueCharacter("leetcode")); // 0
console.log(firstUniqueCharacter("aabb")); // -1
