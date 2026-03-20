import React from 'react';
import '../videoSection/VideoSection.css';
import videoPlaceHolder from '../../assets/video-poster.jpg';
import earthVideo from '../../assets/planet-vid.mp4';
const VideoSection = () => {

  return (
    <section className="video-section">
        <div className="container video-grid">
            <div className="video-column">
                <div className="video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='video-element'>
                            <source src={earthVideo} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>

                        <div className="play-overelay">
                            <div className="play-triangle"></div>
                        </div>
                </div>
            </div>

            <div className="text-column">
                <h2>How Planetary Data Helps Us Understand Space</h2>
                <p>
                    Planetary science goes beyond images. Comparing
                    <span className="highlight"> mass</span>,
                    <span className="highlight"> diameter</span>,
                    <span className="highlight"> gravity</span>, and
                    <span className="highlight"> density</span>,
                    we gain insight imto how palnets form, behave, and interact
                    within the solar system.
                </p>
            </div>
        </div>
    </section>
  )
}

export default VideoSection;