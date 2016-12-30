function palindrome(str) {
  basic = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/gi,"").toLowerCase();
  reversed = basic.split('').slice().reverse().join('');

  if (basic === reversed) {return true;}
  else {return false;}
}

palindrome("eye");