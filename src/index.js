import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB70iXwUQdMqv5FBbyJo5bu_JiWlEFMBus",
  authDomain: "trailblazer-3f311.firebaseapp.com",
  projectId: "trailblazer-3f311",
  storageBucket: "trailblazer-3f311.appspot.com",
  messagingSenderId: "224373345883",
  appId: "1:224373345883:web:df536688eab518836eb97e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);