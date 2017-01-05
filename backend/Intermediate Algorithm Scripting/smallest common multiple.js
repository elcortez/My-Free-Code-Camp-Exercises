// Find the smallest common multiple of the provided parameters that can be evenly
// divided by both, as well as by all sequential numbers in the range between these
// parameters.

// The range will be an array of two numbers that will not necessarily be
// in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
// evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  var myArr = arrMaker(arr);
  var counter = myArr[0];
  var foundIt = false;

  while(foundIt == false){
    if(checkingDivision(counter, myArr[0])){
      if(checkingAllArray(myArr, counter)){
        foundIt = true;
        return counter;
      } else {
        counter += 1;
        continue;
      }
    } else {
      counter += 1;
      continue;
    }
  }
}

function checkingDivision(counter, divider) {
  return (counter % divider) == 0
}

function checkingAllArray(array, counter) {
  var check = true;

  for (i = 0; i < array.length; i++) {
    if(!checkingDivision(counter, array[i])) {
      check = false;
    }
  }
  return check;
}

function arrMaker(arr) {
  myArr = [];
  if(arr[0] > arr[1]){
    myArr = [arr[1], arr[0]]
  } else {
    myArr = arr
  }

  finalArr = []

  for(i = myArr[0]; i <= myArr[1]; i++) {
    finalArr.push(i);
  }
  return finalArr;
}
console.log(smallestCommons([1, 5])); // should return 60.
console.log(smallestCommons([5, 1])); // should return 60.
console.log(smallestCommons([1, 13])); // should return 360360.
console.log(smallestCommons([23, 18])); // should return 6056820.
