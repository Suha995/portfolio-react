import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const handleClick = () => {
    console.log("click");
    document.getElementsByClassName("sidebar")[0].style.display = "flex";
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Suhair</div>
        <div className="burger" onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="sidebar">
          <Link to={"/"}>HOME</Link>
          <Link to={"/skills"}>SKILLS</Link>
          <Link to={"/Projects"}>PROJECTS</Link>
          <Link to={"/Contact"}>CONTACT</Link>
        </div>
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
