// Return the number of total permutations of the provided string that don't have
// repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations
// (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the
// same letter (in this case a) repeating.

function permAlone(str) {
  var permutations = permutateMe(str);
}

function permutateMe(str){
  finalArr = []

  var splitted = str.split('')

  for(var i in splitted){
    console.log('--------------------')
    console.log('splitting now for element ' + i + ' with a splitted currently at ' + splitted)
    console.log('adding ' + splitted[i] + ' to the array')
    splitted.splice(i + 1, 0, splitted[i])
    console.log('splitted is now ' + splitted)

    console.log('removing ' + splitted[i])
    splitted.splice(i, 1);
    console.log('splitted is now ' + splitted)
    finalArr.push(splitted.join(''))
    console.log('--------------------')
  }




  return finalArr;
}

console.log(permutateMe("ab")) // should return ['ab', 'ba']
// console.log(permutateMe("abc")) // should return ["abc", "acb", "bac", "bca", "cab", "cba"]

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
