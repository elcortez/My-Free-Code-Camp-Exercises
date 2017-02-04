// Compare and update the inventory stored in a 2D array against a second 2D
// array of a fresh delivery. Update the current existing inventory item
// quantities (in arr1). If an item cannot be found, add the new item and
// quantity into the inventory array. The returned inventory array should be in
 // alphabetical order by item.


function updateInventory(arr1, arr2) {
  if(arr2.length == 0) {
    return arr1;
  }

  arr2.forEach(function(element2){
    var present = false;

    arr1.forEach(function(element1){
      if(element1[1] == element2[1]) {
        present = true;
        element1[0] += element2[0]
      }
    })

    if(present == false) {
      for(var i of arr1) {
        if(i[1] > element2[1]) {
          present = true;
          arr1.splice(arr1.indexOf(i), 0, element2);
          break
        }
      }

    }

    if(present == false){
      arr1.push(element2);
    }
  })

  return arr1
}


console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
  // should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
// [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

// console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
// [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]))
// // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].


// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])) // should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
//   [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length)
  // should return an array with a length of 6.
