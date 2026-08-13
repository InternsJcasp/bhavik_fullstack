// String Compression:

// Approach: In this we are simply making two variables: first one is for result string which will be initially empty and second variable is count which will be initialised with 1 and a loop to iterate on string and if the adjacent characters are same then the count will be increased by 1 and in case if they are not same at that time we will add the character with its count in result string and reset the value of count to 1.

function compressString(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compressString("aaabbcccc"));
