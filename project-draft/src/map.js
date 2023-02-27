let coords = [47.3826, -120.4472];
const map = L.map('map');
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19,
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.setView(coords, 7);

let data = fetch('../data/wta-parks-data.json');

for (const item in Object.entries(data)) {
   console.log(item);
   L.marker([item.coordinates.lat, item.coordinates.lon]).addTo(map);
}

let pctSectionJ = L.marker([47.4278, -121.4135]).addTo(map).bindPopup('<a href="pacific-crest-trail-section-j.html">PCT Section J</a>');
let ppPointChirico = L.marker([47.5000, -122.0219]).addTo(map).bindPopup('<a href="pacific-crest-trail-section-j.html">Poo Poo Point<br>via Chirico Trail</a>');
let ironGoat = L.marker([47.7113, -121.1620]).addTo(map).bindPopup('<a href="pacific-crest-trail-section-j.html">Iron Goat Trail</a>');
let heybrookLookout = L.marker([47.8084, -121.5352]).addTo(map).bindPopup('<a href="pacific-crest-trail-section-j.html">Heybrook Lookout</a>');
let lakeSerene = L.marker([47.8090, -121.5738]).addTo(map).bindPopup('<a href="pacific-crest-trail-section-j.html">Lake Serene and<br>Bridal Veil Falls</a>');