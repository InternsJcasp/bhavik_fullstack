// Intuition: String s aur integer k diya hai. Tumhe at most k characters ko replace karke longest substring banana hai jisme sab characters same ho. Yeh bhi variable-size sliding window hai with condition: “within window, replacements needed ≤ k.”

// Example:
// s = "AABABBA", k = 1;
// Best: change one 'B' to 'A' in "AABAB" → "AAAA" → length = 4

// Key formula for a window:
// windowLength = right - left + 1
// maxFreq = frequency of most frequent character in current window
// replacementsNeeded = windowLength - maxFreq
// Agar replacementsNeeded <= k → window valid hai.

// Approach:
// left = 0, freq = {}, maxFreq = 0, maxLen = 0
// right move karke character add karo, freq[ch]++, maxFreq update karo.
// Jab windowLength - maxFreq > k:
// left move karke shrink karo, freq[s[left]]--.
// Har valid window par maxLen = max(maxLen, windowLength).

function LongestRepeatingCharacterReplacement(s, k) {
  const freq = {};
  let left = 0;
  let maxFreq = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    freq[ch] = (freq[ch] || 0) + 1;

    if (freq[ch] > maxFreq) {
      maxFreq = freq[ch];
    }

    const windowLen = right - left + 1;
    const replacementsNeeded = windowLen - maxFreq;

    if (replacementsNeeded > k) {
      // Shrink window
      const leftChar = s[left];
      freq[leftChar]--;
      left++;
      // Note: maxFreq ko explicitly recompute nahi kar rahe;
      // yeh approach still O(n) deta hai kyunki window size non-decreasing effectively track hoti hai.
    }

    const newWindowLen = right - left + 1;
    if (newWindowLen > maxLen) {
      maxLen = newWindowLen;
    }
  }

  return maxLen;
}

console.log(LongestRepeatingCharacterReplacement("AABABBA", 1)); // 4
console.log(LongestRepeatingCharacterReplacement("ABAB", 2)); // 4