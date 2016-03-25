function slasher(arr, howMany) {
  if (howMany > 0) {arr.splice(0, howMany);}
  return arr;
}

slasher([1, 2, 3], 2);