// Return true if the passed string is a valid US phone number.
// The user may fill out the form field any way they choose as long as it is a
// valid US number. The following are examples of valid formats for US numbers
// (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753
// or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone
// number based on any combination of the formats provided above. The area code
// is required. If the country code is provided, you must confirm that the
// country code is 1. Return true if the string is a valid US phone number;
// otherwise return false.



function checkAcceptedCharacters(char) {
  var accepted = false;

  if((char).match(/\d/) != null) {
    accepted = true;

  } else {
    ['-', '(', ')', ' '].forEach(function(element) {
      if(char == element) {
        accepted = true;
      }
    });


    return accepted;
  }
}


function telephoneCheck(str) {
  var valid = true;

  var numbersArray = []

  str.split('').forEach(function(element){
    if(checkAcceptedCharacters(element) == false) {
      valid = false
    } else if((element).match(/\d/) != null) {
      numbersArray.push(element)
    }

  });

  if((str.split('')[0] != '(') && (!(str.split('')[0]).match(/\d/))) {
    return false;
  }

  if(((str).match(/[)]/) && !(str).match(/[(]/)) ||
  ((str).match(/[(]/) && !(str).match(/[)]/))) {
    return false
  }


  if((numbersArray.length > 11) || (numbersArray.length < 10)) {
    valid = false;
  } else if(numbersArray.length == 11 && numbersArray[0] != '1') {
    valid = false;
  }

  if((numbersArray[0] != '5') && (numbersArray[0] != '1')) {
    return false;
  }

  return valid;
}


// console.log(telephoneCheck("(6505552368)")); // should return false
// console.log(telephoneCheck("-1 (757) 622-7382")); // should return false

// console.log(telephoneCheck("1 555)555-5555")); // should return false.
// console.log(telephoneCheck("(555-555-5555")); // should return false.
// console.log(telephoneCheck("555)-555-5555")); // should return false.
// console.log(telephoneCheck("555-555-5555")); //); should return a boolean.
// console.log(telephoneCheck("1 555-555-5555")); // should return true.
// console.log(telephoneCheck("1 (555) 555-5555")); // should return true.
// console.log(telephoneCheck("5555555555")); // should return true.
// console.log(telephoneCheck("555-555-5555")); // should return true.
// console.log(telephoneCheck("(555)555-5555")); // should return true.
// console.log(telephoneCheck("1(555)555-5555")); // should return true.
// console.log(telephoneCheck("1 555 555 5555")); // should return true.
// console.log(telephoneCheck("1 456 789 4444")); // should return true.
// console.log(telephoneCheck("555-5555")); // should return false.
// console.log(telephoneCheck("5555555")); // should return false.
// console.log(telephoneCheck("123**&!!asdf#")); // should return false.
// console.log(telephoneCheck("55555555")); // should return false.
// console.log(telephoneCheck("2 (757) 622-7382")); // should return false.
// console.log(telephoneCheck("0 (757) 622-7382")); // should return false.
// console.log(telephoneCheck("2 757 622-7382")); // should return false.
// console.log(telephoneCheck("10 (757) 622-7382")); // should return false.
// console.log(telephoneCheck("27576227382")); // should return false.
// console.log(telephoneCheck("(275)76227382")); // should return false.
// console.log(telephoneCheck("2(757)6227382")); // should return false.
// console.log(telephoneCheck("2(757)622-7382")); // should return false.
// console.log(telephoneCheck("(555)5(55?)-5555")); // should return false.
