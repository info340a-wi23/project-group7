import React from 'react';
import Footer from './Footer.js';

const cards = [
    {img: 'boots.jpeg', p: 'Hiking boots are crucial for comfort and stability on the trail.'}, {img: 'backpack.jpeg', p: 'A reliable backpack is crucial for carrying all of your gear and supplies.'}, 
    {img: 'bottle.jpeg', p: 'Staying hydrated is key on a hiking trip, so bring a water bottle!'}, {img: 'compass.jpeg', p: 'Dont rely on technology alone! Always bring a map and compass as backup.'},
    {img: 'hat.jpeg', p: 'Protect yourself from the sun with sunscreen and a hat.'}, {img: 'aid.jpeg', p: 'Be prepared for emergencies with a well-stocked first aid kit.'}, 
    {img: 'light.jpeg', p: 'Dont get caught in the dark! Always bring a flashlight or headlamp.'}, {img: 'snacks.jpeg', p: 'Keep your energy up with snacks that are easy to pack and eat on the trail.'},
]

export default function Equipment(props) {
    let equipmentCards = cards.map((card, index) => {
        return <EquipmentCard card={card} key={index} />
    })

    return (
        <div>
            <h1 className="title">Essential Hiking Equipment Guide</h1>
            <main>
                <h5>Here are some of the most <em>ESSENTIAL</em> items to bring on your hiking trip!</h5>
                <div className="d-flex">
                    <ul className=" mx-auto justify-content-center">
                        <li>Hiking boots</li>
                        <li>Backpack</li>
                        <li>Water bottle</li>
                        <li>Map and compass</li>
                        <li>Sunscreen and hat</li>
                        <li>First aid kit</li>
                        <li>Flashlight or headlamp</li>                    
                        <li>Snacks and meals</li>
                    </ul>
                </div>
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
        <div className="col-3 flex-grow-1">
            <div className="card mb-3">
                <img className="card-img-top" src={'img/' + card.img} alt={props.index} />
                <div className="card-body">
                    <p>{card.p}</p>
                </div>
            </div>
        </div>
    )
}