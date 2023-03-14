import React from 'react';
import { Link } from 'react-router-dom';

/*
TO DO:
- Make hike description and photo either a database entry or a user input (keep the last two paragraph tags)
*/

export default function HikeDesc(props) {
   return (
      <div>
         <h1 className="title">{props.data.name.split("-")[0]}</h1>
         <h2 className="subtitle">{props.data.name.split("-").slice(1).join('-').trim()}</h2>
   
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
                        <p className="card-text"><Link to="/training">{props.data.diffCat}</Link></p>
                     </div>
                  </div>
                  <div className="col col-12 hike-description">
                     <h2>Hike Description</h2>
                     <p>Hike details will go here.</p>
                     <p>Check out our <Link to="/training">training page</Link> to prepare for this trail!</p>
                     <p>Pass required: {props.data.requiredPass}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}