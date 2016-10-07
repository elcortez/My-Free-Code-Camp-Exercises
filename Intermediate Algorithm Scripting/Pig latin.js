function translatePigLatin(str) {
  arr = str.split('');
  vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.indexOf(arr[0]) >= 0) {
    arr.push('way');
    return arr.join('');
  }
  else {
    if (vowels.indexOf(arr[1]) < 0) {
      arr.push(arr.splice(0, 2).join(''), 'ay')
      return arr.join('')
    }
    else {
      arr.push(arr.shift(), 'ay');
      return arr.join('');
    }
  }
}

// Pig Latin takes the first consonant (or consonant cluster) of an English word
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

console.log(translatePigLatin("california"))// should return "aliforniacay".
console.log(translatePigLatin("paragraphs"))// should return "aragraphspay".
console.log(translatePigLatin("glove"))// should return "oveglay".
console.log(translatePigLatin("algorithm"))// should return "algorithmway".
console.log(translatePigLatin("eight"))// should return "eightway".
