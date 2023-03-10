import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./skills.scss";
const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="boxes">
        <div className="box">
          <h3>Frontend</h3>
          <div className="front-skills">
            <div className="skill">
              <FontAwesomeIcon className="icon" icon={faHtml5} />
              <div className="caption">
                <h4>HTML</h4>
                <span>Intermediate</span>
              </div>
            </div>
            <div className="skill">
              <FontAwesomeIcon className="icon" icon={faCss3} />
              <div className="caption">
                <h4>CSS</h4>
                <span>Intermediate</span>
              </div>
            </div>
            <div className="skill">
              <FontAwesomeIcon className="icon" icon={faJs} />
              <div className="caption">
                <h4>JAVASCRIPT</h4>
                <span>Intermediate</span>
              </div>
            </div>
            <div className="skill">
              <FontAwesomeIcon className="icon" icon={faReact} />
              <div className="caption">
                <h4>REACT</h4>
                <span>Beginner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
