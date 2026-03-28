import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = 2026;
  const groupRepoUrl = "https://github.com/David-Temitope/Group10_Novara_Project.git";

  return (
    <footer id="Form" className="main-footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About</h3>
          <p className="team-description">
            We are a team of dedicated developers collaborating on 
            planetary data visualization.
          </p>
          <div className="team-members">
            <span>David, Victor, Daang, Oluwasemilore, Oluwaseun</span>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="copyright-info">
            <p>©{currentYear} Design by <a href="https://github.com/Anurella" target="_blank" rel="noreferrer">Amaka</a> &
            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">Ifeoma A</a>.</p>
            <p>
              Built by <a href={groupRepoUrl} className="group-link">TS Academy Group 10</a>. 
              All rights reserved
            </p>
          </div>
          <div className="footer-brand">
            <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">TSAcademy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;