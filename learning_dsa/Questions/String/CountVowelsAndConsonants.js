// Count Vowels and Consonants

// Approach: I will use include for vowels like I will write "aeiou".includes(str) to check if the char is vowel or consonant and one variable to keep the count of vowels and for consonants I will return the word.length-vowel(variable) to display the count of consonants

let str = "Bhavik";

function countVowelsAndConsonants(inputStr) {
  let vowelsCount = 0;
  for (let i = 0; i <= inputStr.length - 1; i++) {
    if ("aeiou".includes(inputStr[i])) {
      vowelsCount++;
    }
  }
  return {
    vowelsCount: vowelsCount,
    consonantCount: inputStr.length - vowelsCount,
  };
}

console.log(countVowelsAndConsonants(str));
