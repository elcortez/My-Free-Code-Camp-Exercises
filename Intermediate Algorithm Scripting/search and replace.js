function myReplace(str, before, after) {
  var arr = str.split(' ');
  for (i = 0; i < arr.length; i++) {
    if(arr[i] == before) {
      if(before.charAt(0) == before.charAt(0).toUpperCase()) {
        arr.splice(i, 1, (after.charAt(0).toUpperCase() + after.slice(1)));
        return arr.join(' ');
      }
      arr.splice(i, 1, after);
      return arr.join(' ');
    }
  }
}

// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the original word when you are replacing it.
 // For ex if you replace "Book" with  "dog", it should be replaced as "Dog"


// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("Let us go to the store", "store", "mall")) // should return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) // should return "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) // should return "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")) // should return "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")) // should return "Let us get back to more Algorithms".
