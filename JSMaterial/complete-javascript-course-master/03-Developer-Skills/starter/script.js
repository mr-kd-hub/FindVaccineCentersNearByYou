// Remember, we're gonna use strict mode in all scripts now!
"use strict";
let data = [17, 21, 23];
let i = 1;
const printForecast = (dum) => {
  dum.forEach((temp) => {
    console.log(`Data ${i++} Temperature ${temp}`);
  });
};
printForecast(data);
