import React from 'react';
import Footer from './Footer.js';

const cards = [
    {img: '', p: 'Hiking boots are crucial for comfort and stability on the trail.'}, {img: '', p: 'A reliable backpack is crucial for carrying all of your gear and supplies.'}, 
    {img: '', p: 'Staying hydrated is key on a hiking trip, so bring a water bottle!'}, {img: '', p: 'Dont rely on technology alone! Always bring a map and compass as backup.'},
    {img: '', p: 'Protect yourself from the sun with sunscreen and a hat.'}, {img: '', p: 'Be prepared for emergencies with a well-stocked first aid kit.'}, 
    {img: '', p: 'Dont get caught in the dark! Always bring a flashlight or headlamp.'}, {img: '', p: 'Keep your energy up with snacks and meals that are easy to pack and eat on the trail.'},
]

export default function Equipment(props) {
    let equipmentCards = cards.map((card, index) => {
        return <EquipmentCard card={card} key={index} />
    })

    return (
        <div>
            <h1 className="title">Essential Hiking Equipment Guide</h1>
            <main>
                <h5>Here are some of the most <i>ESSENTIAL</i> items to bring on your hiking trip!</h5>
                <ul>
                    <li>Hiking boots</li>
                    <li>Backpack</li>
                    <li>Water bottle</li>
                    <li>Map and compass</li>
                    <li>Sunscreen and hat</li>
                    <li>First aid kit</li>
                    <li>Flashlight or headlamp</li>                    
                    <li>Snacks and meals</li>
                </ul>
                <div className="row">
                    {equipmentCards}
                </div>
            </main>  
            <Footer />
        </div>
    );
}

function EquipmentCard(props) {
    let card = props.card;

    return (
        <div className="col-sm-6">
            <p>{card.p}</p>
        </div>
    )
}