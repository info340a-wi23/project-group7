import React from 'react';

function Nav() {
   return (
      <header>
         <div class="topnav">
            <a href="index.html">Home</a>
            <a href="map.html">Map</a>
            <a href="training.html">Training</a>
            <a href="login.html" id="login">Login</a>
         </div>
      </header>
   );
}

export default Nav;