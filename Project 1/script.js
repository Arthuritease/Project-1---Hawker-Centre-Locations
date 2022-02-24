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
let mainMarkerPosition = [1.35, 103.83];
let mainMarker = L.marker(mainMarkerPosition);
mainMarker.bindPopup("<p>This should be the center of Singapore!</p>");
mainMarker.addTo(map);
document.addEventListener("DOMContentLoaded", async function () {
  let locationInfo = await axios.get("location.json");
  // let lat = locationInfo.data[0]["Y"];
  // let lng = locationInfo.data[0]["X"];
  // // console.log(lat, lng);
  // let hawkerMarkerPosition = [lat, lng];
  // let hawkerMarker = L.marker(hawkerMarkerPosition);
  // hawkerMarker.addTo(map);
  for (let eachHawkerLocation of locationInfo.data) {
    let lat = eachHawkerLocation["Y"];
    let lng = eachHawkerLocation["X"];
    // console.log(lat, lng);
    let hawkerMarkerPosition = [lat, lng];
    let hawkerMarker = L.marker(hawkerMarkerPosition);
    hawkerMarker.addTo(map);
  }
});
