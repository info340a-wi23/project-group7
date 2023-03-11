import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import MainMap from './MainMap.js';
import Footer from './Footer.js';

export default function Map(props) {
   const [maxLength, setMaxLength] = useState(100);

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
               <label for="max-length">Max Length (mi):</label>
               <input type="text" id="max-length" name="max-length" placeholder="Max length (mi)..." />
               <label for="diff">Difficulty:</label>
               <select type="diff" id="diff" name="diff">
                  <option value="easy">Easy</option>
                  <option value="med">Medium</option>
                  <option value="hard">Hard</option>
               </select>
               <input id="submit" type="submit" value="Submit"></input>
            </form>
            <MainMap center={[47.2326, -120.8472]} zoom={7} maxLength={maxLength} />
            <h2>Trails</h2>
            <div className="container">
               <div className="row">
                  <div className="col col-12">
                     <div className="card map-list">
                        <h5 className="card-title"><Link to='pacific-crest-trail-section-j'>Pacific Crest Trail - Section J</Link></h5>
                        <h6 className="card-subtitle">Difficulty: Very Hard</h6>
                        <p>This route traverses the Alpine Lakes Wilderness, and the trail passes by a least a dozen lakes along the way, many of them swimmable in late-summer. But the lakes aren't the only attraction. Hikers here encounter meadows, old-growth trees, and stunning views of towering mountains.</p>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}