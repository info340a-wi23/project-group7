import React from 'react';
import Footer from './Footer.js';
import {Link} from 'react-router-dom';

export default function ExerciseVids(props) {

    return (
        <div>
            <main>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <img className="img-fluid rounded" src="img/exercise_main.jpeg" alt="Exercising"></img>
                    </div>
                    <h1>Try These Training Exercise Variations!</h1>
                    <h4><i>Hiking isn’t just walking in the woods. It requires strength and balance. Here’s how to get ready for trekking, from easy day hikes to the longest thru-hikes in the world.</i></h4>
                    <h5>Keep the following in mind as you train:</h5>
                    <ul>
                        <li>If something hurts, modify the exercise or skip it; and take extra rest days if you feel the need</li>
                        <li>Move at your own pace, going slowly at first. Increase the repetitions or add more resistance or weight as your training progresses.</li>
                        <li><b>Warm up </b>before your workout by doing a brisk 5- to 10-minute walk</li>
                    </ul>
                    <div className="text-center">
                        <h5>During your workout, make sure to do the following:</h5>
                    </div>
                    <ul>
                        <li>Inhale during initial exertion, then exhale as you return to the starting position</li>
                        <li>Rest for 30 to 45 seconds at the end of each exercise</li>
                    </ul>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <img className="img-fluid rounded" src="img/jumpsqt.jpeg" alt="jump" />
                            <h4>Jump Squats</h4>
                            <p>Squats find their way into many exercise plans because they provide an excellent all-around workout for all of the muscles in the lower body and legs—your body’s hiking engine. Adding a jump helps further develop power in the lower legs.</p>
                        </div>
                        <div className="col-md-7">
                            <ol>
                                <li>Start with your feet shoulder-width apart and then squat down until your thighs are at least parallel with the ground.</li>
                                <li>As you come up from the squat, push through heels and explode up and jump a few inches off the ground.</li>
                                <li>Land softly and quietly, and immediately go into another squat.</li>
                                <li><b>Do 15-20 times.</b></li>
                            </ol>
                        </div>
                        <div className="col-md-7 text-center">
                            <Link className="btn btn-success" to={"*"}>Watch example</Link>
                        </div> 
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <img className="img-fluid rounded" src="img/stepup.jpeg" alt="jump" />
                            <h4>Step Ups</h4>
                            <p>Hiking with a pack on involves a seemingly endless amount of stepping up and over things. This exercise builds strength and endurance in your glutes and quad muscles so you can handle whatever obstacles you’ll encounter along the trail.</p>
                            <p><b>Props: A stable surface, about 8 inches off the ground.</b></p>
                        </div>
                        <div className="col-md-7">
                            <ol>
                                <li>Start with your left foot on the ground and your right foot on top of the step; your right knee will be bent.</li>
                                <li>Step up until you are standing with your right leg nearly straight and you are balanced on top of the stop; your left leg should be bent slightly and your left foot poised an inch or so above the step.</li>
                                <li>Pause in a balanced position, then step down, returning your left leg and right foot to the starting position.</li>
                                <li><b>Do this 15 times; then repeat the exercise 15 times on the other side.</b></li>
                            </ol>
                        </div>
                        <div className="col-md-7 text-center">
                            <Link className="btn btn-success" to={"*"}>Watch example</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}