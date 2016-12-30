function factorialize(num) {
  arr = [];
  if (num === 0) { return 1; }
  while (num > 0) {
    arr.push(num);
    num --;
  }
  var myResult = arr.reduce(function(x, y) {
    return x * y;
  });
  return myResult;
}

factorialize(5);