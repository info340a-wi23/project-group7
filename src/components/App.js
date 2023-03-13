import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import Map from './Map.js';
import Training from './Training.js';
import Login from './Login.js';
import PCTSectionJ from './PCTSectionJ.js';
import NotFound from './NotFound.js';

export default function App() {
   return (
      <div>
         <Routes>
            <Route path={'/'} element={<Homepage />} />
            <Route path={'/map'} element={<Map />} />
            <Route path={'/training'} element={<Training />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/map/*'} element={<PCTSectionJ />} />
            <Route path={'*'} element={<NotFound />}/>
         </Routes>
      </div>
   );
}