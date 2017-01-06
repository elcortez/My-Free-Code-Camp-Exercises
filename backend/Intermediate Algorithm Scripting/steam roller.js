function steamrollArray(arr) {
  var final_arr = []

  for (i=0 ; i < arr.length; i ++) {
    if(Array.isArray(arr[i])) {
    } else {
      console.log('not an array ' + arr[i])
      final_arr.push(arr[i])
    }
  }
  return final_arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]])) //
// console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
// console.log(steamrollArray([1, [2], [3, [[4]]]])) // should return [1, 2, 3, 4].
// console.log(steamrollArray([1, [], [3, [[4]]]])) // should return [1, 3, 4].
// console.log(steamrollArray([1, {}, [3, [[4]]]])) // should return [1, {}, 3, 4].
