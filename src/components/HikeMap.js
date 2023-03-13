import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import marker from '../img/hiking-icon.jpeg';
import 'leaflet/dist/leaflet.css';

export default function HikeMap(props) {
   const customIcon = new Icon ({
      iconUrl: marker,
      iconSize: [30, 30]
   })

   return (
      <div id="hike-map">
         <h2>Hike Map</h2>
         <MapContainer center={props.coords} zoom={14} scrollWheelZoom={true} minZoom={7} maxZoom={16}>
            <TileLayer
            attribution="Tiles courtesy of the <a href='https://usgs.gov/'>U.S. Geological Survey</a>"
            url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
            maxZoom={16}
            />
            <Marker position={props.coords} icon={customIcon}>
               <Popup>{props.name}</Popup>
            </Marker>
         </MapContainer>
      </div>
   )
}