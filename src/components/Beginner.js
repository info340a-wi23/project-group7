import React from 'react';
import Footer from './Footer.js';


export default function BeginnerPage(props) {

    return (
        <div>
            <h1 class="title">TrailBlazer 8 Week Beginner Training Program</h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-lg-6">
                        <div className="highlight">
                            <div className="card">
                                <img className="card-img img-fluid" src="img/train.jpeg" alt="Training"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <div className="trail-data row justify-content-center">
                            <div className="col col-6 col-lg-3 card">
                                <h5 className="card-title">Level</h5>
                                <p className="card-text">Beginner</p>
                            </div>
                            <div className="col col-6 col-lg-3 card">
                                <h5 className="card-title">Duration</h5>
                                <p className="card-text">8 weeks</p>
                            </div>
                            <div className="col col-6 col-lg-3 card">
                                <h5 className="card-title">Goal</h5>
                                <p className="card-text">Building strength and conditioning</p>
                            </div>
                        </div>
                        <div className="col col-12">
                            <h5>Weekly Training Plan For Hikers</h5>
                            <p>If you are just starting out below is a great weekly training plan for hiking beginners. It consists of endurance, strength, and high-intensity workouts that will help you prepare for any trails.</p>
                            <p>From week to week, you will build on the progress you have made in the previous weeks.</p>
                            <ul> 
                                <li><b>Weeks 1-3: </b>Strength-training 3 days per week, 1 hour/session.</li>
                                <li><b>Weeks 4-6: </b>Keep doing the Strength Training, and add one additional endurance workout every week for 45 minutes at moderate intensity (like jogging or hiking).</li>
                                <li><b>Weeks 7-8: </b>Continue Strength Training, increase the length of your weekly endurance workouts to 1.5 to 2 hours, and add 1 day of high-intensity exercise with high output but less weight (like speed hiking).</li>
                            </ul>
                            <p>Begin and end each workout with a <b>10 minute stretching routine.</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}