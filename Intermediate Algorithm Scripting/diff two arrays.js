// Compare two arrays and return a new array with any items only found in
// one of the two given arrays, but not both. In other words,
// return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = [];
  for(i = 0; i < arr1.length; i ++) {
    if(arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for(i = 0; i < arr2.length; i ++) {
    if(arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}


// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4]
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["pink wool"]
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["diorite", "pink wool"].
// console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // should return [].
// console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return ["piglet", 4].
// console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // should return ["snuffleupagus", "cookie monster", "elmo"].
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // should return [1, "calf", 3, "piglet", 7, "filly"].
