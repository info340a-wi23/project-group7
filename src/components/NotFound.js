import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';

export default function NotFound(props) {
   return (
      <div>
         <Nav />
         <h1 className="title">Error 404: Page Not Found</h1>
         <h2 className="subtitle">Looks like you've reached a dead end!</h2>
         <iframe width="420" height="315" title="Totally normal video"
         src="https://www.youtube.com/embed/dQw4w9WgXcQ"
         style={{ display: "block", margin: "auto" }}>
         </iframe>
         <Footer />
      </div>
   );
}