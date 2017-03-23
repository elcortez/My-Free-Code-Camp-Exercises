// Given an array arr, find element pairs whose sum equal the second argument
// arg and return the sum of their indices.

// If multiple pairs are possible that have the same numeric elements but
// different indices, return the smallest sum of indices. Once an element has
// been used, it cannot be reused to pair with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to
// 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.


function pairwise(arr, arg) {
  if(arr.length == 0) {
    return 0;
  }

  pairs = pairMaker(arr, arg);
  console.log(pairs);

  for(var pair in pairs) {
    console.log('---------------')
    possibleIndexes = pair.split(' & ')
    possibleIndexesAdded = possibleIndexes.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    console.log('indexes: ' + pair + ' -> ' + possibleIndexesAdded)

    possibleElements = pairs[pair].split(' & ')
    possibleElementsAdded = possibleElements.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    console.log('elements: ' + pairs[pair] + ' -> ' + possibleElementsAdded)
  }
}

function pairMaker(arr, arg){
  var pairs = {};

  arr.forEach(function(elmt1, index){
    arr.forEach(function(elmt2, index2){
      if((index != index2) && ((elmt1 + elmt2) == arg)){
        pairs[index + ' & ' + index2] = elmt1 + ' & ' + elmt2
      }
    })
  })

  return pairs;
}


console.log(pairwise([1, 1, 1], 2)) // should return 1.
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1)) // should return 10.
// console.log(pairwise([1, 3, 2, 4], 4)) // should return 1.
// console.log(pairwise([1, 4, 2, 3, 0, 5], 7)) // should return 11.
// console.log(pairwise([], 100)) // should return 0.
