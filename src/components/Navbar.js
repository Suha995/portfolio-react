import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Suhair</div>
        <div className="links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/skills"}>SKILLS</Link>
          <Link to={"/Projects"}>PROJECTS</Link>
          <Link to={"/Contact"}>CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
