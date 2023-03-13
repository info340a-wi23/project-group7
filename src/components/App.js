import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import Map from './Map.js';
import Training from './Training.js';
import Login from './Login.js';
import PCTSectionJ from './PCTSectionJ.js';
import NotFound from './NotFound.js';

/*
TO DO:
- Move difficulty calculation here from Map.js
*/

export default function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch('/data/wta-parks-data.json');
         const jsonData = await response.json();
         setData(jsonData);
       };
      fetchData();
   }, []);

   return (
      <div>
         <Routes>
            <Route path={'/'} element={<Homepage />} />
            <Route path={'/map'} element={<Map data={data}/>} />
            <Route path={'/training'} element={<Training />} />
            <Route path={'/login'} element={<Login />} />
            {data.map(item => (
               <Route key={item.index} path={`/map/${item.url.split("/")[item.url.split("/").length - 1]}`} element={<PCTSectionJ data={item} />} />
            ))}
            <Route path={'*'} element={<NotFound />}/>
         </Routes>
      </div>
   );
}