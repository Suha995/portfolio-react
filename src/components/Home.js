import pPhoto from "../imgs/personal-photo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="icons">
        <a href="https://github.com/Suha995" target="_blank">
          <i class="fa-brands fa-github fa-3x"></i>
        </a>
        <a href="https://www.linkedin.com/in/suhair-aljammal/" target="_blank">
          <i class="fa-brands fa-linkedin fa-3x"></i>
        </a>
      </div>
      <div className="info">
        <div className="info-left">
          <h2>Suhair Aljammal</h2>
          <p>
            I'm web devloper. Seeking a position in front-end web develpoment to
            challenge and improve myself.
          </p>
        </div>
        <div className="info-right">
          <img src={pPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
