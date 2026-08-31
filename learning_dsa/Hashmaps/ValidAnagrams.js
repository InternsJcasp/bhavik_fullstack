// Valid Anagrams:

const checkAnagram = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) {
    return `It is not an Anagram`;
  }
  firstWord = firstWord.toLowerCase();
  secondWord = secondWord.toLowerCase();

  let freq = new Map();

  for (let key of firstWord) {
    if (freq[key]) {
      freq[key] + 1;
    } else {
      freq[key] = 1;
    }
  }
  console.log(freq);
  for (let key of secondWord) {
    // console.log(key);
    if (freq[key]) {
      freq[key]--;
    } else {
      return `These are not Anagrams`;
    }
  }
  return `These both are Anagrams`;
};

console.log(checkAnagram("Race", "care"));
