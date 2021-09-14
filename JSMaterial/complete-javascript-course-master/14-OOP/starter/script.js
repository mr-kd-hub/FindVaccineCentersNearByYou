const arrayAddition = arr => {
  var newArr = arr.sort(); //sorted from smallest to largest
  var largestNum = newArr.slice(-1); //get the last number
  //console.log('largestNum :>> ', newArr, largestNum);
  var loopArr = arr.sort().pop(); // take out largest number for adding later
  var result = 0;

  //loop through all number
  for (var i = 0; i < loopArr.length; i++) {
    if (result / largestNum !== 1) {
      result += loopArr[i]; //keep adding each number till get largest number
    } else if (result === largestNum) {
      return true;
    }
  }
  return false;
};
console.log(arrayAddition([4, 3, 5, 1, 6]));
console.log(arrayAddition([5, 7, 16, 1, 2]));
console.log(arrayAddition([3, 5, -1, 8, 12]));
