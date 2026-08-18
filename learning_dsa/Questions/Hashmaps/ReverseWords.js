// First Verion

function reverseWords(str) {
  let words = str.split(" ");

  words.reverse();

  return words.join(" ");
}

console.log(reverseWords("I love Bhavik"));

// Second Version
function reverseWords(str) {
  let result = "";
  let word = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      word = str[i] + word;
    } else if (word !== "") {
      result += word + " ";
      word = "";
    }
  }

  if (word !== "") {
    result += word;
  }

  return result;
}

console.log(reverseWords("I love Bhavik"));
