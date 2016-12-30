function sumAll(arr) {
  var result = 0;
  var my_arr = arr;
  if (arr[1] < arr[0]) {
    my_arr = arr.reverse();
  }
  for(i = arr[0]; i <= arr[1]; i++){
    result += i;
  }
  return result;
}

  // return my_arr.reduce( (prev, curr) => prev + curr );

console.log(sumAll([10, 5]));
// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.
// Remember to use Read-Search-Ask if you get stuck.
// Try to pair program. Write your own code.

//  sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.
