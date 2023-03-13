import React from 'react';
import { Link } from 'react-router-dom';

export default function QAForum(props) {
   return (
      <div>
         <h2>Q&A Forum</h2>
         <div className="container qa-block">
            <div className="user-post row">
               <div className="col col-12 card">
                  <div className="row">
                     <div className="col col-6 col-lg-3">
                        <div className="row">
                           <div className="col col-3">
                              <img className="profile-pic" src="../img/blank-profile-picture.jpeg" alt="Blank profile" />
                           </div>
                           <div className="col col-9 post-info">
                              <h5 className="card-title"><Link to="/sketchb02">@sketchb02</Link></h5>
                              <h6 className="card-subtitle">May 26, 2022</h6>
                           </div>
                        </div>
                     </div>
                     <div className="col col-6 col-lg-9">
                        <h6 className="question-header">What's the trail quality usually like in June?</h6>
                        <p className="question-long">I'm planning a backpacking trip for the PCT then, but I've heard that snow sticks around on this trail longer than most and I don't have a lot of experience with that.</p>
                     </div>
                  </div>
               </div>
               <div className="col col-12 card">
                  <div className="row">
                     <div className="col col-6 col-lg-3">
                        <div className="row">
                           <div className="col col-3">
                              <img className="profile-pic" src="../img/blank-profile-picture.jpeg" alt="Blank profile" />
                           </div>
                           <div className="col col-9 post-info">
                              <h5 className="card-title"><Link to="/seang">@seang</Link></h5>
                              <h6 className="card-subtitle">May 29, 2022</h6>
                           </div>
                        </div>
                     </div>
                     <div className="col col-6 col-lg-9">
                        <p>I hiked this stretch last June, and there were sections where the snow was a few inches deep. I'd recommend getting a pair of snow spikes if you don't have some already.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container qa-block">
            <div className="user-post row">
               <div className="col col-12 card">
                  <div className="row">
                     <div className="col col-6 col-lg-3">
                        <div className="row">
                           <div className="col col-3">
                              <img className="profile-pic" src="../img/blank-profile-picture.jpeg" alt="Blank profile" />
                           </div>
                           <div className="col col-9 post-info">
                              <h5 className="card-title"><Link to="/darthur42">@darthur42</Link></h5>
                              <h6 className="card-subtitle">March 30, 2022</h6>
                           </div>
                        </div>
                     </div>
                     <div className="col col-6 col-lg-9">
                        <h6 className="question-header">How difficult are the first and last two miles of the trail?</h6>
                        <p className="question-long">I'm hoping to take my kids on a day hike near one of the passes, but they don't have a lot of experience hiking more difficult trails. Would the first/last couple miles of this trail be a good difficulty level for kids?</p>
                     </div>
                  </div>
               </div>
               <div className="col col-12 card">
                  <div className="row">
                     <div className="col col-6 col-lg-3">
                        <div className="row">
                           <div className="col col-3">
                              <img className="profile-pic" src="../img/blank-profile-picture.jpeg" alt="Blank profile" />
                           </div>
                           <div className="col col-9 post-info">
                              <h5 className="card-title"><Link to="/seang">@seang</Link></h5>
                              <h6 className="card-subtitle">April 04, 2022</h6>
                           </div>
                        </div>
                     </div>
                     <div className="col col-6 col-lg-9">
                        <p>From what I remember from my hike last summer, the first few miles of each end are pretty flat; you shouldn't have any issues taking your kids up there. Just keep an eye out for snow!</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}