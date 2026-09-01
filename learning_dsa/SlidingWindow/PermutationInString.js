// Do strings diye hain: s1 aur s2. Check karna hai ki kya s1 ki koi permutation s2 ke andar as a substring exist karti hai. Permutation ka matlab characters same hona chahiye, bas order alag ho sakta hai.

// s1 = "ab";
// s2 = "eidbaooo";
// "ba" is a permutation of "ab" and exists in s2 → answer = true

// s1 ka frequency map banao: freq1.
// s2 pe sliding window of size k = s1.length maintain karo.
// Har window ke liye freqWindow (current window ka frequency map) update karo.
// Agar freqWindow == freq1 → permutation mil gayi → return true.
// End tak aake match na mile → return false.

function PermutationInString(s1, s2) {
  if (s1.length > s2.length) return false;

  const freq1 = {};
  const freqWindow = {};

  const k = s1.length;

  // Build frequency map for s1
  for (const ch of s1) {
    freq1[ch] = (freq1[ch] || 0) + 1;
  }

  // Initialize first window in s2
  for (let i = 0; i < k; i++) {
    const ch = s2[i];
    freqWindow[ch] = (freqWindow[ch] || 0) + 1;
  }

  // Helper to compare two frequency maps
  function mapsEqual(a, b) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    // console.log("Key-A:", keysA);
    // console.log("Key-B:", keysB);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      // console.log("freq-1", a[key]);
      // console.log("freqMap", b[key]);
      if (a[key] !== b[key]) return false;
    }
    return true;
  }

  if (mapsEqual(freq1, freqWindow)) return true;

  // Slide window over s2
  for (let i = k; i < s2.length; i++) {
    const newChar = s2[i];
    const oldChar = s2[i - k];

    // Add new character
    freqWindow[newChar] = (freqWindow[newChar] || 0) + 1;

    // Remove old character
    freqWindow[oldChar]--;
    if (freqWindow[oldChar] === 0) {
      delete freqWindow[oldChar];
    }

    if (mapsEqual(freq1, freqWindow)) return true;
  }

  return false;
}

console.log(PermutationInString("ab", "eidbaooo")); // true
console.log(PermutationInString("ab", "eidboaoo")); // false
