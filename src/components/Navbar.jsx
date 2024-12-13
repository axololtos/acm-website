import React from "react";
import "../styles/Navbar.css"; // Import CSS for Navbar styles
import acmLogo from "../assets/acm-logo.png"; // Import the logo

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Left side: Logo + Text */}
        <div className="navbar-left">
          {/* Logo Image */}
          <img src={acmLogo} alt="ACM Logo" className="navbar-logo" />
          <div className="navbar-text">
        <div>ASSOCIATION FOR</div>
        <div>COMPUTING MACHINE</div>
        <h1>SIST STUDENT CHAPTER</h1>
      </div>
    </div>
    {/* Navigation Links */}
    <div className="navbar-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#events">Events</a>
      <a href="#gallery">Gallery</a>
      <a href="#join">Join Us</a>
      <a href="#team">Team</a>
    </div>
  </div>
</div>
  );
}

export default Navbar;
