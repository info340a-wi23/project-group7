import React from 'react';
import MainMap from './MainMap.js';

export default function HikeMap(props) {
   return (
      <div>
         <h2>Hike Map</h2>
         <MainMap center={props.coords} zoom={14} />
      </div>
   )
}