// First Version:

function convertToLowerCase(inputString) {
  for (i = 0; i < inputString.length; i++) {
    console.log(inputString[i].toLowerCase());
  }
}

let string = "RAHUL";
convertToLowerCase(string);

// Also for Array:
let names = ["vijay", "bhavik", "rahul", "neha"];
convertToLowerCase(names);

// Second Version:
function convertInLowerCase(inputString) {
  return inputString.toLowerCase();
}

let str = "BHAVIK";
console.log(convertInLowerCase(str));
