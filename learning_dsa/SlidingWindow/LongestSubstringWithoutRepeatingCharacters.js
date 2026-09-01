// Yeh classic variable-size sliding window problem hai. Window ko expand karte jao (right move) jab tak characters unique rahein. Jab koi character repeat ho jaye, left move karke window shrink karo until duplicate hat jaye. Har valid window par maximum length update karo.

function LongestSubstringWithoutRepeatingCharacters(s) {
  const freq = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // Add current character to window
    freq[ch] = (freq[ch] || 0) + 1;

    // If window invalid (duplicate exists), shrink from left
    while (freq[ch] > 1) {
      const leftChar = s[left];
      freq[leftChar]--;
      if (freq[leftChar] === 0) {
        delete freq[leftChar];
      }
      left++;
    }

    // Now window [left, right] is valid
    const windowLen = right - left + 1;
    if (windowLen > maxLen) {
      maxLen = windowLen;
    }
  }

  return maxLen;
}

let str = "abcabcbb";
console.log(LongestSubstringWithoutRepeatingCharacters(str));
