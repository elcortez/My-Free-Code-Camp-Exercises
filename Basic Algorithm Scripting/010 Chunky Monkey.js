function chunkArrayInGroups(arr, size) {
  finalArr = [];
  
  for (i=0; i<=arr.length; i++){
  finalArr.push(arr.splice(0, size));}
  
  if (arr.length !== 0) {finalArr.push(arr);}
  
  return finalArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);