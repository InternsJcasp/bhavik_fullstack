// Reverse Words in a Sentence

// Approach:
// In this I have used trim to remove extra whitespaces at the start and end.
// then for reversing them word wise I have used split and it is converted into an array.
// then I have applied reverse method on that and then again used join to convert it in string.

let str = "I am Bhavik";

function reverseWords(sentence) {
  const words = sentence.trim().split(" ");
  return words.reverse().join(" ");
}

console.log(reverseWords(str));
