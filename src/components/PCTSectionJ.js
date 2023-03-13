import React from 'react';
import Nav from './Nav.js';
import HikeDesc from './HikeDesc.js';
import HikeMap from './HikeMap.js';
import QAForum from './QAForum.js';
import UserReports from './UserReports.js';
import Footer from './Footer.js';

/*
TO DO:
- Make QAForum and UserReports based on a database and have user inputs update the database
*/

export default function PCTSectionJ(props) {
   console.log(props.data.name);
   return (
      <div>
         <Nav />
         <main>
            <HikeDesc data={props.data} />
            <HikeMap coords={[props.data.coordinates.lat, props.data.coordinates.lon]} name={props.data.name} />
            <QAForum />
            <UserReports />
         </main>
         <Footer />
      </div>
   )
}