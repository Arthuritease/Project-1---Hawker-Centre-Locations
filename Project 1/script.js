alert("Ready for food?");
let singapore = [1.35, 103.83];
let map = L.map("map").setView(singapore, 12);
let apiKey =
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", //demo access token
  }
).addTo(map);
// let mainMarkerPosition = [1.35, 103.83];
// let mainMarker = L.marker(mainMarkerPosition);
// let locationInfo = {};
// mainMarker.bindPopup("<h1>This should be the center of Singapore!</h1>");
// mainMarker.addTo(map);
navigator.geolocation.getCurrentPosition((position) => {
  // Leaflet passes the latlng in
  const {
    coords: { latitude, longitude },
  } = position;
  var marker = new L.marker([latitude, longitude], {
    draggable: true,
    autoPan: true,
  })
    .addTo(map)
    .bindPopup("<h3>You're here!!</h3>");
});
window.addEventListener("DOMContentLoaded", async function () {
  locationInfo = await axios.get("location.json");

  // let lat = locationInfo.data[0]["Y"];
  // let lng = locationInfo.data[0]["X"];
  // // console.log(lat, lng);
  // let hawkerMarkerPosition = [lat, lng];
  // let hawkerMarker = L.marker(hawkerMarkerPosition);
  // hawkerMarker.addTo(map);
  let hawkerCluster = L.markerClusterGroup();

  for (let eachHawkerLocation of locationInfo.data) {
    //console.log(locationInfo.data);
    let lat = eachHawkerLocation["Y"];
    let lng = eachHawkerLocation["X"];
    let displayName = eachHawkerLocation["Name"];
    let hawkerImage = eachHawkerLocation["PHOTOURL"];
    //targeting hawkers in the north
    // let northCluster = [1.41];
    // let northHawkers = eachHawkerLocation["Y]"] >= northCluster;
    // // targeting hawkers in the south
    // let southCluster = [1.31];
    // let southHawkers = eachHawkerLocation["Y"] < southCluster;
    // //targeting east cluser
    // let eastCluster = [103.879];
    // let eastHawkers = eachHawkerLocation["X"] > eastCluster;
    // //tagreting west cluster
    // let westCluster = [103.779];
    // let westHawkers = eachHawkerLocation["X"] < westCluster;
    let hawkerMarkerPosition = [lat, lng];
    let hawkerMarker = L.marker(hawkerMarkerPosition);
    // let hawkerCluster = L.markerClusterGroup();
    // for (let i = 0; i < 100; i++) {
    hawkerMarker.addTo(hawkerCluster);
    // hawkerMarker.addTo(map); this is not needed as marker info already in cluster
    // hawkerCluster.addTo(map);

    hawkerMarker.bindPopup(
      `<div class = "">${displayName}</br> <img class ="popUpImage" src='${hawkerImage}'/></div>`
    );
    // document.querySelector("#north").addEventListener("click", function () {
    //   let northCluster = parseFloat(1.41);
    //   let northHawkers = parseFloat(eachHawkerLocation["Y"]) > northCluster;
    // });
  }
  hawkerCluster.addTo(map);
});
let northCluster = 1.41;
console.log(typeof northCluster);

// document.querySelector("#north").addEventListener("click", function () {
//   if (north.checked == true) {
//     alert("dont click me");
//   }
// });

// document.querySelector("#south").addEventListener("click", function () {
//   if (south.checked == true) {
//     alert("dont click me too");
//   }
// });

// document.querySelector("#east").addEventListener("click", function () {
//   if (east.checked == true) {
//     alert("dont la");
//   }
// });

// document.querySelector("#west").addEventListener("click", function () {
//   if (west.checked == true) {
//     alert("dont please");
//   }
// });
