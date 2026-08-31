// Count Words in Sentence

let str = "Hi I am Bhavik";

function countWordsInSentence(inputStr) {
  // Remove leading/trailing space first
  const trimmedStr = inputStr.trim();

  // Handle empty string edge case
  if (trimmedStr === "") {
    return 0;
  }

  // Split by one or more whitespace characters
  // const wordsArray = trimmedStr.split(/\s+/);

  // return wordsArray.length;
  return trimmedStr.split(/\s+/).length;
}

console.log(countWordsInSentence(str));