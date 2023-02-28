import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';

export default function Map() {
   return (
      <div>
         <Nav />
         <main>
            <h1 class="title">Trail Finder</h1>
            <div id="map"></div>
            <h2>Trails</h2>
            <div class="container">
               <div class="row">
                  <div class="col col-12">
                     <div class="card map-list">
                        <h5 class="card-title"><a href="pacific-crest-trail-section-j.html">Pacific Crest Trail - Section J</a></h5>
                        <h6 class="card-subtitle">Difficulty: Very Hard</h6>
                        <p>This route traverses the Alpine Lakes Wilderness, and the trail passes by a least a dozen lakes along the way, many of them swimmable in late-summer. But the lakes aren't the only attraction. Hikers here encounter meadows, old-growth trees, and stunning views of towering mountains.</p>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <script src='./MainMap.js'></script>
         <Footer />
      </div>
   );
}