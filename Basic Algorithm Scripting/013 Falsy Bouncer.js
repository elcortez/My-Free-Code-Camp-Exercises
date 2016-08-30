function bouncer(arr) {

  var x = [];
  for (i=0; i < arr.length; i++) {
    if (arr[i]) {x.push(arr[i]);}
  }
  return x;
}

bouncer([1, null, NaN, 2, undefined]);


/* And all that just because very "falsy" value... just doesn't exist. */