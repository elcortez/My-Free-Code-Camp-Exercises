// Check if the predicate (second argument) is truthy on all elements
// of a collection (first argument).

function truthCheck(collection, pre) {
  var check = true;
  collection.forEach(function(element) {
    console.log(typeof element[pre])
    if((element[pre] == undefined) || (element[pre] === 0) || (element[pre] === '') || ((isNaN(element[pre])) && (typeof element[pre]) != 'string')) {
      check = false
    }
  });
  return check;
}

console.log(truthCheck([{"single": "yes"}], "single")) // should return true
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")) // should return false.
// console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"))// should return false

// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))// should return false
