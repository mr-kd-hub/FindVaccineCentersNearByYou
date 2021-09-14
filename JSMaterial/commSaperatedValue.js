//1 CommaSaperated Digits
function FormmattedDivivsion(num1, num2) {
  var tot = Math.round(num1 / num2);
  var newNum = tot.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return newNum;
}
//console.log(FormmattedDivivsion(123456789, 100000));

//2
function FormattedDivision(num1, num2) {
  var div = parseFloat(num1 / num2);
  var arr = div.toString().split('');
  var len = arr.length - 1;
  var dot = 0;
  for (var i = len; i > 0; i--) {
    if (arr[i] === '.') {
      dot++;
    }
  }
  if (dot === 0) {
    arr.push('.', 0, 0, 0, 0);
  }
  for (var i = len; i > 0; i--) {
    if (arr[i + 3] === '.') {
      arr.splice(i, 0, ',');
    }
    if (arr[i + 3] === ',') {
      arr.splice(i, 0, ',');
    }
  }
  return arr.join('');
}
console.log(FormattedDivision(123456789, 100000));
