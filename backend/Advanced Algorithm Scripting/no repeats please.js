// Return the number of total permutations of the provided string that don't have
// repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations
// (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the
// same letter (in this case a) repeating.


function permAlone(str) {
  var permutations = permutateMe(str);
}

// console.log(permAlone("aab")) // should return a number.
// console.log(permAlone("aab")) // should return 2.
// console.log(permAlone("aaa")) // should return 0.
// console.log(permAlone("aabb")) // should return 8.
// console.log(permAlone("abcdefa")) // should return 3600.
// console.log(permAlone("abfdefa")) // should return 2640.
// console.log(permAlone("zzzzzzzz")) // should return 0.
// console.log(permAlone("a")) // should return 1.
// console.log(permAlone("aaab")) // should return 0.
// console.log(permAlone("aaabb")) // should return 12.

var finalArr = [];
var tempArr = [];

function permute(input) {
  console.log('------------------- starting method with i = ' + i + ', ch = ' + ch + ', chars = ' + chars + ', finalArr = ' + finalArr + ' and tempArr = ' + tempArr)
  console.log(' ')
  var i;
  var ch;
  var chars = input.split('');

  for (i = 0; i < chars.length; i++) {
    console.log('**** starting iteration with i = ' + i + ', ch = ' + ch + ', chars = ' + chars + ', finalArr = ' + finalArr + ' and tempArr = ' + tempArr)
    ch = chars.splice(i, 1);

    tempArr.push(ch);

    if (chars.length == 0) {
      finalArr[finalArr.length] = tempArr.join('');
    }

    permute(chars.join(''));
    chars.splice(i, 0, ch);
    tempArr.pop();
    console.log('......................ending iteration......................................')
    console.log(' ')
  }
  console.log('.......................ending method...........................')
  return finalArr
}

console.log(permute("abc")); // should return ["abc", "acb", "bac", "bca", "cab", "cba"]
