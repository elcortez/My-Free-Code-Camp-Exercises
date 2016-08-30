function truncateString(str, num) {
  if (str.length > num) {
    if(num>3) {return str.substring(0, num-3) + "...";}
    else {return str.substring(0, num) + "...";} }
  else {return str;}
}


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);