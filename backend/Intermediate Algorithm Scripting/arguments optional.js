// Create a function that sums two arguments together. If only one argument is
// provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

function addTogether() {

  soloArgument = arguments['0'];

  function myClosure(secondArgument) {
    if(typeof secondArgument != 'number') {
      return undefined;
    } else {
      return soloArgument + secondArgument;
    }
  }

  var argumentsLength = Object.keys(arguments).length;

  if(argumentsLength > 1) {
    var counter = 0;
    for(i = 0; i < argumentsLength; i ++) {
      currentArgument = arguments[i.toString()]
      if(typeof currentArgument != 'number') {
        return undefined;
      }
      counter += currentArgument;
    }
  } else {
    soloArgument = arguments['0'];
    if(typeof soloArgument != 'number') {
      return undefined
    } else {
      return myClosure;
    }
  }
  return counter;
}



console.log(addTogether(2, 3)) // should return 5.
console.log(addTogether(2, "3")) // should return undefined.
console.log(addTogether("http://bit.ly/IqT6zt")) // should return undefined.
console.log(addTogether(2)(3)) // should return 5.
console.log(addTogether(2)([3])) // should return undefined.
