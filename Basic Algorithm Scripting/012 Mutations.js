function mutation(arr) {
  var x = arr[0].toLowerCase().split('');
  var y = arr[1].toLowerCase().split('');
  
  for (i=0;i<y.length;i++) {
    if (x.indexOf(y[i]) < 0) {return false;}
  }  
  return true; 
}

/* it works because the "return true" is casted OUTSIDE the for loop */