import React from 'react';

export default function UserReports(props) {
   return (
      <div>
         <h2>User Reports</h2>
         <div className="container">
            <div className="user-post row">
               <div className="col col-12 card">
                  <div className="row">
                     <div className="col col-6 col-lg-3">
                        <div className="row">
                           <div className="col col-3">
                              <img className="profile-pic" src="../img/blank-profile-picture.jpeg" alt="Blank profile picture" />
                           </div>
                           <div className="col col-9 post-info">
                              <h5 className="card-title"><a href="sketchb02.html">@sketchb02</a></h5>
                              <h6 className="card-subtitle">June 26, 2022</h6>
                           </div>
                        </div>
                        <img className="img-gallery" src="../img/sketchb02-pct-section-j-post.jpeg" alt="sketchb02's photo from PCT Section J" />
                     </div>
                     <div className="col col-6 col-lg-9">
                        <p>The following text is from a WTA post by Adrian H.</p>
                        <p>My wife and I and two friends just completed the PCT Section J in 6-days, 5-nights going south to north from Snoqualmie to Steven's Pass.  The weather was spectacular, the bugs mild, the night skies inspiring, the lake swims refreshing, and the scenery world className.  We hiked 10 to 14 miles per day averaging 12 miles per day and camped at Joe Lake, Lemah Ford, the Waptus River, the Cle Elum River, and Trap Lake (lots of ripe blueberries).  Bugs were not an issue at any of these campsites and along most of the trail.  We did encounter a few mosquitoes at Deception Lake and had reports from other backpackers that the bugs were still ferocious there so it might be wise to skip that campsite.</p>
                        <p>We encountered a large number of PCT thru hikers while on the trail.  If you're not in a hurry, we recommend getting to your target campsite between 2pm to 4pm to increase your chances of getting a good spot.  Thru hikers would generally arrive looking for sites after 5pm.  You can also target camp locations just off the main PCT trail (0.1 to 0.3 miles) including Spectacle Lake, Pete's Lake, Glacier Lake or Trap Lake which are less popular with thru hikers.  You get the added benefit of cooling off with afternoon swims in the lake or dips in the river.</p>
                        <p>If you do end up at Spectacle Lake, be warned that the 'Old Spectacle Lake Trail' located on the northeast side of the lake is very difficult to follow back to the main PCT.  We had to bushwhack through thick undergrowth and do some rock scrambling to find the trail down which ended up taking us a solid hour and a half.  Your best bet is to return to the PCT via the main connector trail located on the southeast side of the lake.  If you do attempt the Old Trail, make sure you look for cairns once you emerge on the cliff tops located a few hundred yards from the PCT.  The cairns will lead you down to a steep, rocky trail that navigates you below the sheer cliffs you're standing on and back down to the PCT.</p>
                        </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}