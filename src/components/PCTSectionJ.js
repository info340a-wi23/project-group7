import React from 'react';
import Nav from './Nav.js';
import HikeDesc from './HikeDesc.js';
import HikeMap from './HikeMap.js';
import QAForum from './QAForum.js';
import UserReports from './UserReports.js';
import Footer from './Footer.js';

export default function PCTSectionJ(props) {
   return (
      <div>
         <Nav />
         <main>
            <HikeDesc />
            <HikeMap />
            <QAForum />
            <UserReports />
         </main>
         <Footer />
      </div>
   )
}