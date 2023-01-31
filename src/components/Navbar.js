import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const handleClickBurger = () => {
    document.getElementsByClassName("sidebar")[0].style.display = "flex";
  };
  const handleClickClose = () => {
    document.getElementsByClassName("sidebar")[0].style.display = "none";
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Suhair</div>
        <div className="burger" onClick={handleClickBurger}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="sidebar">
          <span className="close-tab" onClick={handleClickClose}>
            &times;
          </span>
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
