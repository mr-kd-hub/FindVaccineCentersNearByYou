//max number
function maxDigit(num) {
  //var n = num.toString().length;
  temp = 0;
  var n = Number(num);
  //
  while (n !== 0) {
    max = n % 10;
    //arr.push(max);
    if (max > temp) {
      temp = max;
    }
    n = Math.floor(n / 10);
  }

  console.log('max :>> ', arr);
  console.log('num :>> ', temp);
}
//maxDigit('158779541');

//two Digit`s Max Number
var arr = [];
function twoMaxDigit(nu) {
  var n = `${nu}`.length;
  temp = nu % 100;
  nu = Math.floor(nu / 10);
  for (i = 0; i < n - 1; i++) {
    var max = nu % 100;
    var nu = Math.floor(nu / 10);
    if (max > temp && max.toString().length == 2) temp = max;
  }
  return temp;
}
console.log(twoMaxDigit(123456));
