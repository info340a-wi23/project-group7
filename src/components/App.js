import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import Map from './Map.js';
import Training from './Training.js';
import Login from './Login.js';
import Hike from './Hike.js';
import NotFound from './NotFound.js';
import Nav from './Nav.js';
import BeginnerPage from './Beginner.js';
import ExerciseVids from './ExerciseVids.js';
import Equipment from './Equipment.js';

function getDiffCat(diff) {
   if (diff <= 0.005) {
     return "Very Easy";
   } else if (diff <= 0.02) {
     return "Easy";
   } else if (diff <= 0.035) {
     return "Medium";
   } else if (diff <= 0.06) {
     return "Hard";
   } else {
     return "Very Hard";
   }
}

export default function App() {
   const [data, setData] = useState([]);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      fetch('/data/wta-parks-data.json')
         .then(response => response.json())
         .then(jsonData => setData(jsonData))
         .catch(error => console.error(error));
    }, []);

   const valid = data
         .filter(hike => hike.coordinates.lat && hike.coordinates.lon) // Filter for hikes with valid coordinates
         .filter(hike => hike.length.split(" ")[0] !== 0) // Filter for hikes with non-zero lengths
         .filter(hike => hike.elevation.Gain);
         const itemsWithId = valid.map((item, index) => {
         return { ...item, id: index };
      });

   const itemsWithDifficulties = itemsWithId.map((item) => {
      let diff = item.elevation.Gain.slice(0, -4) / (item.length.split(" ")[0] * 5280);
      diff = (diff + item.length.split(" ")[0] / 250) / 2;
      const diffCat = getDiffCat(diff);
      return { ...item, diff, diffCat };
   });

   const hikeRoutes = itemsWithDifficulties.map(item => (
      <Route key={item.index} path={`/map/${item.url.split("/")[item.url.split("/").length - 1]}`} element={<Hike data={item} loggedIn={isLoggedIn} />} />
   ))

   return (
      <div>
         <Nav isLoggedIn={isLoggedIn}/>
         <Routes>
            <Route path={'/'} element={<Homepage />} />
            <Route path={'/map'} element={<Map data={itemsWithDifficulties}/>} />
            <Route path={'/training'} element={<Training />} />
            <Route path={'/beginner'} element={<BeginnerPage />} />
            <Route path={'/exercise'} element={<ExerciseVids />} />
            <Route path={'/equipment'} element={<Equipment />} />
            <Route path={'/login'} element={<Login loggedIn={setIsLoggedIn}/>} />
            {hikeRoutes}
            <Route path={'*'} element={<NotFound />}/>
         </Routes>
      </div>
   );
}