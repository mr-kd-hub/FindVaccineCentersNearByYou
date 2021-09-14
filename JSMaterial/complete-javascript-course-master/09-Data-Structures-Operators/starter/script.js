'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//array destructorig
const [first, , second] = restaurant.categories;
//console.log(first);
//console.log(second);
console.log(restaurant.order(2, 0)); //garlicbread,pizza

const arr = [1, 8, 9];
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

const nested = [2, 4, [5, 6]];
const [i, , [, k]] = nested;
console.log(i, k);

//spread operator(...)
let str = 'dhruv';
const arr_str = [...str];
console.log(arr_str);
///
function test(a, b, c) {
  console.log(a, b, c);
}
//const data = [prompt('first?'), prompt('second'), prompt('third')];
//test(...data);

const detail = {
  name: 'dhruv',
  age: 21,
  year: 1999,
};
const copyObj = { ...detail };
copyObj.name = 'kd';
console.log(copyObj);
console.log(detail);

//rest operator
const [x, y, ...other] = [1, 5, 8, 8, 9, 5, 2, 8, 8];
console.table(x, y, ...other);

//
const d = [
  {
    name: 'dhruv',
    year: 1999,
    age: function () {
      var d = new Date();
      var n = d.getFullYear();
      return n - this.year;
    },
  },
  {
    name: 'sss',
    age: 21,
    year: 2001,
    age: function () {
      var d = new Date();
      var n = d.getFullYear();
      return n - this.year;
    },
    salary: function () {},
  },
  {
    name: 'eee',
    age: 21,
    year: 2000,
    age: function () {
      var d = new Date();
      var n = d.getFullYear();
      return n - this.year;
    },
  },
];
for (const i of d) {
  console.log(i.name, i.year, i.age());
}

///\sets
const p = [1, 1, 1, 1, 5, 5, 6, 8, 5, 7, 2];
const order = new Set([...p]);
console.log(order.has(5));

//map
const rest = new Map();
rest.set('name', 'ashish');
rest.get('name');

console.log('object :>> ', rest);

//
const question = new Map([
  ['question', 'who are you?'],
  [1, 'dhruv'],
  [2, 'me'],
  [3, '1'],
  ['correct', 1],
  [true, 'correct'],
  [false, 'wrong'],
]);
//console.log(question);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answr ${key} : ${value}`);
}

//string
const airline = 'DhrUv kolAdiyA udud'; //0-14
const na = 'A48aobjectiH';
console.log('dafa'[0]);
console.log(airline.length); //14
console.log(airline.indexOf('a')); //9
console.log(airline.lastIndexOf('a')); //13
console.log(airline.lastIndexOf('koladiya')); //6
console.log(airline.lastIndexOf('dhruv')); //6
console.log(airline.slice(4)); //v koladiya
console.log(airline.slice(4, 7)); //v k
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //koladiya
console.log(airline.slice(-2)); //ya
console.log(airline.toLowerCase()); //dhruv koladiya
console.log(airline.toLocaleLowerCase()); //dhruv koladiya
console.log(airline.toUpperCase()); //DHRUV KOLADIYA
console.log(airline.replaceAll(' ', ',')); //DhrUv,kolAdiyA

//challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  //console.log(rows);//['underscore_case', 'first_name', 'Some_Variable ', ' calculate_AGE', 'delayed_departure']
  rows.forEach(function (i) {
    const [first, second] = i.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  });
});

//
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const r = flights.split('+');
r.forEach(i => {
  const d = i.replaceAll('_', ' ').trim();
  const s = d.replaceAll(';', '\n');
  console.log(s.replaceAll(s[0], s[0].toUpperCase()));
});
