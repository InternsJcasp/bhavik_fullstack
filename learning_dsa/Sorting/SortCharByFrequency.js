// Sorting the characters by Frequency.

const frequencySort = (str) => {
  const frequency = new Map();

  for (const char of str) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  const characters = [...frequency.keys()];
  console.log("characters are:", characters);

  characters.sort((a, b) => {
    return frequency.get(b) - frequency.get(a);
  });

  console.log("characters are:", characters);

  let result = "";

  for (const char of characters) {
    result += char.repeat(frequency.get(char));
    console.log(result);
  }

  return result;
};

console.log(frequencySort("tree"));
