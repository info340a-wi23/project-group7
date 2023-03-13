import React, { useState } from "react";
import Nav from './Nav.js';
import Footer from './Footer.js';
import {Link} from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!username || !password) {
      setErrorMessage("Incomplete login");
    } else if (username === "correctUsername" || password === "correctPassword") {
      setLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Please provide a valid password");
    }
  };

  const handleLogout = () => {
   setLoggedIn(false);
   setUsername('');
   setPassword('');
 }

  return (
      <div>
         <Nav />
         <h1 className="title">Welcome to Trailblazer!</h1>
            {loggedIn ?
               <div>
                  <h5>Welcome back! Please choose a page to visit:</h5>
                  <h5><Link to="/">Home</Link> <Link to="/map">Map</Link> <Link to="/training">Training</Link></h5>
                  <button className="btn btn-success" onClick={handleLogout}>Log out</button>
               </div> :
               <form id="map-filter" onSubmit={handleSubmit}>
                  <div style={{ display: "inline-block", marginTop: "0.5rem" }}>
                     <label>Username: </label>
                     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  </div>

                  <div style={{ display: "inline-block", marginTop: "0.5rem" }}>
                     <label>Password: </label>
                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>

                  <button type="submit" className="btn btn-success">Log In</button>
                  {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
               </form>
            }
         
         <Footer />
      </div>
   );
}

/*<div>
         <Nav />
         <main>
            <div className="container">
               <div className="login-page">
                  <div className="card">
                     <h1>Login</h1>
                     <h6 id="choose" className="d-none">Choose a page to redirect to!</h6>
                     <h6 id="links" className="d-none"><a href="../project-draft/index.html">Home</a>  <a href="../project-draft/map.html">Map</a> <a href="../project-draft/training.html">Training</a></h6>
                     <form id="signUpForm" className="form" novalidate>
                        <div className="uname">
                           <label for="unameInput">Username:</label>
                           <input type="text" id="unameInput" name="uname" className="form-control" required />
                           <div id ="unameFeedback" className="invalid-feedback">Please enter a valid username</div>
                        </div>
                        <div className="password">
                           <label for="passwordInput">Password:</label>
                           <input type="password" id="passwordInput" name="password" className="form-control" required />
                           <div id="passwordFeedback" className="invalid-feedback">Please enter a valid password</div>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button> 
                     </form>
                  </div>
               </div>
            </div>
         </main>
         <script src='./LoginFormReader.js'></script>
         <Footer />
      </div>

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
      form.classList.add('d-none');
      document.querySelector('h1').textContent = "Welcome to Trailblazer";
      document.querySelector('#choose').classList.remove('d-none');
      document.querySelector('#links').classList.remove('d-none');
    } else {
      form.classList.add('was-validated');
      document.querySelector('button').disabled = true;
    }
});

const password = document.querySelector('#passwordInput');
const uname = document.querySelector('#unameInput');

password.addEventListener('input', function() {
    if (password.value === uname.value) {
        password.setCustomValidity('');
    } else {
        password.setCustomValidity('You must enter a valid password.');
        document.querySelector('#passwordFeedback').textContent = 'You must enter a valid password.';
    }
});

const allInputs = document.querySelectorAll('input');

allInputs.forEach(function(element) {
  element.addEventListener('input', function() {
    let checked = form.classList.contains('was-validated');
    if (checked) {
      if (form.checkValidity()) {
        document.querySelector('button').disabled = false;
      } else {
        document.querySelector('button').disabled = true;
      }
    }
  })
}); */