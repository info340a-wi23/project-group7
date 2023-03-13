import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import MainMap from './MainMap.js';
import Footer from './Footer.js';

function getDiffCat(diff) {
   if (diff <= 0.005) {
     return "Very Easy";
   } else if (diff <= 0.02) {
     return "Easy";
   } else if (diff <= 0.035) {
     return "Medium";
   } else if (diff <= 0.05) {
     return "Hard";
   } else {
     return "Very Hard";
   }
 }

export default function Map(props) {
   const [maxLength, setMaxLength] = useState(200);
   const [diff, setDiff] = useState("Very Easy");
   const [data, setData] = useState([]);
   const [bounds, setBounds] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch('/data/wta-parks-data.json');
         const jsonData = await response.json();
         setData(jsonData);
       };
      fetchData();
   }, []);

   const filteredData = (hikes) => {
      const valid = hikes
         .filter(hike => hike.coordinates.lat && hike.coordinates.lon) // Filter for hikes with valid coordinates
         .filter(hike => hike.length.split(" ")[0] != 0) // Filter for hikes with non-zero lengths
         .filter(hike => hike.elevation.Gain);
         const itemsWithId = valid.map((item, index) => {
         return { ...item, id: index };
      });
      const itemsWithDifficulties = itemsWithId.map((item) => {
         const diff = item.elevation.Gain.slice(0, -4) / (item.length.split(" ")[0] * 5280);
         const diffCat = getDiffCat(diff);
         return { ...item, diff, diffCat };
      });
      const lengthFiltered = itemsWithDifficulties.filter(hike => hike.length.split(" ")[0] <= maxLength); // User's max length filter
      const diffFiltered = lengthFiltered.filter(hike => hike.diffCat === diff); // User's difficulty filter

      if (bounds !== null) {
         const boundsFiltered = diffFiltered.filter(hike =>
            hike.coordinates.lat >= bounds._southWest.lat &&
            hike.coordinates.lat <= bounds._northEast.lat &&
            hike.coordinates.lon >= bounds._southWest.lng &&
            hike.coordinates.lon <= bounds._northEast.lng
         );
         return boundsFiltered;
      } else {
         return lengthFiltered;
      }
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const maxLengthInput = document.getElementById('max-length').value;
      setMaxLength(parseInt(maxLengthInput));
      const diffInput = document.getElementById('diff').value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setDiff(diffInput);
      console.log(diffInput);
   };

   const handleBoundsChanged = (newBounds) => {
      setBounds(newBounds);
   };

   return (
      <div>
         <Nav />
         <main>
            <h1 className="title">Trail Finder</h1>
            <form id="map-filter" onSubmit={handleSubmit}>
               <label htmlFor="max-length">Max Length (mi):</label>
               <input type="text" id="max-length" name="max-length" placeholder="Max length (mi)..." />
               <label htmlFor="diff">Difficulty:</label>
               <select type="diff" id="diff" name="diff">
                  <option value="very-easy">Very Easy</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="very-hard">Very Hard</option>
               </select>
               <input id="submit" type="submit" value="Search"></input>
            </form>
            <MainMap center={[47.2326, -120.8472]} zoom={7} maxLength={maxLength} data={filteredData(data)} onBoundsChanged={handleBoundsChanged} />
            <h2>Trails</h2>
            <div className="container">
               {filteredData(data).map(item => {
                  return (
                     <div className="row trail-card" key={item.id}>
                        <div className="col col-12">
                           <div className="card map-list">
                              <h5 className="card-title"><Link to={item.url.split("/")[item.url.split("/").length - 1]}>{item.name}</Link></h5>
                              <h6 className="card-subtitle">Length: {item.length} {' \u2022 '} Difficulty: {item.diffCat}</h6>
                              <p><strong>Elevation Gain:</strong> {item.elevation.Gain}</p>
                              <p><strong>Features:</strong> {item.features.map(feature => feature).join(' \u2022 ')}</p>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </main>
         <Footer />
      </div>
   );
}