import React from 'react';

export function TrainingCards(props) {

    // Create the HTML elements using JavaScript
    const container = document.createElement("div");
    container.className = "container";

    const row = document.createElement("div");
    row.className = "row mx-auto";

    const card1 = createCard("img/hiking.jpeg", "Training Programs", "beginner.html");
    const card2 = createCard("img/training.jpeg", "Exercise Videos", "#");
    const card3 = createCard("img/equipment.jpeg", "Equipment Guide", "#");

    // Helper function to create a card element
    function createCard(imgSrc, title, linkHref) {
        const col = document.createElement("div");
        col.className = "col-md-6 col-xl-3 d-flex mx-auto";

        const card = document.createElement("div");
        card.className = "card mb-4";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardRow = document.createElement("div");
        cardRow.className = "row";

        const imgCol = document.createElement("div");
        imgCol.className = "col-sm-auto col-xl-12";

        const img = document.createElement("img");
        img.className = "pb-3 mx-auto d-block";
        img.src = imgSrc;
        img.alt = title;

        const titleCol = document.createElement("div");
        titleCol.className = "col-sm";

        const cardTitle = document.createElement("h2");
        cardTitle.className = "card-title";
        cardTitle.textContent = title;

        const linkCol = document.createElement("div");
        linkCol.className = "col text-center";

        const link = document.createElement("a");
        link.className = "btn btn-dark";
        link.href = linkHref;
        link.textContent = "Learn More";

        // Add the HTML elements to the document tree
        imgCol.appendChild(img);
        titleCol.appendChild(cardTitle);
        linkCol.appendChild(link);

        cardRow.appendChild(imgCol);
        cardRow.appendChild(titleCol);
        cardRow.appendChild(linkCol);

        cardBody.appendChild(cardRow);

        card.appendChild(cardBody);

        col.appendChild(card);

        return col;
    }

    // Add the cards to the row element
    row.appendChild(card1);
    row.appendChild(card2);
    row.appendChild(card3);

    // Add the row element to the container element
    container.appendChild(row);

    // Add the container element to the document body
    document.body.appendChild(container);

}