const canConstruct = (ransomNote, magazine) => {
  const frequency = new Map();

  for (const char of magazine) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    const count = frequency.get(char) || 0;

    if (count === 0) {
      return false;
    }

    frequency.set(char, count - 1);
  }

  return true;
};

console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("aaa", "aab")); // false

// Time Complexity: O(m + n)
// Space Complexity: O(n) // n are unique characters
