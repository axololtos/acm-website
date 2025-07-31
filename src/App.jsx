import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar'; // Make sure Navbar is imported
import LiveStream from './components/LiveStream.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary routing components

const App = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // Define the scrollToSection function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: fullName,
      phone: phone,
      reason: reason,
    };

    console.log("Form data being sent:", formData); // Log the data to verify

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message); // Success message
        scrollToSection("response-section"); // Scroll to a section (optional)
      } else {
        console.log("Response error:", data); // Log the error message
        setResponseMessage(data.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setResponseMessage("An error occurred while submitting the form.");
    }

    // Reset form after submission
    setFullName('');
    setPhone('');
    setReason('');
  }

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <Navbar />

        <Routes>
          {/* Define routes */}
          <Route path="/live-stream" element={<LiveStream />} />
          {/* Add other routes here for different sections */}
        </Routes>
        
        {/* Home Section */}
        <div className="section home-section" id="home">
          {/* Add additional text starting from navbar to Join Us */}
          <div className="home-additional-text">
            <h1>EXPLORE LIMITLESS</h1>
            <p className="possibilities">POSIBILITIES</p> {/* Apply the new class here */}
            <p className="sub-heading">Driving innovation and collaboration among tech enthusiasts,</p>
            <p className="sub-heading">shaping the future of computing on campus.</p>
          </div>

          <div className="join-us-text" onClick={() => scrollToSection("join-us")}>
            Join Us
          </div>
        </div>

        {/* About Section */}
        <div className="section about-section" id="about">
          <div className="about-text">
            ABOUT
          </div>

          {/* New Class for "Inspiring Innovation" and "Empowering Tech Leaders" */}
          <div className="inspiring-text">
            <h1>Inspiring Innovation</h1>
            <h2>Empowering Tech Leaders</h2>
          </div>

          {/* ACM SIST Text */}
          <div className="acm-sist-text">
            ACM SIST
          </div>
          <p className="acm-paragraph">
            <span>ACM Sathyabama provides a platform for students to grow</span>
            <span>through a variety of tech and non-tech events. From workshops to</span>
            <span>hackathons, we aim to encourage learning, collaboration, and skill</span>
            <span>development for everyone involved.</span>
          </p>
        </div>

        {/* Gallery Section */}
        <div className="section gallery-section" id="gallery">
          <h1>Gallery</h1>
          <p>ACM Event Highlights</p>
        </div>

        {/* Team Section */}
        <div className="section team-section" id="team">
          <h1>Team</h1>
          <p>Meet Our Amazing Team</p>
        </div>

        {/* Events Section */}
        <div className="section events-section" id="events">
          <h1>Events</h1>
          <p>Join Our Ongoing Events</p>
          <p className="coming-soon-text" id="coming-soon">Coming Soon</p>
        </div>

        {/* Join Us Section */}
        <div className="section join-us-section" id="join-us">
          <h1>Be part of the future of </h1>
          <h2>ACM SIST</h2>
          <p>Unleash your potential -- join ACM SIST and be part of the tech revolution!</p>
          <h3>Wanna join ACM? Let’s get started!</h3>
          <h4>Why Do You Want Join Us?</h4>
          <textarea
            className="data-inputs"
            placeholder="Tell us why you want to join..."
            rows="4"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
          <h5>Full Name</h5>
          <input
            type="text"
            className="full-name-input"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <h6>Your Phone Number</h6>
          <input
            type="phone-number"
            className="phone_number-input"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>

        {/* Show response message after submission */}
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
      </div>
    </Router>
  );
}

export default App;
