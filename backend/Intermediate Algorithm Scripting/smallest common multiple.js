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

  for(i = counter; i < myArr[-1]; i++){
    while(foundIt == false) {
      checkingIt = checkingDivision(counter, myArr[i]);
      if(checkingIt == true){
        break;
      } else {
        counter += 1;
      }
    }
  }
}


function checkingDivision(counter, divider) {
  return (counter % divider) == 0
}

function removeElement(array, element) {
  var i = array.indexOf(element);
  if(i != -1) {
  	array.splice(i, 1);
  }
  return array;
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
// console.log(smallestCommons([5, 1])); // should return 60.
// console.log(smallestCommons([1, 13])); // should return 360360.
// console.log(smallestCommons([23, 18])); // should return 6056820.
