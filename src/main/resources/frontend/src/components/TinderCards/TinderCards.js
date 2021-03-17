import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../firebase";

function TinderCards() {
  // const [direction, setLastDirection] = useState("");
  const [pet, setPet] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("pets")
      .onSnapshot((snapshot) => setPet(snapshot.docs.map((doc) => doc.data())));

    return () => {
      unsubscribe();
    };
  }, []);

  // const swiped = (direction, nameToDelete) => {
  //   console.log("removing: " + nameToDelete);
  //   setLastDirection(direction);
  // };

  // const outOfFrame = (name) => {
  //   console.log(name + " left the screen!");
  // };

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {pet.map((dog) => (
          <TinderCard
            className="swipe"
            key={dog.name}
            preventSwipe={["up", "down"]}
            // onSwipe={(dir) => swiped(dir, dog.name)}
            // onCardLeftScreen={() => outOfFrame(dog.name)}
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
