import React from 'react';
import { TrainingHeader } from './TrainingHeader.js';
import { TrainingCards } from './TrainingCards.js';

export default function App(props) {

    return (
        <div>
            <TrainingHeader />
            <TrainingCards />
        </div>
    );
}