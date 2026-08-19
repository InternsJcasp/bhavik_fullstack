// Here We will use Hashmap to check the word has duplicates or not

const checkContainsDuplicates = (inputArr) => {
  const freq = new Map();

  for (const key of inputArr) {
    if (freq.has(key)) {
      return "Contains Duplicates";
    }

    freq.set(key, 1);
  }

  return "Contains No Duplicates";
};

console.log(checkContainsDuplicates([1, 2, 4, 5, 5]));
