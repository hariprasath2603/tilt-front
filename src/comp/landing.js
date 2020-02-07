import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import breakfast from "../images/breakfast.svg";

// creating landing page with tow button and a svg
const Landing = () => {
  return (
    <div className="landingMain">
      <span className="landingWelcome">
        <h3>Welocome To </h3>
        <h1>MobTel</h1>
        <Link to="/order">
          <button className="btnlan addBtn">Order Now</button>
        </Link>
        <Link to="/menu">
          <button className="btnlan removeBtn">Menu</button>
        </Link>
      </span>
      <span className="landingImage ">
        <img src={breakfast} width="300px" alt="Breakfast" />
      </span>
    </div>
  );
};

export default Landing;
