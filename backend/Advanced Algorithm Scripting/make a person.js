var Person = function(firstAndLast) {
  var firstName = ''
  var lastName = ''

  this.getFirstName = function(){
    if(firstName === ''){
      return firstAndLast.split(' ')[0];
    } else {
      return firstName;
    }
  };

  this.getLastName = function(){
    if(lastName === ''){
      return firstAndLast.split(' ')[1];
    } else {
      return lastName;
    }
  };

  this.setFirstName = function(setName) {
    firstName = setName;
  };

  this.setLastName = function(setName) {
    lastName = setName;
  };


  this.getFullName = function(){
    return this.getFirstName() + ' ' + this.getLastName()
  }

  this.setFullName = function(firstAndLast){
    this.setFirstName(firstAndLast.split(' ')[0]);
    this.setLastName(firstAndLast.split(' ')[1]);
  }
};


var bob = new Person('Bob Ross');
console.log(Object.keys(bob)) // should return 6.
console.log(Object.keys(bob).length) // should return 6.
console.log(bob instanceof Person) // should return true.
console.log(bob.firstName) // should return undefined.
console.log(bob.lastName) // should return undefined.
console.log(bob.getFirstName()) // should return "Bob".
console.log(bob.getLastName()) // should return "Ross".
console.log(bob.getFullName()) // should return "Bob Ross".
console.log('---------------------------------------')

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFirstName('Haskell')

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName()); // should return "Haskell Ross" after bob.setFirstName("Haskell").

bob.setLastName('Curry');
console.log(bob.getFullName()); // should return "Haskell Curry" after bob.setLastName("Curry").

bob.setFullName('Haskell Curry');
console.log(bob.getFullName()); // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() // should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() // should return "Curry" after bob.setFullName("Haskell Curry").
