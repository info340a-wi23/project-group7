import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';

export default function Login(props) {
   return (
      <div>
         <Nav />
         <main>
            <div class="container">
               <div class="login-page">
                  <div class="card">
                     <h1>Login</h1>
                     <h6 id="choose" class="d-none">Choose a page to redirect to!</h6>
                     <h6 id="links" class="d-none"><a href="../project-draft/index.html">Home</a>  <a href="../project-draft/map.html">Map</a> <a href="../project-draft/training.html">Training</a></h6>
                     <form id="signUpForm" class="form" novalidate>
                        <div class="uname">
                           <label for="unameInput">Username:</label>
                           <input type="text" id="unameInput" name="uname" class="form-control" required />
                           <div id ="unameFeedback" class="invalid-feedback">Please enter a valid username</div>
                        </div>
                        <div class="password">
                           <label for="passwordInput">Password:</label>
                           <input type="password" id="passwordInput" name="password" class="form-control" required />
                           <div id="passwordFeedback" class="invalid-feedback">Please enter a valid password</div>
                        </div>

                        <button type="submit" class="btn btn-primary">Login</button> 
                     </form>
                  </div>
               </div>
            </div>
         </main>
         <script src='./LoginFormReader.js'></script>
         <Footer />
      </div>
   );
}