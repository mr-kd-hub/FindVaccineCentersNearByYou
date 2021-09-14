const row = document.querySelector('.row');
// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(res => res.json())
//   .then(data => {
//     data
//       //.filter(i => i.userId === 5)
//       .forEach(i => {
//         const html = `<header class="w3-container w3-light-grey">
//         <h3>${i.title}</h3>
//       </header>
//     <a href=${i.url}>
//       <div class="w3-container">
//         <p>${i.albumId} new friend request</p>
//         <hr / >
//         <img src=${i.thumbnailUrl} />
//         <p>${i.title}</p>
//       </div></a>`;
//         container.insertAdjacentHTML('afterbegin', html);
//       });
//   });

//cwinAPp
//same as upper using async await
const asyncAwaitEx = async (lat, lon) => {
  const res = await fetch(
    `https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${lon}`
  );
  const data = await res.json();
  //console.log('data :>> ', data.sessions);
  data.centers.forEach(i => {
    const html = `<div class="col-sm-3">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Name : ${i.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Location : ${i.location}</h6>
        <p class="card-text">District Name : ${i.district_name} , Pincode : ${i.pincode} , Block Name : ${i.block_name} </p>
       
      </div>
    </div>
  </div>`;
    row.insertAdjacentHTML('afterbegin', html);
    console.log(
      'Center Name : ' + i.name,
      '\n' + '"District Name" : ' + i.district_name,
      '\n' + 'Pincode : ' + i.pincode,
      '\n' + 'block_name : ' + i.block_name,
      '\n' + 'location : ' + i.location
    );
  });
};
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      asyncAwaitEx(latitude, longitude);
    },
    err => {
      console.log('could not find location :>> ', err);
    }
  );
}
