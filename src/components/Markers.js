import React, { useState, useEffect } from 'react';
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import marker from '../img/hiking-icon.jpeg';

export default function Markers(props) {
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
      iconSize: [20, 20]
   })

   const filteredData = (hikes) => {
      const valid = hikes.filter(hike => {return hike.coordinates.lat;})
         .filter(hike => {return hike.coordinates.lon;})
         .filter(hike => hike.length.split(" ")[0] != 0);
      const lengthFiltered = valid.filter(hike => hike.length.split(" ")[0] <= props.maxLength);
      return lengthFiltered;
   }

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