function steamrollArray(arr) {
  var finalArr = [];

  function recursor(element) {
    if (Array.isArray(element)) {
      for (var i in element) {
        recursor(element[i]);
      }
    } else {
      finalArr.push(element);
    }
  }

  arr.forEach(recursor);
  return finalArr;
}
console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])) // should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) // should return [1, {}, 3, 4].
