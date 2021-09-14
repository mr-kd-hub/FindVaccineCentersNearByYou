function getDate(data) {
  var array = data.map(j => JSON.parse(j));
  //console.log(array);
  upper = 0;
  lower = array.length - 1;
  left = 0;
  right = array[0].length - 1;
  i = upper;
  j = left;
  result = [];
  while (true) {
    if (upper++ > lower) break;

    for (; j < right; j++) result.push(array[i][j]);
    if (right-- < left) break;

    for (; i < lower; i++) result.push(array[i][j]);
    if (lower-- < upper) break;

    for (; j > left; j--) result.push(array[i][j]);
    if (left++ > right) break;

    for (; i > upper; i--) result.push(array[i][j]);
  }
  result.push(array[i][j]);
  return result.join(',');
}
let d = getDate(['[1, 2, 3]', '[6, 8, 8]', '[9,7,3]']);
console.log(d);
