'use strict';
const josh = {
  fname: 'dhruv',
  year: 1999,
  age: function () {
    var d = new Date();
    var n = d.getFullYear();
    return n - this.year;
  },
  pf: 10,
  //not work
  salary: () => {
    return 100 - this.pf;
  },
};

var i = josh.age();
console.log(i);

var j = josh.salary();
console.log(j);
