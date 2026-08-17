// First Version:
function isIsomorphic(s, t) {
  let mapST = {};
  let mapTS = {};

  for (let i = 0; i < s.length; i++) {
    let a = s[i];
    let b = t[i];

    if (mapST[a] && mapST[a] !== b) {
      return false;
    }

    if (mapTS[b] && mapTS[b] !== a) {
      return false;
    }

    mapST[a] = b;
    mapTS[b] = a;
  }

  return true;
}

console.log(isIsomorphic("egg", "add"));

// Second Version:
function isIsomorphic(s, t) {
  let map1 = new Array(256).fill(-1);
  let map2 = new Array(256).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let a = s.charCodeAt(i);
    let b = t.charCodeAt(i);

    if (map1[a] !== -1 && map1[a] !== b) {
      return false;
    }

    if (map2[b] !== -1 && map2[b] !== a) {
      return false;
    }

    map1[a] = b;
    map2[b] = a;
  }

  return true;
}
