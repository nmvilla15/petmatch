import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [pet, setPet] = useState([
    //hardcoded images will change once database is complete
    {
      name: "fido",
      url:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.673xw:1.00xh;0.167xw,0&resize=640:*",
    },
    {
      name: "buddy",
      url:
        "https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg",
    },
  ]);
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {pet.map((dog) => (
          <TinderCard
            className="swipe"
            key={dog.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${dog.url})` }}
              className="card"
            >
              <h3>{dog.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
