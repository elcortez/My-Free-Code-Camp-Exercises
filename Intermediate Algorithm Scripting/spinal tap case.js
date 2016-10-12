function spinalCase(str) {
  var arr = str.split('')
  for(i in arr){
    if((arr[i] >= 'A' && arr[i] <= 'Z') && (arr[i - 1] >= 'a' && arr[i - 1] <= 'z')){
      arr.splice(i, 0, '-');
    }
  }
  return arr.join('').toLowerCase().replace(/[_ ]/gi, '-')
}

console.log(spinalCase("This Is Spinal Tap")) //should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap")) //should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")) //should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")) //should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")) //should return "all-the-small-things".
// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.
