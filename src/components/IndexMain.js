import React from 'react';
import IndexForm from './IndexForm';

export default function IndexMain() {
   return (
      <main>
         <h1 class="title">TrailBlazer</h1>
         <div class="container">
            <div class="home-page">
               <div class="slideshow">
               </div>
               <div class="card">
                  <h2>About Us</h2>
                  <p class="card-text">We are a bunch of Huskies who hike! We created this webpage to combat issues we have with current hiking apps. Our main goals are to create an app that has: </p>
                  <ul>
                     <li>A filterable map of local hikes</li>
                     <li>Hike-specific information and user-shared reports</li>
                     <li>Training tips for hikes based on difficulty</li>
                  </ul>
                  <p class="card-text">We hope it is helpful, and happy trails!</p>
               </div>
               <div class="card">
                  <h2>Contact Us</h2>
                  <p class="card-text">If you have any issues or questions, please reach out to us at <a href="mailto:sketchb@uw.edu">sketchb@uw.edu</a> or through this form:</p>
                  <IndexForm />
               </div>
            </div>
         </div>
      </main>
   )
}