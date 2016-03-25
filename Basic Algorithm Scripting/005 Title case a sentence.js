function titleCase(str) {
  var arr = str.toLowerCase().split(" ").map(function(x) {
    return (x[0].toUpperCase() + x.substring(1, x.length));
  });
  return arr.join(" ");
}

titleCase("sHoRt AnD sToUt");