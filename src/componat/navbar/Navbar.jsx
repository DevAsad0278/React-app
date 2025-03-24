import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img src="src/assets/heapware-logo.webp" alt="logo" />
        </div>
        <div className="nav-li">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Career</a>
          </li>
        </div>
        <div className="nav-btn">
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
