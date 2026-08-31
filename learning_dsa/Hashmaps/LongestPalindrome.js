// First Version:
function longestPalindrome(s) {
  let freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let length = 0;

  for (let char in freq) {
    length += Math.floor(freq[char] / 2) * 2;
  }

  for (let char in freq) {
    if (freq[char] % 2 === 1) {
      length++;
      break;
    }
  }

  return length;
}

console.log(longestPalindrome("abccccdd"));

// using Hashmap
function longestPalindrome(s) {
  let set = new Set();
  let length = 0;

  for (let char of s) {
    if (set.has(char)) {
      set.delete(char);
      length += 2;
    } else {
      set.add(char);
    }
  }

  if (set.size > 0) {
    length++;
  }

  return length;
}

console.log(longestPalindrome("abccccdd"));
