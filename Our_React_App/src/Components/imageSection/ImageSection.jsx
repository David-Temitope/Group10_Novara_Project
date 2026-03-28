import React, { useEffect, useState } from "react";
import PlanetCard from "./planetCard";
import "./ImageSection.css";

const ImageSection = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("/data/planet.json")
      .then((res) => res.json())
      .then((data) => setPlanets(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="imageSection" className="image-section">
      <div className="section-header">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      <div className="planets-grid">
        {planets.map((planet, index) => (
          <PlanetCard
            key={index}
            name={planet.planet}
            distance={planet.distanceFromSun}
            image={planet.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSection;
