import React, { useState, useEffect } from "react";
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    props.loggedIn(false);
  }, [props.loggedIn]);

  useEffect(() => {
    fetch('/data/login-data.json')
      .then(response => response.json())
      .then(loginData => setLoginData(loginData))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!username || !password) {
      setErrorMessage("Incomplete login");
    } else {
      const user = loginData.find((user) => user.username === username && user.password === password);
      if (user) {
        setLoggedIn(true);
        props.loggedIn(true);
        setErrorMessage("");
       } else {
        setErrorMessage("Please provide valid credentials");
       }
    }
  };

  const handleLogout = () => {
   setLoggedIn(false);
   props.loggedIn(false);
   setUsername('');
   setPassword('');
 }

/* A log in that works includes username: (correctusername) and password: (correctPassword) */

  return (
      <div>
         <h1 className="title">Welcome to TrailBlazer!</h1>
            {loggedIn ?
               <div>
                  <h5>Welcome back, {username}! Please choose a page to visit:</h5>
                  <h5><Link to="/">Home</Link> <Link to="/map">Map</Link> <Link to="/training">Training</Link></h5>
                  <div className="text-center">
                     <button className="btn btn-success" onClick={handleLogout} >Log out</button>
                  </div>
               </div> :
               <div>
                  <h5>Join our hiking community by logging in!</h5>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                     <form id="login" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ display: "block", marginTop: "0.5rem" }}>
                           <label style={{ marginRight: "0.5rem" }}>Username: </label>
                           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>

                        <div style={{ display: "block", marginTop: "0.5rem" }}>
                           <label style={{ marginRight: "0.5rem" }}>Password: </label>
                           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-success" style={{ marginTop: "0.5rem" }}>Log In</button>
                        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                     </form>
                  </div>
               </div>
            }
         
         <Footer />
      </div>
   );
}