import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav>
        <span id="logo">MobTel</span>
        <span className="logo-right">
          <Link to="/">
            <span className="nav-item">Home</span>
          </Link>
          <Link to="/order">
            <span className="nav-item">Order</span>
          </Link>
          <Link to="/menu">
            <span className="nav-item">Menu</span>
          </Link>
          <Link to="/chef">
            <span className="nav-item">Chef</span>
          </Link>
        </span>
      </nav>
    );
  }
}

export default Navbar;
