import React from 'react';
import { Link } from 'react-router-dom';

/*
TO DO:
- Make difficulty level reliant on dataset
- Make hike description either a database entry or a user input (keep last paragraph!)
*/

export default function HikeDesc(props) {
   return (
      <div>
         <h1 className="title">{props.data.name.split("-")[0]}</h1>
         <p className="subtitle">{props.data.name.split("-").slice(1).join('-').trim()}</p>
   
         <div className="container">
            <div className="row">
               <div className="col col-12 col-lg-6">
                  <div className="highlight">
                     <div className="card">
                        <img className="card-img" src="../img/pct-section-j.jpeg" alt="Trap Lake" />
                        <div className="card-img-overlay">
                           <p className="card-text">Trap Lake - Photo by <a href="https://www.rajahamid.com/journal/2022/9/29/solo-hiking-section-j-of-the-pct-in-4-days">Raja Hamid</a></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col col-12 col-lg-6">
                  <div className="trail-data row justify-content-center">
                     <div className="col col-6 col-lg-3 card">
                        <h5 className="card-title">Length</h5>
                        <p className="card-text">{props.data.length}</p>
                     </div>
                     <div className="col col-6 col-lg-3 card">
                        <h5 className="card-title">Elevation Gain</h5>
                        <p className="card-text">{props.data.elevation.Gain}</p>
                     </div>
                     <div className="col col-6 col-lg-3 card">
                        <h5 className="card-title">Highest Point</h5>
                        <p className="card-text">{props.data.elevation["Highest Point"]}</p>
                     </div>
                     <div className="col col-6 col-lg-3 card">
                        <h5 className="card-title">Difficulty</h5>
                        <p className="card-text"><Link to="training">N/A</Link></p>
                     </div>
                  </div>
                  <div className="col col-12 hike-description">
                     <h5>Hike Description (from <a href="https://www.wta.org/go-hiking/hikes/pacific-crest-trail-section-j-snoqualmie-pass-to-stevens-pass-east#hike-full-description">WTA</a>)</h5>
                     <p>This route traverses the Alpine Lakes Wilderness, and the trail passes by a least a dozen lakes along the way, many of them swimmable in late-summer. But the lakes aren't the only attraction. Hikers here encounter meadows, old-growth trees, and stunning views of towering mountains.</p>
                     <p>This trail is not for the beginning backpacker. There is considerable elevation gain and loss - about 16,000 feet! Some places are impassable until well into August when the snow melts out. And the distance requires hikers to carry six or seven days of food and arrange for a car shuttle or pick-up at Stevens Pass.</p>
                     <p>Beginning from the Snoqualmie Pass trailhead, hikers plunge into the stunning high country, starting off Day 1 out of this trailhead with a trek across the Kendall Katwalk. As you head further north, you may find some relative solitude, but this section is popular and accessible from both ends, so plan your outing accordingly; it may be hard to find a suitable place to camp, but please abide by Leave No Trace principles, and personify good trail etiquette.</p>
                     <p>Check out our <Link to="training">training page</Link> to prepare for this trail!</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}