import 'ol/ol.css';
import {
  Map,
  View
} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {
  fromLonLat
} from 'ol/proj';
import OSM from 'ol/source/OSM';


// building and destroyig DOM
function init() {
  document.removeEventListener('DOMContentLoaded', init);
}
document.addEventListener('DOMContentLoaded', init);


// declaring tile and source
var theTileSource = new XYZ({
  url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
  transparent: true,
  crossOrigin: 'anonymous'
});

theTileSource.on('tileloaderror', function(e) {
  console.log(e);
});

var theTileLayer = new TileLayer({
  source: theTileSource
});


var map = new Map({
  target: 'map',
  layers: [
    theTileLayer
  ],
  view: new View({
    center: fromLonLat([110.768, -7.237]),
    zoom: 15
  })
});

var loadMap = function () {
  console.log("safasd");
  map.on('')

}

var modals = document.querySelectorAll('.modal');
M.Modal.init(modals, {
  onOpenStart: loadMap
});



document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instance = M.Collapsible.init(elems);
});


var datao = function(){
  console.log("kasnasj");
}




/*

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([-74.0064, 40.7142]),
    zoom: 18
  })
});
*/