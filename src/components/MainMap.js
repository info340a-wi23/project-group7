import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers.js';

export default function MainMap(props) {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch('/data/wta-parks-data.json');
         const jsonData = await response.json();
         setData(jsonData);
       };
      fetchData();
   }, []);

   const filteredData = (hikes) => {
      const valid = hikes.filter(hike => {return hike.coordinates.lat;})
         .filter(hike => {return hike.coordinates.lon;})
         .filter(hike => hike.length.split(" ")[0] != 0);
      const lengthFiltered = valid.filter(hike => hike.length.split(" ")[0] <= props.maxLength);
      return lengthFiltered;
   }

   return (
      <div id="map">
         <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={true} minZoom={7} maxZoom={16}>
            <TileLayer
            attribution="Tiles courtesy of the <a href='https://usgs.gov/'>U.S. Geological Survey</a>"
            url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
            maxZoom={16}
            />
            <Markers maxLength={props.maxLength} data={filteredData(data)} />
         </MapContainer>
      </div>
   );
}