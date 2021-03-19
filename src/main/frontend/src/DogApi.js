import React, { useState, useEffect } from "react";

function DogApi() {
  let [dogImage, setDogImage] = useState(null);

  // Create our useEffect function
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/5")
      .then((response) => response.json())
      //Setting *dogImage* to the image url that we received from the response above
      .then((data) => setDogImage(data.message));
  }, []);

  return (
    <div className="App">
      {/* Returning an img element for each url, again with the value of our src set to the image url */}
      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))}
    </div>
  );
}

export default DogApi;
