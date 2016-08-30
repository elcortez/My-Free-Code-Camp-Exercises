function destroyer(arr) {

  var elemToDestroy = [];
  for(var i = 1; i < arguments.length; i++){
    elemToDestroy.push(arguments[i]);
  }

  var survived = arguments[0].filter(function(element){
    var toReturn = true;

    for(var i = 0; i < elemToDestroy.length; i++){
      if (element === elemToDestroy[i]){
        toReturn = false;
      }
    }
    return toReturn;

  });
  return survived;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// Another, less robust way to do this

function destroyer(arr) {
  var final_arr = [];
  var argsCount = Array.prototype.slice.call(arguments).length - 1;
  for(i=0;i<arr.length;i++){
    if((arr[i] != arguments[1]) && (arr[i] != arguments[2]) &&  (arr[i] != arguments[3])){
      final_arr.push(arr[i]);
    }
  }
  return final_arr;
}
