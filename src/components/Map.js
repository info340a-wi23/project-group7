import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainMap from './MainMap.js';
import Footer from './Footer.js';

export default function Map(props) {
   const [maxLength, setMaxLength] = useState(200);
   const [diff, setDiff] = useState("Any");
   const [name, setName] = useState("");
   const [data, setData] = useState(props.data);
   const [bounds, setBounds] = useState(null);
   const [searchClicked, setSearchClicked] = useState(false);

   useEffect(() => {
      setData(props.data);
   }, [props.data]);

   const filteredData = (hikes) => {  
      let lengthFiltered = hikes;
      
      if (maxLength) {
         const maxLengthValue = parseInt(maxLength);
         if (!isNaN(maxLengthValue)) {
            lengthFiltered = hikes.filter(hike => hike.length.split(" ")[0] <= maxLength); // User's max length filter
         }
      }

      let diffFiltered = lengthFiltered;
      
      if (diff !== null) {
         diffFiltered = lengthFiltered.filter(hike => hike.diffCat === diff); // User's difficulty filter
      }

      const nameFiltered = name ? diffFiltered.filter(hike => hike.name.toLowerCase().includes(name.toLowerCase())) : diffFiltered; // User's hike name filter

      if (bounds !== null) {
         const boundsFiltered = nameFiltered.filter(hike =>
            hike.coordinates.lat >= bounds._southWest.lat &&
            hike.coordinates.lat <= bounds._northEast.lat &&
            hike.coordinates.lon >= bounds._southWest.lng &&
            hike.coordinates.lon <= bounds._northEast.lng
         );
         return boundsFiltered;
      } else {
         return diffFiltered;
      }
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const maxLengthInput = document.getElementById('max-length').value;
      setMaxLength(parseInt(maxLengthInput));
      const diffInput = document.getElementById('diff').value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      if (diffInput === 'Any') {
         setDiff(null);
      } else {
         setDiff(diffInput);
      }
      const nameInput = document.getElementById('name').value;
      setName(nameInput);
      setSearchClicked(true);
   };

   const handleBoundsChanged = (newBounds) => {
      setBounds(newBounds);
   };

   return (
      <div>
         <main>
            <h1 className="title">Trail Finder</h1>
            <p style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0rem" }}>Please input search parameters. Any part of the form can be left blank.</p>
            <form className="map-filter" onSubmit={handleSubmit}>
               <div style={{ display: "inline-block", marginTop: "0.5rem" }}>
                  <label htmlFor="max-length">Max Length (mi):</label>
                  <input type="text" id="max-length" name="max-length" placeholder="Max length (mi)..." />
               </div>
               <div style={{ display: "inline-block", marginTop: "0.5rem" }}>
                  <label htmlFor="diff">Difficulty:</label>
                  <select type="diff" id="diff" name="diff">
                     <option value="any">Any</option>
                     <option value="very-easy">Very Easy</option>
                     <option value="easy">Easy</option>
                     <option value="medium">Medium</option>
                     <option value="hard">Hard</option>
                     <option value="very-hard">Very Hard</option>
                  </select>
               </div>
               <div style={{ display: "inline-block", marginTop: "0.5rem" }}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Name..." />
               </div>
               <div style={{ display: "inline-block", marginTop: "0.5rem" }}>
                  <input id="submit" type="submit" value="Search" />
               </div>
            </form>
            <MainMap center={[47.2326, -120.8472]} zoom={7} maxLength={maxLength} data={filteredData(data)} onBoundsChanged={handleBoundsChanged} />
            {searchClicked && (
               <div>
                  <h2>Trails</h2>
                  <div className="container">
                     {filteredData(data).map(item => {
                        return (
                           <div className="row trail-card" key={item.id}>
                              <div className="col col-12">
                                 <div className="card map-list">
                                    <h5 className="card-title"><Link to={`/map/${item.url.split("/")[item.url.split("/").length - 1]}`}>{item.name}</Link></h5>
                                    <h6 className="card-subtitle">Length: {item.length} {' \u2022 '} Difficulty: {item.diffCat}</h6>
                                    <p><strong>Elevation Gain:</strong> {item.elevation.Gain}</p>
                                    <p><strong>Features:</strong> {item.features.map(feature => feature).join(' \u2022 ')}</p>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
                  <p style={{ textAlign: "center" }}>Don't see a hike you're looking for? <Link to={'/'}>Let us know!</Link></p>
                  <p style={{ textAlign: "center" }}>Data retrieved from Nicholas Hassell's WTA-scraped <a href="https://data.world/nick-hassell/washington-state-hiking-trails">database</a>.</p>
               </div>
            )}
         </main>
         <Footer />
      </div>
   );
}