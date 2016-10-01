function whatIsInAName(arr, target) {
  var finalArr = [];
  var targetKeys = Object.keys(target);
  for (i = 0; i < arr.length; i++) {
    var counter = targetKeys.length;
    for (j = 0; j < targetKeys.length; j ++) {
      if ((arr[i].hasOwnProperty(targetKeys[j])) && arr[i][targetKeys[j]] === target[targetKeys[j]]) {
        counter -= 1;
      }
      if (counter === 0) {
        finalArr.push(arr[i]);
      }
    }
  }
  return finalArr;
}

// function checkingObjectProperties(obj, property) {
//   if (arr[i].hasOwnProperty(Object.keys(target))) {
//     arr2.push(arr[i]);
//   }
//   console.log(Object.keys(target));
//   var arr2 = [];
//
// console.log(arr[i][Object.keys(target)]);
// console.log(target[Object.keys(target)]);
// }
//
// arr[i].hasOwnProperty(Object.keys(target))
 //  return arr2;



console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })) // should return [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
// console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })) // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
// console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })) // should return [{ "a": 1, "b": 2, "c": 2 }].
