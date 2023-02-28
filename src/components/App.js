import React from 'react';
import Homepage from './Homepage.js';
import Login from './Login.js';

export default function App() {
   const path = window.location.pathname;
   if ((path == '/') | (path == '/index.html')) {
      return (<Homepage />);
   } else if (path == '/login.html') {
      return (<Login />)
   } else {
      return (<div>404 Not Found</div>);
   }
}