//pascal triengle

const num = 9;
const pascalTriangle = num => {
  const res = [];
  while (res.length <= num) {
    res.unshift(1); //res=[1]
    //console.log('res :>> ', res);
    for (let i = 1; i < res.length - 1; i++) {
      res[i] = res[i] + res[i + 1];
    }
  }
  return [res];
};
console.log(pascalTriangle(9));
