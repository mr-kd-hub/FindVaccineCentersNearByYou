const isPrime = number => {
  let isPrime = true;
  if (number === 1) {
    console.log(false);
  }
  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
  // check if number is less than 1
  else {
    console.log(false);
  }
};
isPrime(23);
