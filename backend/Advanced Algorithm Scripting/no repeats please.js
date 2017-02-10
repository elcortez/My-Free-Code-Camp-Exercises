// Return the number of total permutations of the provided string that don't have
// repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations
// (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the
// same letter (in this case a) repeating.


function permAlone(str) {
  var allPermutations = permutateMe(str);
  counter = 0

  allPermutations.forEach(function(elmt){
    if(!(elmt.match(/(.)\1+/g))) {
      counter += 1
    }
  })
  return counter;
}

function permutateMe(str) {
  var arr = str.split('');
  var allPossiblePermutations = [];

  function generatePermutations(count) {
    if(count === 1) {
      allPossiblePermutations.push(arr.join(''));
    } else {
      for(var i = 0; i < count; i++){
        generatePermutations(count - 1);
        var swap = count % 2 ? i : 0;
        [arr[swap], arr[count - 1]] = [arr[count - 1], arr[swap]]
      }
    }
  }

  generatePermutations(arr.length);
  return allPossiblePermutations;
}

console.log(permAlone("aab")) // should return a number.
// console.log(permAlone("aab")) // should return 2.
// console.log(permAlone("aaa")) // should return 0.
console.log(permAlone("aabb")) // should return 8.
console.log(permAlone("abcdefa")) // should return 3600.
console.log(permAlone("abfdefa")) // should return 2640.
// console.log(permAlone("zzzzzzzz")) // should return 0.
// console.log(permAlone("a")) // should return 1.
// console.log(permAlone("aaab")) // should return 0.
// console.log(permAlone("aaabb")) // should return 12.
