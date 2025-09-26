import React from "react";
import "../styles/Header.css";
// import profilePic from "../assets/profile.jpg"; // tum apna image add karo public/images me
import profilePicture from '../assets/images/profile-picture.png'
export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="intro">
          <h1>Hello There!</h1>
          <h2>I am Yogesh Avadhut</h2>
          <p className="intro-description">AWS & MERN Stack Developer</p>
          <a href="#" className="resume-btn">View My Resume</a>
        </div>
        <div className="profile-image">
          <img src={profilePicture} alt="Profile" />
        </div>
      </div>
    </header>
  );
}
