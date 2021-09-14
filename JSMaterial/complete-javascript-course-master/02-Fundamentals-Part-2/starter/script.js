//challenge 1
const calAvg = (a,b,c) => {
    return avg = a+b+c/3;
}
let avgDolphin = calAvg(44,23,71);
let avgKolas = calAvg(65,54,49);

const checkWinner = (dolphin,kolas) => {
   if(dolphin*2 > kolas)
   {
       console.log(`Dolphin Win (${dolphin} vs ${kolas})`)
   }
   else if(dolphin < kolas*2)
   {
    console.log(`Kolas Win (${dolphin} vs ${kolas})`)
   }
}
checkWinner(avgDolphin,avgKolas)

///array
const friends = ['dhruv','gunjan']
friends.push('vs')
console.log(...friends) //dhruv gunjan vs

const newLen = friends.push('me')
console.log(newLen)//4

friends.unshift('kd')
console.log(...friends) //kd dhruv gunjan vs me

friends.pop()
console.log(...friends) //kd dhruv gunjan vs

//chelleng 2
let tip = 0;
let bills = [125,555,44,5];
let tips = []; 
const calcBill = (values) => {

    values.forEach(function(bill){
        if(bill>=50 && bill<=300)
        {
            tip = bill * 15 / 100;
        }
        else
        {
            tip = bill * 20 / 100;
        }
        tips.push(tip)
    })
    console.log(...tips)
    
}
calcBill(bills)

//objects
var items = [];
prices = [];

const data = [
    {
    item : 'pizza',
    ing : ['base','chees','vegitables'],
    price : 150
},
{
    item : 'burger',
    ing : ['bread','chees','tiki'],
    price : 50
},
{
    item : 'sanwich',
    ing : ['bread','chees'],
    price : 100
}
]
function getItems()
{
    items.push(data.map(i=>{return i.item}))
}
function getPrice()
{
    prices.push(data.map(i=>{
        return i.price
    }))
}
function getIng()
{
    data.forEach(i=>{i.ing.forEach(j=>{console.log(j)})})
}
//console.log(data[0].item)
getItems()
getPrice()
getIng()
console.log(...items)
console.log(...prices)

//challenge 3
let BMI = 0;
const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height : 1.69
}
const john = {
    fullName : 'John Smith',
    mass: 92,
    height : 1.95
}
const calBMI = (mass,height) => {
    BMI = mass / height ** 2;
    return BMI;
}
let markBMI = calBMI(mark.mass,mark.height)
let johnBMI = calBMI(john.mass,john.height)

if(markBMI > johnBMI)
{
    console.log('Mark ha shigh bmi')
    console.log(mark)
}
else{
    console.log('john ha shigh bmi')
    console.log(john)
}