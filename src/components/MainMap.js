import React from 'react';
import L from 'leaflet';

export default function MainMap () {
   let coords = [47.3826, -120.4472];
   const mainMap = L.map('map');
   const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(mainMap);
   mainMap.setView(coords, 7);

   let data = fetch('../../public/data/wta-parks-data.json');

   for (const item in Object.entries(data)) {
      console.log(item);
      L.marker([item.coordinates.lat, item.coordinates.lon]).addTo(mainMap);
   }

   let pctSectionJ = L.marker([47.4278, -121.4135]).addTo(mainMap).bindPopup('<a href="pacific-crest-trail-section-j.html">PCT Section J</a>');
   let ppPointChirico = L.marker([47.5000, -122.0219]).addTo(mainMap).bindPopup('<a href="pacific-crest-trail-section-j.html">Poo Poo Point<br>via Chirico Trail</a>');
   let ironGoat = L.marker([47.7113, -121.1620]).addTo(mainMap).bindPopup('<a href="pacific-crest-trail-section-j.html">Iron Goat Trail</a>');
   let heybrookLookout = L.marker([47.8084, -121.5352]).addTo(mainMap).bindPopup('<a href="pacific-crest-trail-section-j.html">Heybrook Lookout</a>');
   let lakeSerene = L.marker([47.8090, -121.5738]).addTo(mainMap).bindPopup('<a href="pacific-crest-trail-section-j.html">Lake Serene and<br>Bridal Veil Falls</a>');

   return (
      <div id="map"></div>
   );
}