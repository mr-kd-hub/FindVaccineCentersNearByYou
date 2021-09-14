'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const openModel = document.querySelectorAll('.show-modal');
console.log(openModel); //openModel tend as array here

//handle multiple tags with same class name
openModel.forEach(i => {
  //Button Click Hndle
  i.addEventListener('click', function () {
    // console.log(`${i.textContent}`);
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});
function close() {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
}
//close miodel by clicking on close button
function onCloseBtn() {
  close();
}
//close model when click outside
function outsideVlick() {
  close();
}
//handle key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    close();
  }
  console.log(e);
  //console.log(e.key);
});
