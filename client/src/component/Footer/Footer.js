import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          Ethereum Powered Project{" "}
          <a
            className="profile"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            Secura
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by students of{" "}
          <a
            className="profile"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            Sri Sairam College of Engineering
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
