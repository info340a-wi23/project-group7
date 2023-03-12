import React, { useState } from "react";
import Nav from './Nav.js';
import Footer from './Footer.js';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!username || !password) {
      setErrorMessage("Incomplete login");
    } else if (username !== "correctUsername" || password !== "correctPassword") {
      setErrorMessage("Please provide a valid password");
    } else {
      console.log("Login successful");
    }
  };

  return (
      <div>
         <Nav />
         <main>
            <form onSubmit={handleSubmit}>
               <label>
               Username:
               <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
               </label>
               <br />
               <label>
               Password:
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               </label>
               <br />
               <button type="submit">Submit</button>
               {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
            </form>
         </main>
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
      </div>*/