function findLongestWord(str) {
  arr = str.split(" ");
  length = arr.map(function(x) {return x.length;});
  numbers = length.sort(function(a, b) {  return b-a;});
  return numbers[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");