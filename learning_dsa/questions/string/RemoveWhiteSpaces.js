// Remove whiteSpaces from inbetween the sentences.

let str = " Hi I am Bhavik";

function removeWhiteSpaces(inputStr) {
  return inputStr.replace(/\s+/g, "");
}
console.log(removeWhiteSpaces(str));
