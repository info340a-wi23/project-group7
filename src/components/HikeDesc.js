import React from 'react';

export default function HikeDesc() {
   return (
      <div>
         <h1 class="title">Pacific Crest Trail - Section J</h1>
         <p class="subtitle">Snoqualmie Pass to Stevens Pass</p>
   
         <div class="container">
            <div class="row">
               <div class="col col-12 col-lg-6">
                  <div class="highlight">
                     <div class="card">
                        <img class="card-img" src="img/pct-section-j.jpeg" alt="Trap Lake" />
                        <div class="card-img-overlay">
                           <p class="card-text">Trap Lake - Photo by <a href="https://www.rajahamid.com/journal/2022/9/29/solo-hiking-section-j-of-the-pct-in-4-days">Raja Hamid</a></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col col-12 col-lg-6">
                  <div class="trail-data row justify-content-center">
                     <div class="col col-6 col-lg-3 card">
                        <h5 class="card-title">Length</h5>
                        <p class="card-text">74.7 mi, one-way</p>
                     </div>
                     <div class="col col-6 col-lg-3 card">
                        <h5 class="card-title">Elevation Gain</h5>
                        <p class="card-text">16,000 ft</p>
                     </div>
                     <div class="col col-6 col-lg-3 card">
                        <h5 class="card-title">Highest Point</h5>
                        <p class="card-text">5,988 ft</p>
                     </div>
                     <div class="col col-6 col-lg-3 card">
                        <h5 class="card-title">Difficulty</h5>
                        <p class="card-text"><a href="training1.html">Very Hard</a></p>
                     </div>
                  </div>
                  <div class="col col-12 hike-description">
                     <h5>Hike Description (from <a href="https://www.wta.org/go-hiking/hikes/pacific-crest-trail-section-j-snoqualmie-pass-to-stevens-pass-east#hike-full-description">WTA</a>)</h5>
                     <p>This route traverses the Alpine Lakes Wilderness, and the trail passes by a least a dozen lakes along the way, many of them swimmable in late-summer. But the lakes aren't the only attraction. Hikers here encounter meadows, old-growth trees, and stunning views of towering mountains.</p>
                     <p>This trail is not for the beginning backpacker. There is considerable elevation gain and loss - about 16,000 feet! Some places are impassable until well into August when the snow melts out. And the distance requires hikers to carry six or seven days of food and arrange for a car shuttle or pick-up at Stevens Pass.</p>
                     <p>Beginning from the Snoqualmie Pass trailhead, hikers plunge into the stunning high country, starting off Day 1 out of this trailhead with a trek across the Kendall Katwalk. As you head further north, you may find some relative solitude, but this section is popular and accessible from both ends, so plan your outing accordingly; it may be hard to find a suitable place to camp, but please abide by Leave No Trace principles, and personify good trail etiquette.</p>
                     <p>Check out our <a href="training1.html">training page</a> to prepare for this trail!</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}