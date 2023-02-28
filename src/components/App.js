import React from 'react';
import Homepage from './Homepage.js';
import Map from './Map.js';
import Training from './Training.js';
import Login from './Login.js';
import PCTSectionJ from './PCTSectionJ.js';

export default function App() {
   const path = window.location.pathname;
   if ((path == '/') | (path == '/index.html')) {
      return (<Homepage />);
   } else if (path == '/map.html') {
      return (<Map />);
   } else if (path == '/training.html') {
      return (<Training />);
   } else if (path == '/login.html') {
      return (<Login />);
   } else if (path == '/pacific-crest-trail-section-j.html') {
      return (<PCTSectionJ />);
   } else {
      return (<div>Error 404: Page Not Found</div>);
   }
}