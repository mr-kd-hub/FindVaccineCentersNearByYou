'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map;
let mapEent;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      //console.log('position :>> ', position.coords.latitude);
      const { latitude, longitude } = position.coords;

      //api called from https://leafletjs.com/index.html

      map = L.map('map').setView([latitude, longitude], 30);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      console.log('map :>> ', map);

      //end
      map.on('click', function (mapE) {
        mapEent = mapE;
        console.log(mapEent);
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    err => {
      console.log('not got position' + err);
    }
  );
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  inputDistance = inputDuration = inputElevation = '';
  const { lat, lng } = mapEent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnclick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});
