import React from 'react';
import Nav from './Nav.js';
import { TrainingHeader } from './TrainingHeader.js';
import { TrainingCards } from './TrainingCards.js';
import { BeginnerPage } from './Beginner.js';
import Footer from './Footer.js';
import {Routes, Route} from 'react-router-dom'

export default function App(props) {

    return (
        <div>
            <Nav />
            <main>
                <TrainingHeader />
                <TrainingCards />
            </main>
            <Footer />
        </div>
    );
}