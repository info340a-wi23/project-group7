import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Homepage from './Homepage.js';
import Map from './Map.js';
import Training from './Training.js';
import Login from './Login.js';
import PCTSectionJ from './PCTSectionJ.js';

export default function App() {
   return (
      <div>
         <Routes>
            <Route path={''} element={<Homepage />} />
            <Route path='*' element={<Navigate to='' replace />}/>
            <Route path={'map'} element={<Map />} />
            <Route path={'training'} element={<Training />} />
            <Route path={'login'} element={<Login />} />
            <Route path={'map/pacific-crest-trail-section-j'} element={<PCTSectionJ />} />
         </Routes>
      </div>
   );
}