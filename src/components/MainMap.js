import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MainMap() {
   let coords = [47.3826, -120.4472];
   let data = fetch('../../public/data/wta-parks-data.json');

   return (
      <div id="map">
         <MapContainer center={coords} zoom={7} scrollWheelZoom={true}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         </MapContainer>
      </div>
   );
}