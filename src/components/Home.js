import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="icons">
        <a href="https://github.com/Suha995" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/suhair-aljammal/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
      <div className="info">
        <div className="info-left">
          <h2>Suhair Aljammal</h2>
          <p>
            I'm a web developer. Seeking a position in front-end web develpoment
            to challenge and improve myself.
          </p>
        </div>
        <div className="info-right">
          <img src="imgs/personal-photo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
