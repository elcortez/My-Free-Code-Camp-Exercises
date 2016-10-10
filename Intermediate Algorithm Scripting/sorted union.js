function uniteUnique(arr) {
  var array = [];
  for(i in arguments) {
    if(arguments[i].length > 1) {
      for (var j in arguments[i]) {
        if(array.includes(arguments[i][j]) === false) {
          array.push(arguments[i][j]);
        }
      }
    }
    else {
      array.push()
    }
  }
  return array;
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) // should return [1, 3, 2, 5, 4].
// console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])) // should return [1, 3, 2, [5], [4]].
// console.log(uniteUnique([1, 2, 3], [5, 2, 1])) // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) // should return [1, 2, 3, 5, 4, 6, 7, 8].
