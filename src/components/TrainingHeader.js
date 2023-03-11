import React from 'react';

export function TrainingHeader(props) {

    return (
        <div>
            <div className="intro">
                <h1 className="title">TrailBlazer Training</h1>
                <p>Welcome to the TrailBlazer Training Vault! Trailblazer Training helps you get stronger and power up trails mile after mile by providing free programs and other resources that you can reference on the go.</p>
            </div>
            <div className="overview">
                <h3>Here's a general overview of how TrailBlazer Training can help you conquer your first hike:</h3>
            </div>
            <ul> 
                <li><b>Training Programs: </b>We provide 6-12 week training programs that will challenge you before your first long hike.</li>
                <li><b>Exercise Videos: </b>Condition your body safely and on your own pace so that you will be ready for any kind of trail conditions.</li>
                <li><b>Equipment: </b>Find what you will need to prepare and wear on your first hike with our ranging equipment list.</li>
            </ul>
        </div>
    );
}