// Convert the given number into a roman numeral
function convertToRoman(num) {
  var roman = '';

  while (num >= 1000) {
    roman += 'M';
    num -= 1000;
  }

  if (num >= 900) {
    roman += 'CM';
    num -= 900;
  }

  if (num >= 500) {
    roman += 'D';
    num -= 500;
  }
  while (num >= 100) {
    roman += 'C';
    num -= 100;
  }

  if (num >= 90) {
    roman += 'XC';
    num -= 90;
  }
  if (num >= 50) {
    roman += 'L';
    num -= 50;
  }

  if (num >= 40) {
    roman += 'XL';
    num -= 40;
  }

  while (num >= 10) {
    roman += 'X';
    num -= 10;
  }

  if (num === 9) {
    roman += 'IX';
    num -= 9;
  }

  if (num >= 5) {
    roman += 'V';
    num -= 5;
  }

  if (num === 4) {
    roman += 'IV'
    num -= 4;
  }

  if(num < 4) {
    for (i = 1; i <= num; i++) {
      roman += 'I'
    }
  }

  return roman;
};
console.log(convertToRoman(2)); // should return "II".
console.log(convertToRoman(3)); // should return "III".
console.log(convertToRoman(4)); // should return "IV".
console.log(convertToRoman(5)); // should return "V".
console.log(convertToRoman(9)); // should return "IX".
console.log(convertToRoman(12)); // should return "XII".
console.log(convertToRoman(16)); // should return "XVI".
console.log(convertToRoman(29)); // should return "XXIX".
console.log(convertToRoman(44)); // should return "XLIV".
console.log(convertToRoman(45)); // should return "XLV"
console.log(convertToRoman(68)); // should return "LXVIII"
console.log(convertToRoman(83)); // should return "LXXXIII"
console.log(convertToRoman(97)); // should return "XCVII"
console.log(convertToRoman(99)); // should return "XCIX"
console.log(convertToRoman(500)); // should return "D"
console.log(convertToRoman(501)); // should return "DI"
console.log(convertToRoman(649)); // should return "DCXLIX"
console.log(convertToRoman(798)); // should return "DCCXCVIII"
console.log(convertToRoman(891)); // should return "DCCCXCI"
console.log(convertToRoman(1000)); // should return "M"
console.log(convertToRoman(1004)); // should return "MIV"
console.log(convertToRoman(1006)); // should return "MVI"
console.log(convertToRoman(1023)); // should return "MXXIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); // should return "MMMCMXCIX"
console.log(convertToRoman(3500));
