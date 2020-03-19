// building and destroying DOM
function init() {
  document.removeEventListener('DOMContentLoaded', init);
}
document.addEventListener('DOMContentLoaded', init);

var map = L.map('map').setView([-7.7651555,110.370575], 17);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFueWxha3Nvbm8iLCJhIjoiUXRXLUdOVSJ9.zx09INjtQNEB-OoWhOOt3A', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(map);

var marker = L.marker([0,0], {
  draggable: true
})

marker.on('dragend', function (e) {
  setLocation(marker.getLatLng().lat, marker.getLatLng().lng);  
}).addTo(map);

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.on('click', onMapClick);

function onMapClick(e) {
  marker.setLatLng(e.latlng);
  setLocation(marker.getLatLng().lat, marker.getLatLng().lng);
}

function onLocationFound(e) {
  var radius = e.accuracy / 2;
  setLocation(e.latlng.lat, e.latlng.lng);
  marker.setLatLng(e.latlng)
    .bindPopup("Radius akurasi " + radius + " meter").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
  alert(e.message);
}

function setLocation(lat, lng){
  document.querySelector('#lat').value = lat;
  document.querySelector('#long').value = lng;
}


function getLocation(){
  map.locate({
    setView: true,
    maxZoom: 19
  });
}


var geolocate = document.querySelector('#geo');
geolocate.addEventListener("click", getLocation);



var modal = document.querySelector('.modal');
M.Modal.init(modal, {
  //onOpenStart: loadMap
});

//var tombol = document.querySelector("img");
//tombol.classList.add("pulse");

var formulir = document.querySelector("form")
formulir.addEventListener("submit", myFunction);


function myFunction() {
  //var element = document.getElementById("maprow");
  //element.classList.toggle("hide");
  console.log('submitted');
  window.location.href='./thanks';

}
