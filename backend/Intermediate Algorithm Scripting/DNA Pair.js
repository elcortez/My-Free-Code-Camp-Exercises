var pairs = {
  'A' : 'T',
  'T' : 'A',
  'C' : 'G',
  'G' : 'C'
}


function pairElement(str) {
  arr = str.split('');
  var final_arr = [];
  for(i = 0; i < arr.length; i++) {
    var pair = [];
    pair.push(arr[i]);
    pair.push(pairs[arr[i]]);
    final_arr.push(pair);
  }
  return final_arr;
}

console.log(pairElement("ATCGA")) // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")) // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")) // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

// The DNA strand is missing the pairing element.
// Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// The character and its pair are paired up in an array, and all the arrays
// are grouped into one encapsulating array.
