import React from "react";
import "../styles/Navbar.css"; // Import CSS for Navbar styles
import acmLogo from "../assets/acm-logo.png"; // Import the logo
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Navbar() {
  const navigate = useNavigate();

  const handleLinkClick = (e, target) => {
    e.preventDefault(); // Prevent default behavior of anchor links

    // Check if the link is for internal scrolling
    if (target === "live-stream") {
      navigate("/live-stream"); // Navigate to live-stream route
    } else {
      // For in-page navigation, scroll to the target section
      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Left side: Logo + Text */}
        <div className="navbar-left">
          <img src={acmLogo} alt="ACM Logo" className="navbar-logo" />
          <div className="navbar-text">
            <div>ASSOCIATION FOR</div>
            <div>COMPUTING MACHINE</div>
            <h1>SIST STUDENT CHAPTER</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>About</a>
          <a href="#events" onClick={(e) => handleLinkClick(e, "events")}>Events</a>
          <a href="#gallery" onClick={(e) => handleLinkClick(e, "gallery")}>Gallery</a>
          <a href="#join" onClick={(e) => handleLinkClick(e, "join-us")}>Join Us</a>
          <a href="#team" onClick={(e) => handleLinkClick(e, "team")}>Team</a>
          {/* Live Stream Link with Scroll Behavior */}
          <a href="/live-stream" onClick={(e) => handleLinkClick(e, "live-stream")} className="live-stream">
          Live Stream
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
