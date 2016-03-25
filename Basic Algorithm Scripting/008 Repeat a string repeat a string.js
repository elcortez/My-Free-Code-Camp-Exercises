function repeatStringNumTimes(str, num) {
  if (num>0) {
      arr = [];
    for (i=1; i<=num;i++) {
      arr.push(str);
   }
      return arr.join('');
  }
  else {return "";}
}

repeatStringNumTimes("x", 3);