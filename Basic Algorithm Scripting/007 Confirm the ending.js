function confirmEnding(str, target) {
  if (str.substring(str.length - target.length, str.length) === (target)) {return true;}
  return false;
}

confirmEnding("Bastian", "n");