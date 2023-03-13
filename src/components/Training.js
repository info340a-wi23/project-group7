import React from 'react';
import Nav from './Nav.js';
import { TrainingHeader } from './TrainingHeader.js';
import { TrainingCards } from './TrainingCards.js';
import Footer from './Footer.js';

export default function Training(props) {

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