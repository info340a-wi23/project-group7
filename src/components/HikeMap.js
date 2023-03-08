import React from 'react';
import MainMap from './MainMap.js';

export default function HikeMap(props) {
   return (
      <div>
         <h2>Hike Map</h2>
         <MainMap center={[47.4278, -121.4135]} zoom={14} />
      </div>
   )
}