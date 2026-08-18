// First Version:

function convertToUpperCase(inputString) {
  for (i = 0; i < inputString.length; i++) {
    console.log(inputString[i].toUpperCase());
  }
}

let string = "RAHUL";
convertToUpperCase(string);

// Also for Array:
let names = ["vijay", "bhavik", "rahul", "neha"];
convertToUpperCase(names);

// Second Version:
function convertInUpperCase(inputString) {
  return inputString.toUpperCase();
}

let str = "BHAVIK";
console.log(convertInUpperCase(str));
