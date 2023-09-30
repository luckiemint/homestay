// import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import ''

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/src/assets/images/logo.png" alt="Logo" />
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
      </div>
      <div />
    </div>
  );
};

export default Header;
