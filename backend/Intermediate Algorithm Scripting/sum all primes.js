// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two
// divisors, one and itself. For example, 2 is a prime number because it's only
// divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
  var sum = 0

  for (i = 0; i <= num; i++){
    if(i == 2){
      sum += 2;
    }
    var square = Math.floor(Math.sqrt(i) + 1);

    var prime = true
    for(j = square; j > 1; j--){

      if(i % j == 0){
        prime = false
      }

      if((j == 2) && (i !== 1) && (i % j !== 0) && (prime == true)){
        sum += i;
      }
    }
  }
  return sum
}

console.log(sumPrimes(10)); // should return 17.
console.log(sumPrimes(977)); // should return 73156.
