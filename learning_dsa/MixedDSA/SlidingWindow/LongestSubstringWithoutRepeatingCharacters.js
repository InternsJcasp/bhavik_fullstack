function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const seenChars = new Set();

  for (let right = 0; right < s.length; right++) {
    // Shrink window until the current character is unique
    while (seenChars.has(s[right])) {
      seenChars.delete(s[left]);
      left++;
    }

    seenChars.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
