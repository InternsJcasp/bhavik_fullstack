// First Version
function groupAnagrams(words) {
  let groups = [];

  for (let word of words) {
    let sortedWord = word.split("").sort().join("");

    let found = false;

    for (let group of groups) {
      let groupSorted = group[0].split("").sort().join("");

      if (groupSorted === sortedWord) {
        group.push(word);
        found = true;
        break;
      }
    }

    if (!found) {
      groups.push([word]);
    }
  }

  return groups;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Second Version:
function groupAnagrams(words) {
  let map = new Map();

  for (let word of words) {
    let key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
function groupAnagrams(words) {
  let map = new Map();

  for (let word of words) {
    let key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
