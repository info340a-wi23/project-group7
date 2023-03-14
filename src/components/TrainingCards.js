import React from 'react';
import {Link} from 'react-router-dom';

const cards = [
    {
        title: 'Training Programs',
        img: 'hiking.jpeg',
        link: 'beginner'
    },
    {
        title: 'Exercise Videos',
        img: 'training.jpeg',
        link: 'exercise'
    },
    {
        title: 'Equipment Guide',
        img: 'equipment.jpeg',
        link: 'equipment'
    }
];

export function TrainingCards() {
    let trainingCards = cards.map((card) => {
        return <TrainingCard card={card} key={card.title}/>;
    })

    return (
        <div>
            <div className="row">
                {trainingCards}
            </div>
        </div>
    );
}

function TrainingCard(props) {
    let card = props.card;

    return (
    <div className="col-4 flex-grow-1">
      <div className="card mb-3">
        <img className="card-img-top" src={'img/' + card.img} alt={card.title} />
        <div className="card-body">
            <h3 className="card-title">{card.title}</h3>
            <div className="col text-center">
                <Link className="btn btn-success" to={"/" + card.link}>Learn More</Link>
            </div>
        </div>
      </div>
    </div>
    )
}