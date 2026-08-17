// First Version:
function reverseOnlyLetters(s) {
  let letters = [];

  for (let char of s) {
    if (/[a-zA-Z]/.test(char)) {
      letters.push(char);
    }
  }

  letters.reverse();

  let result = "";
  let index = 0;

  for (let char of s) {
    if (/[a-zA-Z]/.test(char)) {
      result += letters[index++];
    } else {
      result += char;
    }
  }

  return result;
}

// Second Version: // Two Pointer

function reverseOnlyLetters(s) {
  let arr = s.split("");

  let left = 0;
  let right = arr.length - 1;

  function isLetter(char) {
    return /[a-zA-Z]/.test(char);
  }

  while (left < right) {
    if (!isLetter(arr[left])) {
      left++;
    } else if (!isLetter(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left++;
      right--;
    }
  }

  return arr.join("");
}
