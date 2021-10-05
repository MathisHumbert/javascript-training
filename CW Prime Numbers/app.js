function isPrime(number) {
  // return true if the number is prime
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(start, finish) {
  // get all of the prime number bewteen two numbers
  let allPrime = [];
  if (start > finish) {
    [start, finish] = [finish, start];
  }
  for (start; start <= finish; start++) {
    if (isPrime(start)) {
      allPrime.push(start);
    }
  }
  return allPrime;
}

getPrimes(30, 0);
