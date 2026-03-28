import React from "react";

const PlanetCard = ({ name, distance, image }) => {
  return (
    <figure className="planet-card">
      <img src={image} alt={name} />
      <figcaption>
        <h4>{name}</h4>
        <p>{distance} million km</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;