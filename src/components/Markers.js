import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'leaflet';
import marker from '../img/hiking-icon.jpeg';
import { Marker, Popup } from 'react-leaflet';

export default function Markers(props) {
   const data = props.data;

   const customIcon = new Icon ({
      iconUrl: marker,
      iconSize: [20, 20]
   })

   return (
      <div>
         {data.map(item => (
            <Marker position={[item.coordinates.lat, item.coordinates.lon]} icon={customIcon} key={item.id}>
               <Popup>
                  <Link to={`/map/${item.url.split("/")[item.url.split("/").length - 1]}`}>{item.name}</Link>
               </Popup>
            </Marker>
         ))}
      </div>
   )
}