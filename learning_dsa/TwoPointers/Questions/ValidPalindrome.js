// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Cleaned: "amanaplanacanalpanama" → palindrome

// Input: s = "race a car"
// Output: false
// Cleaned: "raceacar" → not palindrome

// Input: s = "Was it a car or a cat I saw?"
// Output: true
// Cleaned: "wasitacaroracatisaw" → palindrome

// Approach (Two-Pointer, Opposite Direction)
// Idea:

// Use two pointers:
// left = 0 (start of string)
// right = s.length - 1 (end of string)

// Move them towards each other:
// Skip non-alphanumeric characters from both ends.
// Compare s[left] and s[right] in lowercase.
// If they differ → not a palindrome → return false.
// If they match → move both pointers inward.
// If the loop finishes without mismatches → return true.

// This is a classic opposite direction two-pointer pattern.

// Check if a string is a valid palindrome (ignoring non-alphanumeric and case).
// Time: O(n), Space: O(1)

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric from left
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    // Skip non-alphanumeric from right
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// check if a character is alphanumeric

function isAlphaNumeric(ch) {
  const code = ch.charCodeAt(0);
  console.log("ch", ch, "code is:", code);
  const isDigit = code >= 48 && code <= 57; // '0'–'9'
  const isUpper = code >= 65 && code <= 90; // 'A'–'Z'
  const isLower = code >= 97 && code <= 122; // 'a'–'z'
  return isDigit || isUpper || isLower;
}

// Examples:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false
// console.log(isPalindrome("Was it a car or a cat I saw?")); // true
// console.log(isPalindrome("")); // true
// console.log(isPalindrome("a.")); // true
