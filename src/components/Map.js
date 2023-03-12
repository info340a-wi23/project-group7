import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import MainMap from './MainMap.js';
import Footer from './Footer.js';

export default function Map(props) {
   const [maxLength, setMaxLength] = useState(100);
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
         .filter(hike => hike.length.split(" ")[0] != 0); // Filter for hikes with non-zero lengths
      const lengthFiltered = valid.filter(hike => hike.length.split(" ")[0] <= maxLength); // User's max length filter
      
      if (bounds !== null) {
         const boundsFiltered = lengthFiltered.filter(hike =>
            hike.coordinates.lat >= bounds._southWest.lat &&
            hike.coordinates.lat <= bounds._northEast.lat &&
            hike.coordinates.lon >= bounds._southWest.lng &&
            hike.coordinates.lon <= bounds._northEast.lng
         );
         return boundsFiltered;
      }

      const itemsWithId = lengthFiltered.map((item, index) => {
         return { ...item, id: index };
      })
      return itemsWithId;
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const maxLengthInput = document.getElementById('max-length').value;
      setMaxLength(parseInt(maxLengthInput));
   };

   const handleBoundsChanged = (newBounds) => {
      setBounds(newBounds);
      console.log(newBounds);
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
                  <option value="easy">Easy</option>
                  <option value="med">Medium</option>
                  <option value="hard">Hard</option>
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
                              <h5 className="card-title"><Link to='pacific-crest-trail-section-j'>{item.name}</Link></h5>
                              <h6 className="card-subtitle">Length: {item.length}</h6>
                              <p>Features: {item.features.map(feature => feature).join(' \u2022 ')}</p>
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