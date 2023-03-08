import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers.js';

export default function MainMap(props) {
   return (
      <div id="map">
         <MapContainer center={[47.2326, -120.8472]} zoom={7} scrollWheelZoom={true} minZoom={7} maxZoom={16}>
            <TileLayer
            attribution="Tiles courtesy of the <a href='https://usgs.gov/'>U.S. Geological Survey</a>"
            url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
            maxZoom={16}
            />
            <Markers />
         </MapContainer>
      </div>
   );
}