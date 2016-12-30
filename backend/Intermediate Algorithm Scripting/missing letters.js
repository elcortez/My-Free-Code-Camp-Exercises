function fearNotLetter(str) {
  for(i = 0; i < str.length; i++) {
    if ((str.charCodeAt(i + 1) - (str.charCodeAt(i) + 1)) == 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined;
}


// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

console.log(fearNotLetter("abce"))// should return "d".
console.log(fearNotLetter("abcdefghjklmno"))// should return "i".
console.log(fearNotLetter("bcd"))// should return undefined.
console.log(fearNotLetter("yz"))// should return undefined.
