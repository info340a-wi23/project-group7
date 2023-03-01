import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker from '../img/hiking-icon.jpeg'

export default function MainMap() {
   let coords = [47.2326, -120.8472];
   let data = fetch('../../public/data/wta-parks-data.json');

   const customIcon = new Icon ({
      iconUrl: marker,
      iconSize: [33, 33]
   })

   return (
      <div id="map">
         <MapContainer center={coords} zoom={7} scrollWheelZoom={true} minZoom={7} maxZoom={16}>
            <TileLayer
            attribution="Tiles courtesy of the <a href='https://usgs.gov/'>U.S. Geological Survey</a>"
            url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
            maxzoom={20}
            />
            <Marker position={[47.4278, -121.4135]} icon={customIcon}>
               <Popup>
                  PCT - Section J
               </Popup>
            </Marker>
         </MapContainer>
      </div>
   );
}