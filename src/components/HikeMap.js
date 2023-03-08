import React from 'react';
import MainMap from './MainMap.js';

export default function HikeMap(props) {
   return (
      <div>
         <h2>Hike Map</h2>
         <MainMap center={[10, 10]} zoom={14} />
      </div>
   )
}