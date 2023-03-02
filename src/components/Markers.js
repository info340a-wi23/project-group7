import React, { useState, useEffect } from 'react';
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import marker from '../img/hiking-icon.jpeg';

export default function Markers() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch('/data/wta-parks-data.json');
         const jsonData = await response.json();
         setData(jsonData);
       };
      fetchData();
   }, []);

   const customIcon = new Icon ({
      iconUrl: marker,
      iconSize: [33, 33]
   })

   const filteredData = (arr) => {
      const required = arr.filter(el => {
         return el.coordinates.lat;
      });
      return required;
   }

   console.log(filteredData(data));

   return (
      <div>
         {filteredData(data).map(item => (
            <Marker position={[item.coordinates.lat, item.coordinates.lon]} icon={customIcon}>
               <Popup>
                  <a href="pacific-crest-trail-section-j.html">{item.name}</a>
               </Popup>
            </Marker>
         ))}
      </div>
   )
}