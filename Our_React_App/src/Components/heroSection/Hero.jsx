import React from 'react';
import './Hero.css';
import earthImage from '../../assets/earth.png';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    };

  return (
    <section className="hero">
        <div className="container">
            <header className="hero-header">
                <h2 className="hero-logo">Planet Stats</h2>
            </header>

            <div className="hero-content">
                <div className="hero-text">
                    <h1>Explore Our Solar System Through Data</h1>
                    <p>
                        Understand the planets not just by name, but by
                        measurable facts. From size and mass to gravity and density,
                        this page breaks down the solar system in a clear, data-driven way.
                    </p>

                    <div className="hero-btns">
                        <button className="btn btn-primary"
                        onClick={() => scrollToSection('imageSection')}>
                            Explore the Data
                        </button>

                        <button className="btn btn-outline"
                        onClick={() => scrollToSection('Form')}>
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={earthImage} alt="The Earth" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;