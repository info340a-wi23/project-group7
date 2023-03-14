import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
   return (
      <header>
         <div className="topnav">
            <Link to='/'>Home</Link>
            <Link to='/map'>Map</Link>
            <Link to='/training'>Training</Link>
            <Link to='/login' style={{float: "right"}}>{props.isLoggedIn ? 'Log Out' : 'Login'}</Link>
         </div>
      </header>
   );
}