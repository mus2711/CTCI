// initial crack
// this passes in string instead of character array
// total runtime O(n)
export function uniqueString(s: string): boolean {
  let hashMap = {};
  let bool = true;
  // runtime O(n)
  let arr = s.split("");
  // runtime O(n)
  arr.forEach((char, index) => {
    if (hashMap[char] !== undefined) {
      bool = false;
    } else {
      hashMap[char] = index;
    }
  });
  return bool;
}

// Answer Set
// Uses Set, Set objects are collections of values.
// You can iterate through the elements of a set in insertion order.
// A value in the Set may only occur once; it is unique in the Set's collection.

export function hasUniqueCharactersSet(str: string[]): boolean {
  let chars = new Set();
  for (let i = 0; i < str.length; ++i) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}

// Answer Sort
// Quicksort O(n*log(n))
export function hasUniqueCharactersSort(str: string[]): boolean {
  // sort string using quicksort
  str.sort();
  for (var i = 1; i < str.length; ++i) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}
