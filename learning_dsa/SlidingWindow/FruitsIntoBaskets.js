// Intuition: Ek array of fruits diya hai, har fruit ek character/string se represent hota hai. Tumhare paas 2 baskets hain, har basket me sirf ek type ka fruit rakh sakte ho. Find maximum number of fruits jo tum pick kar sakte ho continuously, with at most 2 distinct types. Yeh variable-size sliding window hai with condition: “at most 2 distinct characters.”

// Example:
function FruitsIntoBaskets(fruits) {
  const freq = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < fruits.length; right++) {
    const f = fruits[right];
    freq[f] = (freq[f] || 0) + 1;

    // If more than 2 distinct types, shrink window
    while (Object.keys(freq).length > 2) {
      const leftFruit = fruits[left];
      freq[leftFruit]--;
      if (freq[leftFruit] === 0) {
        delete freq[leftFruit];
      }
      left++;
    }

    const windowLen = right - left + 1;
    if (windowLen > maxLen) {
      maxLen = windowLen;
    }
  }

  return maxLen;
}

console.log(FruitsIntoBaskets([1, 2, 1, 2, 3])); // 4
console.log(FruitsIntoBaskets(["A", "B", "C", "A", "C"])); // 3