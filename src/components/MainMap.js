import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers.js';

function MapBounds(props) {
   const map = useMap();

   useEffect(() => {
      const bounds = map.getBounds();
      props.onBoundsChanged(bounds);
   }, [map, props.onBoundsChanged]);

   return null;
}

export default function MainMap(props) {
   return (
      <div id="map">
         <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={true} minZoom={7} maxZoom={16}>
            <TileLayer
            attribution="Tiles courtesy of the <a href='https://usgs.gov/'>U.S. Geological Survey</a>"
            url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
            maxZoom={16}
            />
            <Markers maxLength={props.maxLength} data={props.data} />
            <MapBounds onBoundsChanged={props.onBoundsChanged} />
         </MapContainer>
      </div>
   );
}