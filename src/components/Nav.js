import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
   return (
      <header>
         <div class="topnav">
            <Link to='index'>Home</Link>
            <Link to='map'>Map</Link>
            <Link to='training'>Training</Link>
            <Link to='login'>Login</Link>
         </div>
      </header>
   );
}