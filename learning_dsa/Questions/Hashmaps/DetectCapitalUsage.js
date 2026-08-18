// First Version:
function detectCapitalUse(word) {
  let upper = 0;
  let lower = 0;

  for (let char of word) {
    if (char >= "A" && char <= "Z") {
      upper++;
    } else {
      lower++;
    }
  }

  if (upper === word.length) return true;

  if (lower === word.length) return true;

  if (word[0] >= "A" && word[0] <= "Z" && lower === word.length - 1) {
    return true;
  }

  return false;
}

console.log(detectCapitalUse("Google"));

// Second Version:
function detectCapitalUse(word) {
  return (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    word === word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
}

console.log(detectCapitalUse("Google"));
