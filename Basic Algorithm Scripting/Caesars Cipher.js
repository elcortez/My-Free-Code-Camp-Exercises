function rot13(str) { // LBH QVQ VG!
  var array = [];
  for(i=0; i<100; i++) {
    var char_down = str.charCodeAt(i) - 13;
    var char_up = str.charCodeAt(i) + 13;
    var char = str.charAt(i);

    if(char === ' ' || char === '?' || char === '.' || char === '!') {
      array.push(str.charAt(i));
    }
    else if(char_down >= 65) {
      array.push(String.fromCharCode(char_down));
    }
    else if(char_up <= 90){
      array.push(String.fromCharCode(char_up));
    }
  }
  return array.join('');
}

// rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("?"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));


// One of the simplest and most widely known ciphers is a Caesar cipher,
// also known as a shift cipher. In a shift cipher the meanings of the letters
// are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are
//  shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a
// decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character
//  (i.e. spaces, punctuation), but do pass them on.
