import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import MainMap from './MainMap.js';
import Footer from './Footer.js';

export default function Map(props) {
   const [maxLength, setMaxLength] = useState(100);
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch('/data/wta-parks-data.json');
         const jsonData = await response.json();
         setData(jsonData);
       };
      fetchData();
   }, []);

   const filteredData = (hikes) => {
      const valid = hikes.filter(hike => {return hike.coordinates.lat;})
         .filter(hike => {return hike.coordinates.lon;})
         .filter(hike => hike.length.split(" ")[0] != 0);
      const lengthFiltered = valid.filter(hike => hike.length.split(" ")[0] <= maxLength);
      return lengthFiltered;
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const maxLengthInput = document.getElementById('max-length').value;
      setMaxLength(parseInt(maxLengthInput));
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
               <input id="submit" type="submit" value="Submit"></input>
            </form>
            <MainMap center={[47.2326, -120.8472]} zoom={7} maxLength={maxLength} data={filteredData(data)}/>
            <h2>Trails</h2>
            <div className="container">
               {filteredData(data).map(item => {
                  return (
                     <div className="row trail-card">
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